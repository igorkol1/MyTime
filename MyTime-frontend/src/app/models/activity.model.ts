export class Activity {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public description: string,
    public start: Date,
    public finish: Date
  ) {
  }
}
