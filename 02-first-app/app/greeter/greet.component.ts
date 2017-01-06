import { Component } from '@angular/core';

@Component({
    selector : 'greeter',
    template : `
        <label>Name :</label>
        <input type="text" [(ngModel)]="name" />

        <input type="button" value="Greet" (click)="greet()">
        <h3>{{message}}</h3>
        <input type="button" value="Clear" (click)="clear()" />
    `
})
export class GreetComponent{
    message : string = 'Hello! Welcome to Angular 2.0!!'

    name : string = '';

    clear(){
        this.message = '';
    }

    greet(){
        this.message = `Hello ${this.name}, Have a nice day!!`;
    }
}

