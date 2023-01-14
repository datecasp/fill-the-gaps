import { Component, OnInit } from '@angular/core';
import { VerbsService } from './services/verbs.service';
import { Verb } from './models/Verb';
import { VerbAttribute } from './models/VerbAttribute';
import { Tools } from './utils/tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fill the gaps';
  verb: Verb | any;
  clueVerbAttribute: VerbAttribute | any;
  gappedVerbAttribute: VerbAttribute | any;
  completeVerbAttribute: string[] | any;
  btnGappedVerbAttribute: string[] | any;
  btnRandomLetters: string[] | any;
  isRandomLetterSlelectedFirst: boolean = false;
  hasLetter: boolean = false;
  selectedLetter: string = "";
  selectedGapLetter: string = "";

  constructor(private verbsService: VerbsService,
    private tools: Tools) { }

  ngOnInit(): void {
    this.verb = this.getRandomVerb();
    this.getRandomVerbAttributes(this.verb);
    this.completeVerbAttribute = Array.from(this.gappedVerbAttribute.attribute);
    this.btnGappedVerbAttribute = this.getRandomGapsGappedVerbAttribute(this.gappedVerbAttribute.attribute);
    this.btnRandomLetters = this.getRandomLetters(this.completeVerbAttribute, this.btnGappedVerbAttribute);
    this.disableFilledButtons();
  }

  private getRandomVerb(): Verb {
    return this.verbsService.getRandomVerbService();
  }

  private getRandomVerbAttributes(verb: Verb) {
    this.clueVerbAttribute = this.verbsService.getRandomVerbAttributesService(verb);
    do {
      this.gappedVerbAttribute = this.verbsService.getRandomVerbAttributesService(verb);
    } while (this.gappedVerbAttribute.id == this.clueVerbAttribute.id);
  }

  private getRandomGapsGappedVerbAttribute(attribute: string): string[] | any {
    return this.tools.gappedArray(attribute);
  }

  private getRandomLetters(gappedVerbAttribute: string[], btnGappedVerbAttribute: string[]): string[] {
    return this.tools.randomLetters(gappedVerbAttribute, btnGappedVerbAttribute);
  }

  private disableFilledButtons() {
    for (let letter of this.btnGappedVerbAttribute) {
      if (letter != " ") {
        this.hasLetter = true;
      }
      else {
        this.hasLetter = false;
      }
    }
  }

  public btnGappedVerbOnClick(letter: string) {
    if (this.isRandomLetterSlelectedFirst) {
      this.selectedGapLetter = this.selectedLetter;
    }
    else {
    }
    this.isRandomLetterSlelectedFirst = false;
  }

  public btnRandomLettersOnClick(letter: string) {
    this.selectedLetter = letter;
    this.isRandomLetterSlelectedFirst = true;
  }
}
