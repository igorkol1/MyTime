import {Component, OnInit} from '@angular/core';
import {Activity} from 'src/app/models/activity.model';
import {ActivityService} from 'src/app/services/activity.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  id: number;
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activity = new Activity(-1, 10001, '', '', new Date, new Date);
    if (this.id != -1) {
      this.activityService.getActivity(this.id).subscribe(
        response => {
          this.activity = response;
        },
        error => {
          console.log(error.error.message);
        }
      );
    }
  }

  createActivity() {
    this.activityService.createActivity(this.activity).subscribe(
      data => {
        console.log(data);
        this.navigateToList();
      },
      error => console.log(error.error.message)
    );
  }

  navigateToList() {
    this.router.navigate(['activitiesList']);
  }
}
