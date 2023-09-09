import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {
  constructor(private translateService:TranslateService){

  }

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
