import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FeedsService} from './services/feeds.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { FeedsComponent } from './feeds/feeds.component';
import { NewsComponent } from './news/news.component';
import {UserService} from './services/user.service';
import {JwPaginationComponent} from 'jw-angular-pagination';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    NewsComponent,
    JwPaginationComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    FeedsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
