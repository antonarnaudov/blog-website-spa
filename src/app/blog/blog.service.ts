import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IBlog} from '../shared/interfaces/blog';
import {IBlogDetailed} from "../shared/interfaces/blogDetailed";

const API_URL = environment.apiURL

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {
  }

  getBlogs(search = '') {
    const query = search ? `/?search=${search}` : ''
    const blogs = this.http.get<IBlog[]>(`${API_URL}/blog${query}`)
    console.log(blogs)
    return blogs
  }

  getBlogById(id: string) {
    return this.http.get<IBlogDetailed>(`${API_URL}/blog/${id}`)
  }
}
