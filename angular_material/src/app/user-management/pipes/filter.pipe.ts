import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  accentChar = /[\u0300-\u036f]/gi;
  transform(value: any, filterString: string): any {
    // if (filterString) {
    //   return value;
    // }

    const inputString = filterString.toLowerCase().replace(/\s+/g, '');
    const result = value.filter((user: any) =>
      user.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .normalize('NFD')
        .replace(this.accentChar, '')
        .includes(inputString)
    );

    return result;
  }
}
