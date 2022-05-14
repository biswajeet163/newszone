import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsHeadlineComponent } from './news/news-headline/news-headline.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent,
    children: [
      { path: '', redirectTo: 'headlines', pathMatch: 'full' },
      { path: 'headlines', component: NewsHeadlineComponent },
      { path: 'details', component: NewsDetailComponent }
    ]
  },

  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
