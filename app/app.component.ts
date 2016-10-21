import {Component} from '@angular/core';
import {Meal} from './meal'
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Eat It!</h1>
    <div *ngFor="let meal of mealList">
      <h4>{{meal.name}}</h4>
    </div>
    <h3>Total calories: {{calorieTotal()}}</h3>
  </div>
  `
})

export class AppComponent {
  public mealList: Meal[] = [
    new Meal('Toast', 'Toasted bread and butter', 80),
    new Meal('Banana', 'Fruit', 105),
    new Meal('General Tso\'s Chicken', 'Delicious', 1000)
  ];
  calorieTotal(){
    var total: number = 0;
    for(var i=0; i<this.mealList.length; i++){
      total += this.mealList[i].calories;
    }
    return total;
  }
}
