import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfActivityComponent} from './components/list-of-activity/list-of-activity.component';
import {ActivityDetailsComponent} from './components/activity-details/activity-details.component';
import {LogoutComponent} from './components/logout/logout.component';
import {LoginComponent} from './components/login/login.component';
import {GraphComponent} from './components/graph/graph.component';

const routes: Routes = [
  {path: '', component: ListOfActivityComponent},
  {path: 'activitiesList', component: ListOfActivityComponent},
  {path: 'activity/:id', component: ActivityDetailsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'graphs', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
