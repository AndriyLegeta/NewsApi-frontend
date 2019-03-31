import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeedsComponent} from '../feeds/feeds.component';
import {NewsComponent} from '../news/news.component';
import {AuthComponent} from "../auth/auth.component";


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'feeds', component: FeedsComponent},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
