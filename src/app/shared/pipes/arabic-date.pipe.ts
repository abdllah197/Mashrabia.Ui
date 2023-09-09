import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicDate'
})
export class ArabicDatePipe implements PipeTransform {

  transform(value: Date): string
  {
    //return value.toLocaleTimeString('ar-EG',{ hour: "2-digit", minute: "2-digit"});
    return  new Intl.DateTimeFormat('ar-EG',{dateStyle: 'short', timeStyle: 'short'}).format(value);
  }

}
