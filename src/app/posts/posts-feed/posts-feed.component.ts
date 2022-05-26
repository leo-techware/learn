import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/posts.model';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-posts-feed',
  templateUrl: './posts-feed.component.html',
  styleUrls: ['./posts-feed.component.css']
})
export class PostsFeedComponent implements OnInit {

  posts: Post[] = [];
  error: string = '';
  filterdText: string = "";

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.statusUpdate.subscribe((status: string) => {
      console.log(status);
      this.fetchPosts();
    });

    this.fetchPosts();
  }

  fetchPosts() {
    this.postsService.getPosts()
      .subscribe(data => {
        const resData: any = data;
        this.posts = resData;
      },
        error => {
          this.error = error.message;
          console.log(error);
        }
      )
  }


}
