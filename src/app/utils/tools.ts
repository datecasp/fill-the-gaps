import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tools {
  public gappedArray(attribute: string): string[] | any {
    let result: string[] = Array.from(attribute);
    this.resetStringArray(result);
    let attributeCharArray = Array.from(attribute);
    if (attributeCharArray.length > 2) {
      for (let i = 0; i < (attributeCharArray.length/2)-1; i++) {
        if (!attributeCharArray[i].match(/[a-z]/i)) {
          result[i] = attributeCharArray[i];
        }
        else {
          let index = Math.floor(Math.random() * attributeCharArray.length);
          result[index] = attributeCharArray[index]; 
        }
      }
    }
    return result;
  }

  public resetStringArray(array: string[]): string[] {
    for (let i = 0; i < array.length; i++) {
      array[i] = " ";
    }
    return array;
  }
}
