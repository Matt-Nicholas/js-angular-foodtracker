import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {NewMealComponent} from './new-meal.component';
import {MealListComponent} from './meal-list.component';
import {CalFilterPipe} from './cal-filter.pipe';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    NewMealComponent,
    MealListComponent,
    CalFilterPipe,

   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
