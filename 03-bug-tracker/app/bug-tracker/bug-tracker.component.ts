import { Component } from '@angular/core'
import IBug  from './models/IBug';
import BugOperations from './services/BugOperations.service';

@Component({
    selector : 'bug-tracker',
    template : `
        
        <section class="content">
            <section class="stats">
                <span class="closed">{{ bugs | closedCount }}</span>
                <span> / </span>
                <span>{{bugs.length}}</span>
            </section>
            <section class="sort">
                <label for="">Order By :</label>
                <select [(ngModel)]="sortAttrName">
                    <option value="name">Name</option>
                    <option value="isClosed">Status</option>
                </select>
                <label for="">Descending ? :</label>
                <input type="checkbox" [(ngModel)]="sortOrder">
            </section>
            <section class="edit">
                <label for="">New Bug :</label>
                <input type="text" #txtBugName>
                <input type="button" value="Add New" (click)="addNew(txtBugName.value)">
            </section>
            <section class="list">
                <ol>
                    <li *ngFor="let bug of bugs | sort:sortAttrName:sortOrder">
                        <span 
                            class="bugname" 
                            (click)="toggle(bug)"
                            [ngClass]="{closed : bug.isClosed}"
                        >{{bug.name | trimText:40}}</span>
                        <div class="datetime">[Created At]</div>
                    </li>
                </ol>
                <input type="button" value="Remove Closed" (click)="removeClosed()">
            </section>
        </section>

    `
})
export class BugTrackerComponent{
    bugs : Array<IBug> = new Array<IBug>();

    constructor(private bugOperations : BugOperations){

    }

    toggle(toBeToggledBug : IBug){
        this.bugs = this.bugs.map(bug => bug === toBeToggledBug ? this.bugOperations.toggle(bug) : bug);
    }
    addNew(newBugName : string){
        let newBug = this.bugOperations.createNew(newBugName);
        //this.bugs = this.bugs.concat([newBug]);
        this.bugs.push(newBug);
    }

    removeClosed(){

        /*for(let index = this.bugs.length-1; index >=0; index-- ){
            if (this.bugs[index].isClosed)
                this.bugs.splice(index,1);
        }*/

        this.bugs = this.bugs.filter(function(bug){
            return !bug.isClosed;
        });
    }

    getClosedCount(){
        console.info('get closed count triggered');
        return this.bugs.filter(bug => bug.isClosed).length;
    }
}

