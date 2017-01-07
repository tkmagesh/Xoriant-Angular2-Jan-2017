import { Injectable } from '@angular/core';
import  IBug  from '../models/IBug';
import BugOperations from './BugOperations.service';

@Injectable()
export class BugStorage {
    maxBugId : number = 0;
    storage = window.localStorage;

    constructor(private bugOperations : BugOperations){

    }

    getAll() : Array<IBug>{
        let result = new Array<IBug>();
        for(let index = 0; index < this.storage.length; index++){
            let bug = JSON.parse(this.storage.getItem(this.storage.key(index)));
            this.maxBugId = this.maxBugId > bug.id ? this.maxBugId : bug.id;
            result.push(bug);
        }
        return result;
    }
    save(bugName : string) : IBug{
        let newBug = this.bugOperations.createNew(++this.maxBugId, bugName);
        this.storage.setItem(newBug.id.toString(), JSON.stringify(newBug));
        return newBug;
    }
    toggle(bug : IBug) : IBug{
        let toggledBug = this.bugOperations.toggle(bug);
        this.storage.setItem(toggledBug.id.toString(), JSON.stringify(toggledBug));
        return toggledBug;
    }
    remove(bug : IBug) : void{
        this.storage.removeItem(bug.id.toString());
    }
}
