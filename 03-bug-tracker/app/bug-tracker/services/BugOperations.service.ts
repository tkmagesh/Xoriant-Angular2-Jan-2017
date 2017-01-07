import {Injectable} from '@angular/core';
import IBug from '../models/IBug';


@Injectable()
class BugOperations{

    createNew(bugName : string) : IBug {
        
        return {
            name : bugName,
            isClosed : false
        };
    }

    toggle(bug : IBug) : IBug {
        return {
            name : bug.name,
            isClosed : !bug.isClosed
        }
    }
}

export default BugOperations;