import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthorizationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request token: ' + this.auth.getToken());
    if (this.auth.isAuthorize) {
      request = request.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
      console.log('Request added token: ' + request.headers.get('Authorization'));
    }
    return next.handle(request);
  }
}
