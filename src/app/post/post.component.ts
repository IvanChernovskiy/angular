import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService, Posts } from '../posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() p: Posts;
  @Output() postId: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateObj: EventEmitter<Posts> = new EventEmitter<Posts>();

  isInput = false;
  inputValue = '';

  post: Posts;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
  ) {}

  ngOnInit() {}

  updatePost() {
    this.isInput = true;
  }

  submitUpdate() {
    this.updateObj.emit({ ...this.p, title: this.inputValue });
  }

  removePost() {
    this.postId.emit(this.p.id);
  }
}
