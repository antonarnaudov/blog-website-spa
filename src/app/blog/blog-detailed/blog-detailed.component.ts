import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import {ActivatedRoute, Router} from "@angular/router";
import { IBlogDetailed } from 'src/app/shared/interfaces/blogDetailed';
import { UserService } from 'src/app/user/user.service';
import {IUser} from "../../shared/interfaces";

@Component({
  selector: 'app-blog-detailed',
  templateUrl: './blog-detailed.component.html',
  styleUrls: ['./blog-detailed.component.scss']
})
export class BlogDetailedComponent {
  profile: IUser | undefined;
  blog: IBlogDetailed | undefined;
  constructor(
    private userService: UserService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getBlogDetailed();
    this.getUserById()
  }

  getUserById(): void {
    this.profile = undefined;
    this.userService.getUserById('0').subscribe(profile => this.profile = profile)
  }

  getBlogDetailed(): void {
    this.blog = undefined;
    const id = this.activatedRoute.snapshot.params.blogId;
    this.blogService.getBlogById(id).subscribe(blog => this.blog = blog)
  }

  deleteBlogById(): void {
    const id = this.activatedRoute.snapshot.params.blogId;
    this.blogService.deleteBlogById(id).subscribe()
    this.router.navigate(['/blogs'])
  }
}
