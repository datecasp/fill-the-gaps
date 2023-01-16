import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DroppableDirective } from 'angular-draggable-droppable';

/**
 *  Component to represent each button that holds a character of the random
 *  letters array.
 *  Recives as input the value of the letter
 *  
 */
@Component({
  selector: 'app-random-letter-button',
  templateUrl: './random-letter-button.component.html',
  styleUrls: ['./random-letter-button.component.css']
})
export class RandomLetterButtonComponent {

  @Input() letter: string = "";

  @ViewChild(DroppableDirective, { read: ElementRef, static: true })
  droppableElement: ElementRef | any;

  ngOnInit(): void {
  }

  dragEnd(event: any) {
    console.log('Element was dragged', event);
  }
}
