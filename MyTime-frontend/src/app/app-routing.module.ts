import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfActivityComponent} from './components/list-of-activity/list-of-activity.component';
import {ActivityDetailsComponent} from './components/activity-details/activity-details.component';
import {LogoutComponent} from './components/logout/logout.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: 'activitiesList', component: ListOfActivityComponent},
  {path: 'activity', component: ActivityDetailsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
