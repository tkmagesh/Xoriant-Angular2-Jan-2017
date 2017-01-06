import { NgModule }      from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { GreetComponent } from './greeter/greet.component';
import { SalaryCalculatorComponent } from './salaryCalculator/SalaryCalculator.component';
import { SalaryCalculatorModel } from './salaryCalculator/salaryCalculator.model';
import { GreetDisplayComponent } from './greeter/greetDisplay.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GreetComponent, SalaryCalculatorComponent, GreetDisplayComponent ],
  providers:    [ SalaryCalculatorModel],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
