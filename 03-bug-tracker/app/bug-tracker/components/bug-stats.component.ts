import { Component, Input, OnInit } from '@angular/core'
import IBug from '../models/IBug';

@Component({
    selector : 'bug-stats',
    template : `<section class="stats">
                <span class="closed">{{ data | closedCount }}</span>
                <span> / </span>
                <span>{{ data.length }}</span>
            </section>`
})
export class BugStatsComponent extends OnInit{
    @Input()
    data : Array<IBug> = null;

    dataCount : number = 0;

    ngOnInit(){
        
    }
    
}