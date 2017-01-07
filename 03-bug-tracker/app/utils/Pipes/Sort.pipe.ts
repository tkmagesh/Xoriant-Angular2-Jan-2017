import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    transform(data : any, attrName : string, isDescending : boolean = false) : any{
        if (!(data && data.length && attrName))
            return data;
        let comparer : IComparer = this.getComparer(attrName);
        if (isDescending)
            comparer = this.getDescending(comparer);
        return data.sort(comparer);
    }

     getComparer(attrName:string) : IComparer {
        return function (item1 : any, item2 : any) : number{
            if (item1[attrName] < item2[attrName])
                return -1;
            if (item1[attrName] > item2[attrName])
                return 1;
            return 0;
        }
    }

    getDescending(comparer :IComparer ) : IComparer{
        return function(item1 : any, item2 : any){
            return comparer(item1, item2) * -1;
        }
    }
}

interface IComparer {
    (item1 : any, item2 : any ) : number
}

