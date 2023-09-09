import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mashrabia';
  direction:string;
  constructor(private translateService:TranslateService){
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
