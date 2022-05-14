import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHeadlineComponent } from './news/news-headline/news-headline.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsHeadlineComponent,
    HeaderComponent,
    FooterComponent,
    RightSideBarComponent,
    NewsComponent,
    PageNotFoundComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
