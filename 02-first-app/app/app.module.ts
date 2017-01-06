import { NgModule }      from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { GreetComponent } from './greeter/greet.component';
import { SalaryCalculatorComponent } from './salaryCalculator/SalaryCalculator.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GreetComponent, SalaryCalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
