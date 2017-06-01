import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(coll: any[], filterBy: string): any[] {
        if(filterBy === undefined) {
            return coll;
        }

        console.log("transform");

        return coll.filter(contact => contact.name.indexOf(filterBy)!=-1);
    }
}