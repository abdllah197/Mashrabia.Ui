import { NgxTranslateModule } from './shared/modules/translate/translate.module';
import { TranslateService} from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[CommonModule, RouterModule,NgxTranslateModule],
  providers:[TranslateService]
})
export class AppComponent {
  title = 'Mashrabia';
  direction:string;
  translateService:TranslateService=inject(TranslateService);
  constructor(){
    this.defaultSettings()
  }
  defaultSettings(){
    if(localStorage.getItem('language')==undefined || localStorage.getItem('languageDirection')==undefined){
      localStorage.setItem('language','en');
      localStorage.setItem('languageDirection','ltr');
    }
    this.translateService.use(localStorage.getItem('language'));
    this.direction=localStorage.getItem('languageDirection');
  }
}
