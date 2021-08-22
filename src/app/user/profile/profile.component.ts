import {Component} from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import {IBlog, IUser} from "../../shared/interfaces";
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profile: IUser | undefined;
  // blogs: IBlog[] | undefined;
  // blogsLength: number | undefined;

  constructor(
    private userService: UserService,
    // private blogService: BlogService,
  ) {
    this.getProfile();
    // this.getBlogs()
  }

  getProfile(): void {
    this.profile = undefined;
    this.userService.getUserById('0').subscribe(profile => this.profile = profile)
    // this.blogs = undefined;
    // this.blogService.filterBlogByAuthorId(String(this.profile!.id)).pipe().subscribe(blog => this.blogs = blog)
    // this.blogsLength = this.blogs!.length;
  }
}
