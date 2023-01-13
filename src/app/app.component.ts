import { Component, OnInit } from '@angular/core';
import { VerbsService } from './services/verbs.service';
import { VERBS_LIST } from '../data/verbs-list';
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
  completeVerbAttribute: VerbAttribute | any;
  gappedVerbAttribute: VerbAttribute | any;
  letters: string[] | any; 

  constructor(private verbsService: VerbsService,
    private tools: Tools) { }

  ngOnInit(): void {
    this.verb = this.getRandomVerb();
    this.getRandomVerbAttributes(this.verb);
    //this.letters = Array.from(this.gappedVerbAttribute.attribute);
    this.letters = this.getRandomGapsGappedVerbAttribute(this.gappedVerbAttribute.attribute);
  }

  private getRandomVerb(): Verb {
    return this.verbsService.getRandomVerbService();
  }

  private getRandomVerbAttributes(verb: Verb) {
    this.completeVerbAttribute = this.verbsService.getRandomVerbAttributesService(verb);
    do {
      this.gappedVerbAttribute = this.verbsService.getRandomVerbAttributesService(verb);
    } while (this.gappedVerbAttribute.id == this.completeVerbAttribute.id);
  }

  private getRandomGapsGappedVerbAttribute(attribute: string): string[] | any {
    return this.tools.gappedArray(attribute);
  }
}
