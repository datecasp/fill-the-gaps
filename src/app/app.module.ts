import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../material.module';
import { LetterButtonComponent } from './components/letter-button/letter-button.component';
import { RandomLetterButtonComponent } from './components/random-letter-button/random-letter-button.component';
import { LetterButtonRendererComponent } from './components/letter-button-renderer/letter-button-renderer.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { BlankButtonComponent } from './components/blank-button/blank-button.component';
import { SuccessDialogComponent } from './components/dialogs/success-dialog/success-dialog.component';
import { FailDialogComponent } from './components/dialogs/fail-dialog/fail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterButtonComponent,
    RandomLetterButtonComponent,
    LetterButtonRendererComponent,
    BlankButtonComponent,
    SuccessDialogComponent,
    FailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MaterialModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
