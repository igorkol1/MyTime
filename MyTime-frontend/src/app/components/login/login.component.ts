import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../app.constans';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';
import {error} from '@angular/compiler/src/util';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  invalidLogin = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthorizationService) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.authorize(this.user.username, this.user.password);
    if (!this.auth.isAuthorize) {
      this.invalidLogin = true;
    }
  }

  clearFields() {
    this.user.username = '';
    this.user.password = '';
    this.invalidLogin = false;
  }
}
