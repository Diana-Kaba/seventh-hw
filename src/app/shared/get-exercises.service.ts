import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class GetExercisesService implements InMemoryDbService {

  url: string = 'api/exercises';

  constructor(private http: HttpClient) {}

  createDb() {
    const exercises = [
      { id: 1, name: 'Велосипед' },
      { id: 2, name: 'Скалолаз' },
      { id: 3, name: 'Віджимання' },
      { id: 4, name: 'Присідання' },
      { id: 5, name: 'Підтягування' },
      { id: 6, name: 'Бруси' }
    ];
    return { exercises };
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url);
  }
}
