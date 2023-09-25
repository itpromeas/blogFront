import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts!: Observable<Array<Post>>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }
}
