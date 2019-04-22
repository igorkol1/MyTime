import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../app.constans';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  header: HttpHeaders;
  isAuthorize = false;

  constructor(
    private http: HttpClient
  ) {
  }

  authorize(username: String, password: String) {
    this.http.post <Observable<boolean>>(API_URL + 'login', {
        userName: username,
        password: password
      }, {headers: this.header}
    ).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('Authorization', 'Basic ' +
          btoa(username + ':' + password));
        this.isAuthorize = true;
      } else {
        console.log('Invalid login');
      }
    });
  }

  getToken() {
    return sessionStorage.getItem('Authorization');
  }

}
