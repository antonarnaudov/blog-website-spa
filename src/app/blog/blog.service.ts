import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IBlog, IUser} from '../shared/interfaces';
import {IBlogDetailed} from "../shared/interfaces";
import {IBlogCreate} from "../shared/interfaces";

const API_URL = environment.apiURL

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {
  }

  getBlogs(search = '') {
    const query = search ? `/?search=${search}` : ''
    const blogs = this.http.get<IBlog[]>(`${API_URL}/blog${query}`)
    return blogs
  }

  getBlogById(id: string) {
    return this.http.get<IBlogDetailed>(`${API_URL}/blog/${id}`)
  }

  filterBlogByAuthorId(id: string) {
    return this.http.get<IBlog[]>(`${API_URL}/blog/?author=${id}`)
  }

  createBlog(blog: IBlogCreate) {
    let formData = new FormData();
    formData.append('topic', blog.topic)
    formData.append('title', blog.title)
    formData.append('content', blog.content)
    formData.append('image', blog.image)

    return this.http.post<IBlogDetailed>(`${API_URL}/blog/`, formData)
  }

  deleteBlogById(id: string) {
    return this.http.delete<void>(`${API_URL}/blog/${id}/`)
  }
}
