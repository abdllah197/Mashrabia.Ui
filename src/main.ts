/// <reference types="@angular/localize" />

import {enableProdMode} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import { provideRouter} from "@angular/router";
import { routes } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[
      provideRouter(routes),
      provideAnimations(),
      TranslateModule
  ]

})
.catch(err => console.error(err));
