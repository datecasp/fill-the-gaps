import { Injectable } from '@angular/core';
import { VerbsRepository } from '../repositories/verbs.repository';
import { VERBS_LIST } from 'src/data/verbs-list';
import { Verb } from '../models/Verb';
import { VerbAttribute } from '../models/VerbAttribute';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {
  private verbList: Verb[] | any;
  private verbAttributeList: VerbAttribute[] | any;

  constructor(private verbsRepo: VerbsRepository) {
    this.verbList = this.verbsRepo.getVerbsList();
  }

  public getVerbsListService(): Verb[] {
    return this.verbList;
  }

  public getRandomVerbService(): Verb | any {
    return this.verbList[Math.floor(Math.random() * this.verbList.length)];
  }

  public getRandomVerbAttributesService(verb: Verb): VerbAttribute[] | any{
    switch (Math.floor(Math.random() * 4)) {
      case 0:

        this.verbAttributeList[0].id = 0;
        this.verbAttributeList[0].attribute = verb.spanish;
        break;
      case 1:
        this.verbAttributeList[0].id = 1;
        this.verbAttributeList[0].attribute = verb.present;
        break;
      case 2:
        this.verbAttributeList[0].id = 2;
        this.verbAttributeList[0].attribute = verb.past;
        break;
      case 3:
        this.verbAttributeList[0].id = 3;
        this.verbAttributeList[0].attribute = verb.participle;
        break;
    }
  }
}
