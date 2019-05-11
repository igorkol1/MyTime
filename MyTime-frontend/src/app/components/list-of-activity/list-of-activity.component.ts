import {Component, OnInit} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {Router} from '@angular/router';
import {ActivityService} from '../../services/activity.service';

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
    private router: Router
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
      }
    );
  }

  deleteActivity(id: number) {
    this.activityService.deleteActivity(id).subscribe(
      response => {
        console.log(response);
        this.getActivities();
      }
    );
  }

  updateActivity(id: number) {
    console.log('Edit activity', id);
    this.router.navigate(['activity', id]);
  }

  increaseDate() {
    this.queryDate.setDate(this.queryDate.getDate() + 1);
    this.getActivities();
  }

  decreaseDate() {
    this.queryDate.setDate(this.queryDate.getDate() - 1);
    this.getActivities();
  }
}
