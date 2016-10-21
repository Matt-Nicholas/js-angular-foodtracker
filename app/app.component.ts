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
    <meal-list
      [childMealList]="mealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
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
