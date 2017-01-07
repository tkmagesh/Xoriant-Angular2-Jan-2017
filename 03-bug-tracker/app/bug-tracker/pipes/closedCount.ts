import { Pipe, PipeTransform } from '@angular/core';
import  IBug  from '../models/IBug';

@Pipe({
    name : 'closedCount',
    pure : true
})
class ClosedCountPipe implements PipeTransform{
    transform(data : Array<IBug>) : number {
        console.info('closedCount filter triggered');
        return data.filter(bug => bug.isClosed).length;
    }
}

export default ClosedCountPipe;