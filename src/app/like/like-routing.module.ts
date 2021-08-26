import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowLikesComponent} from "./show-likes/show-likes.component";

const routes: Routes = [
  {
    path: 'like',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ShowLikesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LikeRoutingModule {
}
