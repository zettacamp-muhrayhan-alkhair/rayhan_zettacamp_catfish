import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any): any {
    if (value.length > 17) {
      return value.substr(0, 18) + ' ...';
    }
    return value;
  }
}
