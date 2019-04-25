import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[]): any[] {

        for (var i = 0; i < items.length; i++) {



            $.each(items[i], function (key, val) {
                 //console.log(key +"=="+val);
                if (val === "") {
                    items.splice(i, 1);

                }

            });

        }
        console.log(items);
        return items;
        

        
   

}
}