import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @ViewChild('createForm') createForm: any;

  constructor(private postService: PostsService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.createForm.value;
    this.postService.publishPost(this.createForm.value)
      .subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        }
      );
  }

}
