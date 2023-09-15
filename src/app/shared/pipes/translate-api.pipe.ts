import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform, inject } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'translateApi',
})
export class TranslateApiPipe implements PipeTransform {

  translateService:TranslateService=inject(TranslateService);
  transform(value: any): any {
    if(this.translateService.currentLang=='ar'){
      return value.nameAr
    }
    return value.nameEn;
  }

}
