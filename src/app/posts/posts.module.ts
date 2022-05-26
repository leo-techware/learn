import { NgModule } from '@angular/core';
import { FilterPostPipe } from './shared/pipes/filter-post.pipe';
import { PostsRoutingModule } from './posts-routing.module';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { PostsFeedComponent } from './posts-feed/posts-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    PostsComponent,
    FilterPostPipe,
    PostsFeedComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule,
    HttpClientModule
  ]
})
export class PostsModule { }
