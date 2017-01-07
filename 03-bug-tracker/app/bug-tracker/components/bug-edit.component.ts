import {Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'bug-edit',
    template : `
        <section class="edit">
                <label for="">New Bug :</label>
                <input type="text" #txtBugName>
                <input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
            </section>
    `
})
export class BugEditComponent{
    @Output()
    onAddNew : EventEmitter<string> = new EventEmitter<string>();

    onAddNewClick(bugName:string){
        this.onAddNew.emit(bugName);
    }

}