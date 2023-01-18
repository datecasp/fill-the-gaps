import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DropEvent, DroppableDirective } from 'angular-draggable-droppable';

/**
 *  Component to represent each button that holds a character of the random
 *  letters array.
 *  Recives as input the value of the letter
 *  
 */
@Component({
  selector: 'app-letter-button-renderer',
  templateUrl: './letter-button-renderer.component.html',
  styleUrls: ['./letter-button-renderer.component.css']
})
export class LetterButtonRendererComponent implements OnInit {

  @Input() btnGappedVerbAttribute: string[] = [];
  @Input() btnRandomLetters: string[] = [];
  public resultado: string[] = [];
  public droppedData: string = "";
  public index: number = -1;
  @Output() finalEvent = new EventEmitter<string[]>();

  @ViewChild(DroppableDirective, { read: ElementRef, static: true })
  droppableElement: ElementRef | any;

  ngOnInit(): void {
    this.resultado = this.btnGappedVerbAttribute;
  }

  public charMatcher(char: string): boolean {
    if (char.match(/[a-z//]/i)) {
      return true;
    }
    return false;
  }

  onDrop({ dropData }: DropEvent<string>, i: number): void {
    this.droppedData = dropData;
    this.index = i;
    this.resultado[i] = dropData;

    if (this.checkFinalResult(this.resultado)) {
      this.finalEvent.emit(this.resultado);
    }
  }

  private checkFinalResult(result: string[]): boolean {
    for (let char of result) {
      if (!this.charMatcher(char)) {
        return false;
      }
    }
    return true;
  }
}
