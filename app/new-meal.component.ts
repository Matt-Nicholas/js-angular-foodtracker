import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'new-meal',
  template: `
    <h1>Add a Meal</h1>
    <div>
      <label>Food Name:</label>
      <input #name>

      <label>Description:</label>
      <input #description>

      <label>Calories:</label>
      <input #calories type=number>
      <button (click)="
        addClicked(name.value, description.value, calories.value);
        name.value='';
        description.value='';
        calories.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: string) {
    var newMealToAdd: Meal = new Meal(name, description, parseInt(calories));
    this.newMealSender.emit(newMealToAdd);
  }
}
