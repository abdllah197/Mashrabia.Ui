import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'arabicDate',
})
export class ArabicDatePipe implements PipeTransform {

  transform(value: Date): string
  {
    return  new Intl.DateTimeFormat('ar-EG',{dateStyle: 'short', timeStyle: 'short'}).format(new Date(value));
  }

}
