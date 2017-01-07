import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    transform(data : Array<any>, attrName : string, isDescending : boolean = false) : Array<any>{
        if (!data.length || !attrName)
            return data;
        let comparer : IComparer = getComparer(attrName);
        if (isDescending)
            comparer = getDescending(comparer);
        return data.sort(comparer);
    }
}

interface IComparer {
    (item1 : any, item2 : any ) : number
}

function getComparer(attrName:string) : IComparer {
    return function (item1 : any, item2 : any) : number{
        if (item1[attrName] < item2[attrName])
            return -1;
        if (item1[attrName] > item2[attrName])
            return 1;
        return 0;
    }
}

function getDescending(comparer :IComparer ) : IComparer{
    return function(item1 : any, item2 : any){
        return comparer(item1, item2) * -1;
    }
}