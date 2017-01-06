import { Component } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculator.model';
@Component({
    selector : 'salary-calculator',
    template : `
        <div class="content">
            <div class="field">
                <label for="">Basic :</label>
                <input type="number" [(ngModel)]="calculator.basic">
            </div>
            <div class="field">
                <label for="">HRA :</label>
                <input type="number" [(ngModel)]="calculator.hra">
            </div>
            <div class="field">
                <label for="">DA :</label>
                <input type="number" [(ngModel)]="calculator.da">
                </div>
            <div class="field">
                <label for="">Tax :</label>
                <input type="range"  min="0" max="30" [(ngModel)]="calculator.tax">
                <span id="spanTax">{{calculator.tax}}</span>
            </div>
            <div class="field">
                <input type="button" value="Calculate" (click)="calculator.calculate()">
            </div>
            <div class="field">
                <div id="divResult">{{calculator.salary}}</div>
            </div>
        </div>
    `
})
export class SalaryCalculatorComponent{
    constructor(public calculator : SalaryCalculatorModel){
        
    }
}

