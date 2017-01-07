import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortPipe } from './Pipes/Sort.pipe';

@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [SortPipe ],
    providers : [],
    exports : [SortPipe]
})
export class UtilsModule{

}