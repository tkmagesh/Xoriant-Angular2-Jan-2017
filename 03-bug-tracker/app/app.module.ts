import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BugTrackerModule } from './bug-tracker/bug-tracker.module';

import { AppComponent }  from './app.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, BugTrackerModule ],
  declarations: [ AppComponent],
  providers :   [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
