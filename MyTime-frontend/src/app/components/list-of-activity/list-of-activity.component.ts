import {Component, OnInit} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {Router} from '@angular/router';
import {ActivityService} from '../../services/activity.service';
import {DAY_INTERVAL} from '../../app.constans';
import {ToastComponent, ToastType} from '../toast/toast.component';

@Component({
  selector: 'app-list-of-activity',
  templateUrl: './list-of-activity.component.html',
  styleUrls: ['./list-of-activity.component.css']
})
export class ListOfActivityComponent implements OnInit {

  activities: Activity[];
  queryDate: Date;

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private toast: ToastComponent
  ) {
  }

  ngOnInit() {
    this.queryDate = new Date();
    this.getActivities();
  }

  getActivities() {
    this.activityService.getAllActivitiesPerDate(this.queryDate).subscribe(
      respone => {
        console.log(respone);
        this.activities = respone;
      },
      error => {
        this.toast.showToast(ToastType.ERROR, 'Fail to get activities');
        console.warn(error);
      }
    );
  }

  deleteActivity(id: number) {
    this.activityService.deleteActivity(id).subscribe(
      response => {
        this.toast.showToast(ToastType.SUCCESS, 'Record deleted');
        console.log(response);
        this.getActivities();
      },
      error => {
        this.toast.showToast(ToastType.ERROR, 'Fail to delete record');
        console.warn(error);
      }
    );
  }

  updateActivity(id: number) {
    console.log('Edit activity', id);
    this.router.navigate(['activity', id]);
  }

  increaseDate() {
    this.queryDate = new Date(this.queryDate.getTime() + DAY_INTERVAL);
    this.getActivities();
  }

  decreaseDate() {
    this.queryDate = new Date(this.queryDate.getTime() - DAY_INTERVAL);
    this.getActivities();
  }
}
