import { Injectable } from '@angular/core';
import { VerbsRepository } from '../repositories/verbs.repository';
import { VERBS_LIST } from 'src/data/verbs-list';
import { Verb } from '../models/Verb';
import { VerbAttribute } from '../models/VerbAttribute';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {

  constructor(private verbsRepo: VerbsRepository ) { }

  public getVerbsListService(): Verb[] {
    return this.verbsRepo.getVerbsList();
  }

  public getRandomVerb(): Verb[] | any {
    
  }

  public getRandomVerbAttribute(verb: Verb): Verb | any{
    
    

    
  }
}
