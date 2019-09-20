import {AfterViewInit, Component, Inject, LOCALE_ID, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Activity} from 'src/app/models/activity.model';
import {ActivityService} from 'src/app/services/activity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityType} from '../../models/activity.type';
import {ActivityTypeService} from '../../services/activity-type.service';
import {User} from '../../models/user.model';
import {BsDatepickerConfig, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToastComponent, ToastType} from '../toast/toast.component';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  public id = null;
  systemUser: User;
  activity: Activity;
  activityTypes: ActivityType[];
  currentActivityType: ActivityType;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private activityService: ActivityService,
    private activityTypeService: ActivityTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: ToastComponent,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) {
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, {containerClass: 'theme-dark-blue'});
    this.currentActivityType = new ActivityType(-1, null, 'Choose activity type');
    this.refreshActivityTypesList();
    this.activity = new Activity(-1, this.systemUser, this.currentActivityType, '', new Date, '00:00:00', '00:00:00');
    if (this.id) {
      this.activityService.getActivity(this.id).subscribe(
        response => {
          this.activity = response;
          //Todo: Fix me (implement mapper?)
          this.activity.activityDate = new Date(this.activity.activityDate);
        },
        error => {
          this.toast.showToast(ToastType.ERROR, 'Fail to get activity');
          console.log(error.error.message);
        }
      );
    }
  }

  createActivity() {
    console.log(this.activity);
    this.activityService.createActivity(this.activity).subscribe(
      data => {
        this.bsModalRef.hide();
        this.toast.showToast(ToastType.SUCCESS, 'Record is saved');
        this.navigateToList();
      },
      error => {
        this.toast.showToast(ToastType.ERROR, 'Fail to save record');
        console.log(error.error.message);
      }
    );
  }

  navigateToList() {
    this.router.navigate(['activitiesList']);
  }

  back() {
    this.bsModalRef.hide();
  }

  selectActivityType(activityType: ActivityType) {
    this.currentActivityType = activityType;
    this.activity.activityType = this.currentActivityType;
    console.log(activityType);
  }

  addActivityType() {
    this.activityTypeService.addActivityType(this.currentActivityType).subscribe(response => {
      this.currentActivityType = <ActivityType>response;
      this.activity.activityType = this.currentActivityType;
      this.refreshActivityTypesList();
    });
  }

  refreshActivityTypesList() {
    this.activityTypeService.getActivityTypes().subscribe(response => {
        this.activityTypes = response;
      },
      error => {
        this.toast.showToast(ToastType.ERROR, 'Fail to get activity types');
        console.warn(error);
      }
    );
  }
}
