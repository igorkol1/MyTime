import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap';
import {ActivityDetailsComponent} from '../activity-details/activity-details.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private modalRef: BsModalRef;

  constructor(
    private router: Router,
    private auth: AuthorizationService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
  }

  addActivity() {
    this.modalRef = this.modalService.show(ActivityDetailsComponent);
  }

  logout() {
    this.router.navigate(['logout']);
  }

  goToGraphs() {
    this.router.navigate(['graphs']);
  }
}
