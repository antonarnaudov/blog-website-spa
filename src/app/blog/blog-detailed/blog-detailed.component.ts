import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import {ActivatedRoute} from "@angular/router";
import { IBlogDetailed } from 'src/app/shared/interfaces/blogDetailed';

@Component({
  selector: 'app-blog-detailed',
  templateUrl: './blog-detailed.component.html',
  styleUrls: ['./blog-detailed.component.scss']
})
export class BlogDetailedComponent {

  blog: IBlogDetailed | undefined;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getBlogDetailed();
  }

  getBlogDetailed(): void {
    this.blog = undefined;
    const id = this.activatedRoute.snapshot.params.blogId;
    this.blogService.getBlogById(id).subscribe(blog => this.blog = blog)
  }

}
