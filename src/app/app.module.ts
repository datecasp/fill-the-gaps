import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { VerbsService } from './services/verbs.service';
import { FinalDialogService } from './services/finalDialog.service';
import { GlobalDialogComponent } from './components/dialogs/global-dialog/global-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterButtonComponent,
    RandomLetterButtonComponent,
    LetterButtonRendererComponent,
    BlankButtonComponent,
    GlobalDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MaterialModule,
    DragAndDropModule,
    NgbModule
  ],
  providers: [ VerbsService, FinalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
