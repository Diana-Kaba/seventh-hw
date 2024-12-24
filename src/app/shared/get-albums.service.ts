import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Album } from './albums';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums?_limit=10').pipe(
      map(data => {
        console.log(data);
        return data.map(item => new Album(item.id, item.title))
      })
    );
  }
}
