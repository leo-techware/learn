import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  statusUpdate = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://test-app-7a0cb-default-rtdb.firebaseio.com/posts.json')
      .pipe(map((responseData: any) => {
        const postsArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key })
          }
        }
        return postsArray;
      }),
        catchError(errorRes => {
          return throwError(errorRes);
        }))
  }

  publishPost(postData: { title: string, content: string }) {

    // Modifying http request

    let searchParams = new HttpParams;
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http.post('https://test-app-7a0cb-default-rtdb.firebaseio.com/posts.json',
      postData, {
      headers: new HttpHeaders({ 'custome-header': 'publish' }),
      params: searchParams,
      responseType: 'json'
    })
      .pipe(map(response => {
        this.statusUpdate.emit('updated');
        return response;
      }),
        catchError(errorRes => {
          return throwError(errorRes);
        }))
  }
}
