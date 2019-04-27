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

  createActivity(activity) {
    return this.http.post(`${API_URL}activities/addActivity`, activity);
  }

  deleteActivity(activityId: number) {
    return this.http.delete(`${API_URL}activities/deleteActivity/${activityId}`);
  }

  getActivity(activityId: number) {
    return this.http.get<Activity>(`${API_URL}activities/getActivity/${activityId}`);
  }
}
