import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthorizationService
  ) {
  }

  ngOnInit() {
  }

  addActivity() {
    this.router.navigate(['activity', -1]);
  }

  logout() {
    this.router.navigate(['logout']);
  }

  goToGraphs() {
    this.router.navigate(['graphs']);
  }
}
