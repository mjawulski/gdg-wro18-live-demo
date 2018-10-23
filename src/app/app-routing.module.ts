import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';

const routes: Routes = [
  { path: 'add-new-question', component: AddNewQuestionComponent },
  {
    path: '',
    redirectTo: '/add-new-question',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/add-new-question' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
