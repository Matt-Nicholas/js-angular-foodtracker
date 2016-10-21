import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal';

@Component({
  selector: 'meal-list',
  template:`
    <select (change)="onChange($event.target.value)" class="filter">
        <option value="all" selected="selected">Show All</option>
        <option value="highCal">Show High-Calorie Foods</option>
        <option value="lowCal" >Show Low-Calorie Foods</option>
      </select>
      <div *ngFor="let meal of childMealList | calFilter:selectedCals">
        <h4>{{meal.name}}</h4>
        <h5>{{meal.details}}</h5>
        <h6>Cals: {{meal.calories}}</h6>
      </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

  public selectedCals: string = "all";


}
