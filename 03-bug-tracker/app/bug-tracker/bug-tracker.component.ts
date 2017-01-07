import { Component } from '@angular/core'
import IBug  from './models/IBug';
import { BugStorage } from './services/BugStorage.service';
@Component({
    selector : 'bug-tracker',
    template : `
        
        <section class="content">
            <bug-stats [data] = "bugs" ></bug-stats>
            <section class="sort">
                <label for="">Order By :</label>
                <select [(ngModel)]="sortAttrName">
                    <option value="name">Name</option>
                    <option value="isClosed">Status</option>
                </select>
                <label for="">Descending ? :</label>
                <input type="checkbox" [(ngModel)]="sortOrder">
            </section>
            <bug-edit (onAddNew)="addNew($event)"></bug-edit>
            <section class="list">
                <ol>
                    <bug-item 
                        *ngFor="let bug of bugs | sort:sortAttrName:sortOrder" 
                        [data]="bug"
                        (onToggle) = "toggle($event)"
                    ></bug-item>
                </ol>
                <input type="button" value="Remove Closed" (click)="removeClosed()">
            </section>
        </section>

    `
})
export class BugTrackerComponent{
    bugs : Array<IBug> = new Array<IBug>();

    constructor(private bugStorage : BugStorage){
        this.bugs = this.bugStorage.getAll();
    }

    toggle(toBeToggledBug : IBug){
        this.bugs = this.bugs.map(bug => bug === toBeToggledBug ? this.bugStorage.toggle(bug) : bug);
    }
    addNew(newBugName : string){
        let newBug = this.bugStorage.save(newBugName);
        this.bugs = this.bugs.concat([newBug]);
        //this.bugs.push(newBug);
    }

    removeClosed(){

        for(let index = this.bugs.length-1; index >=0; index-- ){
            if (this.bugs[index].isClosed)
                this.bugStorage.remove(this.bugs[index]);
                this.bugs.splice(index,1);
        }
 }

   
}

