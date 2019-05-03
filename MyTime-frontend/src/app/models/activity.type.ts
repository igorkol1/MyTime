import {User} from './user.model';

export class ActivityType {
  constructor(
    public id: number,
    public user: User,
    public activityName: String) {
  }
}
