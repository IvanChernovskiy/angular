import { Component, OnInit } from '@angular/core';
import { Posts, PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  allPosts: Posts[] = [];
  postTitle: string = '';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPost().subscribe(posts => (this.allPosts = posts));
  }

  addPost() {
    if (!this.postTitle.trim()) return;
    this.postsService
      .addPost({
        title: this.postTitle,
        completed: false,
      })
      .subscribe(res => {
        this.allPosts.unshift(res);
        this.postTitle = '';
      });
  }

  removePost(id) {
    this.postsService
      .removePost(id)
      .subscribe(
        () => (this.allPosts = this.allPosts.filter(p => p.id !== id)),
      );
  }

  updatePost(obj) {
    this.postsService
      .updatePost(obj)
      .subscribe(
        () =>
          (this.allPosts = this.allPosts.map(p => (p.id === obj.id ? obj : p))),
      );
  }
}
