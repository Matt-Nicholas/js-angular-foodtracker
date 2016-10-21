import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="edit-div">
      <h3>Edit Meal</h3>
      <label>Food Name:</label>
      <input [(ngModel)]="childSelectedMeal.name"><br>
      <label>Description:</label>
      <input [(ngModel)]="childSelectedMeal.details"><br>
      <label>Calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories" class="cal-field" type=number><br>
      <button (click)="doneClicked()">Done</button>
    </div>
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }
}
