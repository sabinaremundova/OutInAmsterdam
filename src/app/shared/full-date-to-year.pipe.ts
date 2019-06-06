import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fullDateToYear'
})
export class FullDateToYearPipe implements PipeTransform {

  public transform(value: string): string {
    if (value === '') {
      return '-';
    }
    return value.slice(value.length - 4, value.length);
    // last 4 chars
  }

}
