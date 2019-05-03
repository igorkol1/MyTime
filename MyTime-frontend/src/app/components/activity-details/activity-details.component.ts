import {Component, OnInit} from '@angular/core';
import {Activity} from 'src/app/models/activity.model';
import {ActivityService} from 'src/app/services/activity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityType} from '../../models/activity.type';
import {ActivityTypeService} from '../../services/activity-type.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  id: number;
  systemUser: User;
  activity: Activity;
  activityTypes: ActivityType[];
  currentActivityType: ActivityType;
  newActivityName: String;

  constructor(
    private activityService: ActivityService,
    private activityTypeService: ActivityTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    //Todo: Refactor me
    this.systemUser = new User('system', 'system');
    this.id = this.activatedRoute.snapshot.params['id'];
    this.currentActivityType = new ActivityType(-1, this.systemUser, 'Choose activity type');
    this.refreshActivityTypesList();
    this.activity = new Activity(-1, this.systemUser, this.currentActivityType, '', new Date, new Date);
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
    console.log(this.activity);
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

  selectActivityType(activityType: ActivityType) {
    this.currentActivityType = activityType;
    this.activity.activityType = this.currentActivityType;
    console.log(activityType);
  }

  addActivityType() {
    this.currentActivityType.activityName = this.newActivityName;
    this.activityTypeService.addActivityType(this.currentActivityType).subscribe(() => {
      this.refreshActivityTypesList();
    });
  }

  refreshActivityTypesList() {
    this.activityTypeService.getActivityTypes().subscribe(response => {
        console.log(response);
        this.activityTypes = response;
      }
    );
  }
}
