import { ComponentLibraryModule } from './../component-library/component-library.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    ComponentLibraryModule,

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard]
})
export class NotesModule { }
