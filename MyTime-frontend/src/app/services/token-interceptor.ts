import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthorizationService,
    private route: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthorize) {
      request = request.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
    }
    //TODO: Implement rediricting based on error status code
    return next.handle(request).pipe(map(event => {
        return event;
      }), catchError(err => {
        if (this.auth.getToken() === null) {
          this.handleUnauthorizeError();
        }
        return throwError(err);
      })
    );
  }

  private handleUnauthorizeError() {
    this.auth.isAuthorize = false;
    this.route.navigate(['/login']);
  }
}
