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
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { UserPlaylistsComponent } from './user-playlists/user-playlists.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HighestRatedMovieComponent } from './home/highest-rated-movie/highest-rated-movie.component';
import { FeaturedPlaylistComponent } from './home/featured-playlist/featured-playlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    FooterComponent,
    LoginComponent,
    UserPlaylistsComponent,
    PlaylistDetailComponent,
    CommentFormComponent,
     HighestRatedMovieComponent,
     FeaturedPlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
