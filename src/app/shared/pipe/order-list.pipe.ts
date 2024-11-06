import { Pipe, PipeTransform } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): RecipeModel[] {
    try {
      if(!args){
        return value
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]){
            return -1
          } else if (a[args] === b[args]){
            return 0
          } else if (a[args] > b[args]){
            return 1
          }
          return 1
        })
        return (sort === 'asc') ? tmpList : tmpList.reverse()
      }
    } catch (e) {
      return value;
    }    
  }
}
