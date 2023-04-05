import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavComponent } from './shared/nav/nav.component';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';

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
    FooterComponent,
    LoginComponent,
    TheTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
