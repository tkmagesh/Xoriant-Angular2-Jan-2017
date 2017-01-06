import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTrackerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
