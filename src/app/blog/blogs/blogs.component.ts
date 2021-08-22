import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IBlog} from 'src/app/shared/interfaces/blog';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  blogs: IBlog[] | undefined
  errorLoadingUsers = false;
  search: string | undefined = ''

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {
    this.getBlogs()
  }

  getBlogs(search?: string): void {
    this.blogs = undefined;
    this.errorLoadingUsers = false;

    this.blogService.getBlogs(search).pipe().subscribe(
      blogs => {
        this.blogs = blogs // next fn
      },

      error => {
        console.error(error);
        this.errorLoadingUsers = true;
      }, // error fn
      () => console.log('load users stream completed') // completed fn
    );
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const {value} = searchInput;
    this.search = value;
    this.getBlogs(value);
  }

  refreshButtonHandler(): void {
    this.getBlogs()
  }
}
