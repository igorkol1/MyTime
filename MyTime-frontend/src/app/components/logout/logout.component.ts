import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthorizationService) { }

  ngOnInit() {
    this.auth.logout();
    this.auth.isAuthorize = false;
  }

}
