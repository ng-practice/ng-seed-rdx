import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    // NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard]
})
export class NotesModule { }
