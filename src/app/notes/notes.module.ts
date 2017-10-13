import { ReactiveFormsModule } from '@angular/forms';
import { NoteQuickAdd } from './board/note-quick-add/note-quick-add.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ComponentLibraryModule } from '../component-library/component-library.module';

import { Notes } from './api';

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

    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    ComponentLibraryModule,

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard, NoteQuickAdd],
  providers: [Notes]
})
export class NotesModule { }
