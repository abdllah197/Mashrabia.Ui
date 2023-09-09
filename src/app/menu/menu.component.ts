import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  lang:string;
  directionType:string;
  constructor(private translateService:TranslateService){
    this.lang=this.translateService.currentLang;
  }
  hideState:boolean=false;
  searchText='';
  categoryId:string='';
  hideComponent(){
    this.searchText='';
    this.setHideState(false);
  }
  getSearchText(searchValue:string){
    if(searchValue!=''){
      this.searchText=searchValue;
      this.categoryId='All';
      this.setHideState(true);
    }
    else{
      this.searchText='';
      this.categoryId='';
      this.setHideState(false);
    }
  }
  getCategoryId(categoryId:string){
    this.categoryId=categoryId;
  }
  setHideState(state:boolean){
    this.hideState=state;
  }
  changeLang(){
    if(this.lang=='ar'){
      localStorage.setItem('language','en');
      localStorage.setItem('languageDirection','ltr');
    }
    else{
      localStorage.setItem('language','ar');
      localStorage.setItem('languageDirection','rtl');
    }
    window.location.reload();
  }
}
