import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../posts/posts.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(posts: Posts[], filter: string = ''): Posts[] {
    if (!filter.trim()) return posts;

    return posts.filter(post =>
      post.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }
}
