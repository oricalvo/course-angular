import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(coll: any[], filterBy: string): any[] {
        if(filterBy === undefined) {
            return coll;
        }

        return coll.filter(contact => contact.name.indexOf(filterBy)!=-1);
    }
}