import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

  public charMatcher(char: string): boolean {
    if (char.match(/[a-z/]/i)) {
      return true;
    }
    return false;
  }
}
