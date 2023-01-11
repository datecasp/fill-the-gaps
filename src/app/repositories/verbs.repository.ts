import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VERBS_LIST } from 'src/data/verbs-list';
import { Verb } from '../models/Verb';

@Injectable({
  providedIn: 'root'
})
export class VerbsRepository {

  verbsList: Verb[] = VERBS_LIST;

  public getVerbsList(): Verb[] {
    return this.verbsList;
  }

}
