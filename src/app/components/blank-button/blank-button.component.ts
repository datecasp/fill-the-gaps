import { Component, ElementRef, ViewChild } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';
import { DroppableDirective } from 'angular-draggable-droppable';

@Component({
  selector: 'app-blank-button',
  templateUrl: './blank-button.component.html',
  styleUrls: ['./blank-button.component.css']
})
export class BlankButtonComponent {

  droppedData: string = "";

  @ViewChild(DroppableDirective, { read: ElementRef, static: true })
  droppableElement: ElementRef | any;

  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
    alert(this.droppedData);
  }
}
