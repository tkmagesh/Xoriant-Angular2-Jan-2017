import { Injectable } from '@angular/core';
import IBug  from '../models/IBug';
import BugOperations from './BugOperations.service';

declare var fetch : any;

@Injectable()
export class BugServer{
    constructor(private bugOperations : BugOperations){

    }
    getAll () : Promise<Array<IBug>>{
        return fetch('http://localhost:8080/bugs')
            .then((response : any) => response.json())
    }

    addNew ( bugName : string) : Promise<IBug>{
         return fetch('http://localhost:8080/bugs', {
            headers : {
                'content-type' :'application/json'
            },
            method : 'POST',
            body : JSON.stringify(this.bugOperations.createNew(0, bugName))
        })
        .then((response : any) => response.json())
    }
}