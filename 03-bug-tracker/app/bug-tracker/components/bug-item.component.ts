import { Component, Input, Output, EventEmitter } from '@angular/core'
import IBug from '../models/IBug';




@Component({
    selector : 'bug-item',
    template : `<li>
                        <span 
                            class="bugname" 
                            (click)="onBugNameClick(data)"
                            [ngClass]="{closed : data.isClosed}"
                        >{{data.name | trimText:40}}</span>
                        <div class="datetime">{{data.createdAt | elapsed}}</div>
                    </li>`
})
export class BugItemComponent{
    @Input()
    data : IBug = null;

    @Output()
    onToggle : EventEmitter<IBug> = new EventEmitter<IBug>();

    onBugNameClick(bug : IBug){
        this.onToggle.emit(bug);
    }

}