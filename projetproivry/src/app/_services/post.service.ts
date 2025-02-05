import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  uri = 'http://localhost:8080/posts';
  update = new Date();
  constructor(private http: HttpClient) { }
  addPost(title, content, auteur, url) {
    const obj = {
      title,
      content,
      auteur,
      url

    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));

  }
  getPosts() {
    return this
      .http
      .get(`${this.uri}`);
  }
  uploadImage(file: Object) {
    this.http.post(`${this.uri}/upload-image`, file).subscribe(res => console.log(res));
  }
  updatePost(Title: any, Content: any, Auteur: any, url: string, id: any) {
    const obj = {
      Title,
      Content,
      Auteur,
      url
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done', obj));
  }
  editPost(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  deletePost(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
