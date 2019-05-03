import {User} from './user.model';
import {ActivityType} from './activity.type';

export class Activity {
  constructor(
    public id: number,
    public user: User,
    public activityType: ActivityType,
    public description: string,
    public start: Date,
    public finish: Date
  ) {
  }
}
