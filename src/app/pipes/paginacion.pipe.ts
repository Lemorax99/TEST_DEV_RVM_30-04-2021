import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(array: any[],page_size:number): any[] {
    if(!array.length)return[]

    page_size = page_size || 5


    return array.slice(23 * page_size,(23 + 1) * page_size);
  }

}
