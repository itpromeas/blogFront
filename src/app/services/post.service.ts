import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { ApiURL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  constructor(private httpClient: HttpClient) {
  }

  addPost(postDTO: Post){
    return this.httpClient.post(ApiURL.post, postDTO);
  }

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(ApiURL.post);
  }

  getPost(permaLink: Number):Observable<Post>{
    return this.httpClient.get<Post>(ApiURL.getOnePost + permaLink);
  }
  
}
