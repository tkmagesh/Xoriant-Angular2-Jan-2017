import { Component } from '@angular/core'

@Component({
    selector : 'bug-tracker',
    template : `
        
        <section class="content">
            <section class="stats">
                <span class="closed">3</span>
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
                    <li>
                        <span class="bugname">This is bug - 1</span>
                        <div class="datetime">[Created At]</div>
                    </li>
                    <li>
                        <span class="bugname closed">This is bug - 2</span>
                        <div class="datetime">[Created At]</div>
                    </li>
                </ol>
                <input type="button" value="Remove Closed">
            </section>
        </section>

    `
})
export class BugTrackerComponent{
    bugs : Array<string> = new Array<string>();

    addNew(newBugName : string){
        this.bugs.push(newBugName);
    }
}