import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortPipe } from './Pipes/Sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [SortPipe, ElapsedPipe ],
    providers : [],
    exports : [SortPipe, ElapsedPipe]
})
export class UtilsModule{

}