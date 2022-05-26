import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPost',
  pure: false
})
export class FilterPostPipe implements PipeTransform {

  transform(value: any, filterString: string | any): any {

    if (value.length === 0) {
      return value;
    }

    if (filterString == '') {
      return value;
    } else {
      const resultedArray = value.filter((data: any) => {
        if (data.title == filterString) {
          return data;
        }
      })
      
      return resultedArray;

    }

  }

}
