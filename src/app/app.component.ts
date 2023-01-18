import { Component, OnInit } from '@angular/core';
import { VerbsService } from './services/verbs.service';
import { Verb } from './models/Verb';
import { VerbAttribute } from './models/VerbAttribute';
import { Tools } from './utils/tools';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './components/dialogs/success-dialog/success-dialog.component';
import { FailDialogComponent } from './components/dialogs/fail-dialog/fail-dialog.component';

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
    public dialog: MatDialog,
    private tools: Tools) { }

  ngOnInit(): void {
    this.getValues();
    }

  private getValues() {
    this.verb = this.getRandomVerb();
    this.getRandomVerbAttributes(this.verb);
    this.completeVerbAttribute = Array.from(this.gappedVerbAttribute.attribute);
    this.btnGappedVerbAttribute = this.getRandomGapsGappedVerbAttribute(this.gappedVerbAttribute.attribute);
    this.btnRandomLetters = this.getRandomLetters(this.completeVerbAttribute, this.btnGappedVerbAttribute);
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

  public checkResult(resultArray: string[]) {
    let success: boolean = true;
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] != this.gappedVerbAttribute.attribute[i]) {
        this.dialog.open(FailDialogComponent, {
          data: {
            name: this.gappedVerbAttribute.toString()
          }
        });
        success = false;
        break;
      }
    }
    if (success) {
      this.dialog.open(SuccessDialogComponent, {
        data: {
          name: this.gappedVerbAttribute.toString()
        }
      });
    }
  }
}
