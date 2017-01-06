import { Component } from '@angular/core';

@Component({
    selector : 'greeter',
    template : `
        <label>Name :</label>
        <input type="text" [(ngModel)]="name" />

        <input type="button" value="Greet" (click)="greet()">
        

        <greet-display 
            [displayMessage]="message"
            (onClear)="clearMessage()"
            ></greet-display>
    `
})
export class GreetComponent{
    message : string = 'Hello! Welcome to Angular 2.0!!'

    name : string = '';

    clearMessage(){
        this.message = '';
    }

    greet(){
        this.message = `Hello ${this.name}, Have a nice day!!`;
    }
}

