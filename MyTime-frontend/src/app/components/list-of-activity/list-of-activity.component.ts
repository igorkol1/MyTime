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

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log('Test oninit');
    this.getActivities();
  }

  getActivities() {
    this.activityService.getAllActivities('10001').subscribe(
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
}
