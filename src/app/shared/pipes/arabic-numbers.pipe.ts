import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicNumbers',

})
export class ArabicNumbersPipe implements PipeTransform {
  constructor(private translateService:TranslateService){
  }
  transform(n: number): string {
    if(this.translateService.currentLang=='ar'){
      if (n === null || n === undefined) {
        return '';
      }
      return new Intl.NumberFormat('ar-SA',{}).format(n);
    }
    return new Intl.NumberFormat('en-US',{}).format(n);

  }

}
