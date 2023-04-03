import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { NetworkQuestionsComponent } from './network-questions/network-questions.component';
import { OtherQuestionsComponent } from './other-questions/other-questions.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'security',
    pathMatch: 'full',
    component: SecurityQuestionsComponent,
  },
  {
    path: 'network',
    pathMatch: 'full',
    component: NetworkQuestionsComponent,
  },
  {
    path: 'other',
    pathMatch: 'full',
    component: OtherQuestionsComponent,
  },
  {
    path: 'results',
    pathMatch: 'full',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
