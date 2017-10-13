import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Note, Notes } from '../../api';

@Component({
  selector: 'awr-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.scss']
})
export class NotesGrid implements OnInit {
  notes$;

  constructor(private service: Notes) {}

  ngOnInit() {
    this.notes$ = this.service.all();
  }

  store(note: Note) {
    this.service
      .create(note)
      .subscribe();
  }
}
