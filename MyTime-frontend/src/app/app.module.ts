import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListOfActivityComponent} from './components/list-of-activity/list-of-activity.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ActivityDetailsComponent} from './components/activity-details/activity-details.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {TokenInterceptor} from './services/token-interceptor';
import {BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import {TimepickerModule} from 'ngx-bootstrap';
import {GraphComponent} from './components/graph/graph.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListOfActivityComponent,
    ActivityDetailsComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
