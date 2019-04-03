import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  activity:Activity

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activity = new Activity(-1,10001,'','',new Date,new Date)
  }

  createActivity(){
    this.activityService.createActivity(10001,this.activity).subscribe(
      data => {
        console.log(data)},
      error => console.log(error.error.message) 
    )
  }

}
