import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extend',
})
export class ExtendPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      return '[USER] ' + value;
    }
    return value;
  }
}
