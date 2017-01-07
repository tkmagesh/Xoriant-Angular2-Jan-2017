import { Pipe, PipeTransform } from '@angular/core';
import  IBug  from '../models/IBug';

@Pipe({
    name : 'closedCount',
    pure : true
})
class ClosedCountPipe implements PipeTransform{
    transform(data : Array<IBug>) : number {
        if (!(data && data.length)) return 0;
        return data.filter(bug => bug.isClosed).length;
    }
}

export default ClosedCountPipe;