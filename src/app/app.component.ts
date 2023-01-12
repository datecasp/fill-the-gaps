import { Component, OnInit } from '@angular/core';
import { VerbsService } from './services/verbs.service';
import { VERBS_LIST } from '../data/verbs-list';
import { Verb } from './models/Verb';
import { VerbAttribute } from './models/VerbAttribute';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fill the gaps';
  verb: Verb | any;
  verbAttributeList: VerbAttribute[] | any;
  completeVerbAttribute: VerbAttribute | any;
  gappedVerbAttribute: VerbAttribute | any;
  letters: string[] | any;

  constructor(private verbsService: VerbsService) { }

  ngOnInit(): void {
    this.verb = this.getRandomVerb();
    this.verbAttributeList = this.getRandomVerbAttributes(this.verb);
    this.completeVerbAttribute = this.verbAttributeList[0];
    this.gappedVerbAttribute = this.verbAttributeList[1];
    this.letters = Array.from(this.gappedVerbAttribute.attribute);
  }

  private getRandomVerb(): Verb {
    return this.verbsService.getRandomVerbService();
  }

  private getRandomVerbAttributes(verb: Verb): VerbAttribute[] {
    return this.verbsService.getRandomVerbAttributesService(verb);
  }
}
