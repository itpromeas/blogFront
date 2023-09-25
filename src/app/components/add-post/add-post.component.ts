import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  post: Post;
  title = new FormControl('');
  content = new FormControl('');

  constructor(private postService: PostService, private router: Router) {
    this.postForm = new FormGroup({
      title: this.title,
      content: this.content,
    });
    this.post = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
  }

  addPost() {
    this.post.content = this.postForm.get('content')?.value;
    this.post.title = this.postForm.get('title')?.value;
    this.post.username = localStorage.getItem('username') as string;
    //let jwt = localStorage.getItem('jwt') as string;
    //this.post.username = localStorage.getItem('username');
    this.postService.addPost(this.post).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }
}