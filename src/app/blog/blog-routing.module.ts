import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogsComponent} from "./blogs/blogs.component";
import {BlogDetailedComponent} from "./blog-detailed/blog-detailed.component";
import { NewBlogComponent } from './new-blog/new-blog.component';
import {EditBlogComponent} from "./edit-blog/edit-blog.component";

const routes: Routes = [
  {
    path: 'blogs',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BlogsComponent,
      },
      {
        path: ':blogId',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: BlogDetailedComponent,
          },
          {
            path: 'edit',
            component: EditBlogComponent
          }
        ]
      },
      {
        path: 'add',
        component: NewBlogComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
