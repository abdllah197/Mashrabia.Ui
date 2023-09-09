import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateApi'
})
export class TranslateApiPipe implements PipeTransform {

  constructor(private translateService:TranslateService){
  }
  transform(value: any): any {
    if(this.translateService.currentLang=='ar'){
      return value.nameAr
    }
    return value.nameEn;
  }

}
