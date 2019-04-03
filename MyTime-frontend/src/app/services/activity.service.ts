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

  getAllActivities(userId) {
    return this.http.get<Activity[]>(`${API_URL}/activities/${userId}`);
  }
}
