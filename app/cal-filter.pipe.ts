import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal';

@Pipe({
  name: "calFilter",
  pure: false
})

export class CalFilterPipe implements PipeTransform {
  transform(input: Meal[], desiredCals) {
    var output: Meal[] = [];
    if(desiredCals === "highCal"){
      for(var i=0; i<input.length; i++){
        if (input[i].calories > 500){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCals === "lowCal"){
      for(var i=0; i<input.length; i++){
        if(input[i].calories <= 500){
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
