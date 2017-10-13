import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Note } from './model';

@Injectable()
export class Notes {
  endpoint = 'http://localhost:4280';

  constructor(private http: HttpClient) {}

  all(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.endpoint}/notes/all`);
  }

  create(note: Note): Observable<Note> {
    return this.http
      .post<Note>(`${this.endpoint}/notes/create`, note);
  }
}
