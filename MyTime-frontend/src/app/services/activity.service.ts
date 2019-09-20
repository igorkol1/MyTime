import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Activity} from '../models/activity.model';
import {API_URL} from '../app.constans';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllActivities() {
    return this.http.get<Activity[]>(`${API_URL}activities`);
  }

  getAllActivitiesPerDate(date: Date) {
    console.log(this.formatDate(date));
    return this.http.get<Activity[]>(`${API_URL}activitiesForDate?forDate=${this.formatDate(date)}`);
  }

  createActivity(activity) {
    return this.http.post(`${API_URL}activities/addActivity`, activity);
  }

  deleteActivity(activityId: number) {
    return this.http.delete(`${API_URL}activities/deleteActivity/${activityId}`);
  }

  getActivity(activityId: number) {
    return this.http.get<Activity>(`${API_URL}activities/getActivity/${activityId}`);
  }

  private formatDate(dateToFormat: Date) {
    let mm: number = dateToFormat.getMonth() + 1;
    //Todo: This maybe not necessery after date in db fix
    let dd: number = dateToFormat.getDate() + 1;
    return [dateToFormat.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
    ].join('');
  }

}
