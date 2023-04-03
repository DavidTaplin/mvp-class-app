import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavComponent } from './shared/nav/nav.component';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavComponent,
    AbovethefoldComponent,
    HomeComponent,
    AboutUsComponent,
    TheTeamComponent,
    MovieCardComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
