import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';

const routes: Routes =[
  {path: '', component: AbovethefoldComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'the-team', component: TheTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
