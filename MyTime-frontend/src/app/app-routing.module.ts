import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfActivityComponent} from './components/list-of-activity/list-of-activity.component';
import {ActivityDetailsComponent} from './components/activity-details/activity-details.component';

const routes: Routes = [
  {path: 'activitiesList', component: ListOfActivityComponent},
  {path: 'activity/:id', component: ActivityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
