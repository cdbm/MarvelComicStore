import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent} from './comic-detail/comic-detail.component';

const routes: Routes = [
  {path: 'detail/:id', component: ComicDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
