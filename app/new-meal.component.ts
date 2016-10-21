import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'new-meal',
  template: `
    <h1>Add a Meal</h1>
    <div>
      <label>Food Name:</label>
      <input #name><br>
      <label>Description:</label>
      <input #description><br>
      <label>Calories:</label>
      <input #calories type=number><br>
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
    if(!name){
      name = "No name"
    }
    if(!description){
      description = "No description"
    }
    if(isNaN(parseInt(calories))){
      alert("Don't forget to enter calories. You dont want to cheat your self. ;)")
    }else{
      var newMealToAdd: Meal = new Meal(name, description, parseInt(calories));
      this.newMealSender.emit(newMealToAdd);
    }
  }
}
