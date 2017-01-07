import {Injectable} from '@angular/core';
import IBug from '../models/IBug';


@Injectable()
class BugOperations{

    createNew(id : number , name : string) : IBug {
        
        return {
            id, 
            name,
            isClosed : false
        };
    }

    toggle(bug : IBug) : IBug {
        return {
            id : bug.id,
            name : bug.name,
            isClosed : !bug.isClosed
        }
        
    }
}

export default BugOperations;