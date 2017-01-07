import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BugTrackerComponent } from './bug-tracker.component';
import BugOperations  from './services/BugOperations.service';
import TrimTextPipe from './pipes/trimText.pipe';
import ClosedCountPipe from './pipes/closedCount';

@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [BugTrackerComponent, TrimTextPipe, ClosedCountPipe],
    providers : [BugOperations],
    exports : [BugTrackerComponent]
})
export class BugTrackerModule{

}