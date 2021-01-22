import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WriteGuestionComponent} from './write-guestion/write-guestion.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/writeQuestion', pathMatch: 'full' },
  {path: 'writeQuestion', component: WriteGuestionComponent},
  {path: 'aboutMe', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
