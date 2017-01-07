import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BugTrackerComponent } from './bug-tracker.component';
import BugOperations  from './services/BugOperations.service';


@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [BugTrackerComponent],
    providers : [BugOperations],
    exports : [BugTrackerComponent]
})
export class BugTrackerModule{

}