import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform, inject } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {
  translateService:TranslateService=inject(TranslateService);

  transform(items: any[], searchText: string): any[] {
    if (searchText == "") return items;

    searchText = searchText.toLowerCase();

    if(this.translateService.currentLang=='en'){
      return items.filter(it => {
        return it.nameEn.toLowerCase().includes(searchText);
      });
    }
    else{
      return items.filter(it => {
        return it.nameAr.includes(searchText);
      });
    }

  }

}
