import {Component} from '@angular/core';
import {Meal} from './meal'
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Eat It!</h1>
    <new-meal
      [childNotEditingMeal]="notEditingMeal"
      (newMealSender)="addMeal($event)"
    ></new-meal>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <div class="row">
      <div class="col-xs-6">
        <meal-list
          [childMealList]="mealList"
          (clickSender)="showDetails($event)"
        ></meal-list>
      </div>
      <div class="col-xs-6">
        <h6 id ="stats-head">Daily Stats:</h6>
        <div id="stats-div">
          <h3 [class.high-cal]="calorieTotal() > 2000">Total calories: {{calorieTotal()}}</h3>
          <h4>Daily Average: {{dailyAverage()}}</h4>
        </div>
      </div>
    </div>
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
  dailyAverage(){
    return (this.calorieTotal()/this.mealList.length)
  }
  addMeal(newMealFromChild: Meal){
    this.mealList.push(newMealFromChild);
  }
  notEditingMeal = true;
  selectedMeal = null;
  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
    this.notEditingMeal = false;
  }
  finishedEditing(){
    this.selectedMeal = null;
    this.notEditingMeal = true;

  }
}
