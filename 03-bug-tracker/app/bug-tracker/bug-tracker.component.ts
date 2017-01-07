import { Component } from '@angular/core'
import IBug  from './models/IBug';
import BugOperations from './services/BugOperations.service';

@Component({
    selector : 'bug-tracker',
    template : `
        
        <section class="content">
            <section class="stats">
                <span class="closed">{{getClosedCount()}}</span>
                <span> / </span>
                <span>{{bugs.length}}</span>
            </section>
            <section class="sort">
                <label for="">Order By :</label>
                <input type="text" name="" id="">
                <label for="">Descending ? :</label>
                <input type="checkbox" name="" id="">
            </section>
            <section class="edit">
                <label for="">New Bug :</label>
                <input type="text" #txtBugName>
                <input type="button" value="Add New" (click)="addNew(txtBugName.value)">
            </section>
            <section class="list">
                <ol>
                    <li *ngFor="let bug of bugs">
                        <span 
                            class="bugname" 
                            (click)="toggle(bug)"
                            [ngClass]="{closed : bug.isClosed}"
                        >{{bug.name}}</span>
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

    toggle(bug : IBug){
        this.bugOperations.toggle(bug);
    }
    addNew(newBugName : string){
        let newBug = this.bugOperations.createNew(newBugName);
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
        return this.bugs.filter(bug => bug.isClosed).length;
    }
}

