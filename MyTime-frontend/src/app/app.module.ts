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

@NgModule({
  declarations: [
    AppComponent,
    ListOfActivityComponent,
    ActivityDetailsComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
