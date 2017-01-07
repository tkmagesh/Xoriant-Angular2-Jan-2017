import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';

import { BugTrackerComponent } from './bug-tracker.component';
import { BugStatsComponent } from './components/bug-stats.component';
import { BugEditComponent } from './components/bug-edit.component';
import { BugItemComponent } from './components/bug-item.component';

import BugOperations  from './services/BugOperations.service';
import {BugStorage} from './services/BugStorage.service';
import { BugServer } from './services/BugServer.service';

import TrimTextPipe from './pipes/trimText.pipe';
import ClosedCountPipe from './pipes/closedCount';

@NgModule({
    imports : [CommonModule, FormsModule, UtilsModule],
    declarations : [BugTrackerComponent, TrimTextPipe, ClosedCountPipe, BugStatsComponent, BugEditComponent , BugItemComponent],
    providers : [BugOperations, BugStorage, BugServer],
    exports : [BugTrackerComponent]
})
export class BugTrackerModule{

}