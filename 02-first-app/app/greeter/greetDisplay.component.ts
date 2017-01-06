import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'greet-display',
    template : `
        <h3>{{displayMessage}}</h3>
        <input type="button" value="Clear" (click)="clear()"/>
    `
})
export class GreetDisplayComponent{

    @Input()
    displayMessage : string = '[Default display message]';

    @Output()
    onClear : EventEmitter<void> = new EventEmitter<void>();

    clear(){
        this.onClear.emit();
    }
}