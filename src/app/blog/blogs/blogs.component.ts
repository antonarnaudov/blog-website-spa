import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBlog } from 'src/app/shared/interfaces/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  blogs: IBlog[] | undefined

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {
    this.getBlogs()
  }

  getBlogs(): void {
    this.blogs = undefined
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs)
  }
}
