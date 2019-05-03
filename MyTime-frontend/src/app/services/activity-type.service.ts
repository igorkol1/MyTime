import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivityType} from '../models/activity.type';
import {API_URL} from '../app.constans';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getActivityTypes() {
    return this.http.get<ActivityType[]>(`${API_URL}activitytypes`);
  }

  addActivityType(activityType) {
    return this.http.post<ActivityType>(`${API_URL}addactivitytype`, activityType);
  }
}
