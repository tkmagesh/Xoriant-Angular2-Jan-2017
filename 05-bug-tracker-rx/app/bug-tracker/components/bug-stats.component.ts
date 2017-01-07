import { Component, Input } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
    selector : 'bug-stats',
    template : `
         <section class="stats">
            <span class="closed">{{ data | closedCount }}</span>
            <span> / </span>
            <span>{{data.length}}</span>
        </section>
    `
})
export class BugStatsComponent{
    
    @Input()
    data : Array<Bug> = new Array<Bug>();

}