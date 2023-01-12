import { Component, OnInit } from '@angular/core';
import { VerbsService } from './services/verbs.service';
import { VERBS_LIST } from '../data/verbs-list';
import { Verb } from './models/Verb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fill the gaps';
  verbs: Verb[] | any;
  verb: Verb | any;
  letters: string[] | any;

  constructor(private verbsService: VerbsService) { }

  ngOnInit(): void {
    this.verbs = this.verbsService.getVerbsListService();
    this.verb = this.getVerb();
    this.letters = Array.from(this.verb.present);
  }

  private getVerb(): Verb {
    return this.verbs[0];
  }


}
