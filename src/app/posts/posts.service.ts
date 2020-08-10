import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Posts {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
    );
  }

  addPost(newPost: Posts): Observable<Posts> {
    return this.http.post<Posts>(
      'https://jsonplaceholder.typicode.com/todos',
      newPost,
    );
  }

  updatePost(editPost: Posts): Observable<void> {
    return this.http.patch<void>(
      `https://jsonplaceholder.typicode.com/todos/${editPost.id}`,
      editPost,
    );
  }

  removePost(id: number): Observable<void> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
  }
}
