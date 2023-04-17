import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { SignupComponent } from './auth/signup/signup.component';

import { CommentsComponent } from './comments/comments.component';

import { UserPlaylistsComponent } from './user-playlists/user-playlists.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: AbovethefoldComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'the-team', component: TheTeamComponent },
  { path: 'user-playlists', component: UserPlaylistsComponent },
  { path: 'playlist-detail/:id', component: PlaylistDetailComponent },
  { path: 'comment-form', component: CommentFormComponent },
  { path: 'search-movie', component: SearchMovieComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
