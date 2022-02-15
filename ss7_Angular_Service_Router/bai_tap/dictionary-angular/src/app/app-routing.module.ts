import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// @ts-ignore
import {DictionaryPageComponent} from './component/dictionary/dictionary-page/dictionary-page.component';
// @ts-ignore
import {DictionaryDetailComponent} from './component/dictionary/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'dictionary/list', pathMatch: 'full'},
  {path: 'dictionary/list', component: DictionaryPageComponent},
  {path: 'dictionary/detail/:word', component: DictionaryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
