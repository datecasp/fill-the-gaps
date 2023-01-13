import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Utils {

  numbers: number[] | any;

  uniqueNumber: number | any;

  /**
   *   Gets a random number to randomize the verb selection
   *   or the attribute of verb to show or search 
   *   @param maxVal: number -> the top value for randomize
   *    * Number of verbs in VERBS_LIST
   *    * Number of Verb propieties
   *    
   * */
  public getRandomUniqueNumber(maxVal: number): number[] {
    let rdNum: number = Math.floor((Math.random() * maxVal) + 1);
    if (!this.numbers.includes(rdNum)) {
      this.numbers.push(rdNum);
      return this.numbers;
    }
    else if (this.numbers.length - 1 !== maxVal) {
      this.getRandomUniqueNumber(maxVal);
    }
    return this.numbers;
  }
}
