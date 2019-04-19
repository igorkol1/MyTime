import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../app.constans';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  header:HttpHeaders;

  constructor(
    private router: Router,
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  login() {
    this.header = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    this.http.post <Observable<boolean>>(API_URL + 'login', {
        userName: this.user.username,
        password: this.user.password
      }, {headers: this.header}
    ).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token',
          btoa(this.user.username + ':' + this.user.password));
        this.router.navigate(['/activitiesList']);
      } else {
        console.log('Invalid login');
      }
    });
  }

  clearFields() {
    this.user.username = '';
    this.user.password = '';
  }
}
