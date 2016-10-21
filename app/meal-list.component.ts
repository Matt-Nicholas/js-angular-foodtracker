import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal';

@Component({
  selector: 'meal-list',
  template:`
  <div class="list-div">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="highCal">Show High-Calorie Foods</option>
      <option value="lowCal" >Show Low-Calorie Foods</option>
    </select>
    <div class="scroll-box">
      <div *ngFor="let meal of childMealList | calFilter:selectedCals">
        <h4>{{meal.name}}</h4>
        <h5>{{meal.details}}</h5>
        <h6 [class.high-cal]="meal.calories > 500">Cals: {{meal.calories}}</h6>
        <button (click)="editButtonHasBeenClicked(meal)">Edit</button>
        <hr>
      </div>
    </div>
  </div>

  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCals: string = "all";    onChange(optionFromMenu) {
      this.selectedCals = optionFromMenu;
      console.log(this.selectedCals);
    }
    editButtonHasBeenClicked(mealToEdit: Meal) {
      this.clickSender.emit(mealToEdit);
    }



}
