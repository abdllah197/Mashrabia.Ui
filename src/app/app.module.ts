import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule } from './shared/modules/translate/translate.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDatepickerModule,NgbModalModule,NgbOffcanvasModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterItemsPipe } from './shared/pipes/filter-items.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table.component';
import { CategoryComponent } from './menu/category/category.component'
import { ItemsComponent } from './menu/items/items.component';
import { QuantityComponent } from './menu/items/quantity/quantity.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './menu/order/order.component';
import { SearchComponent } from './menu/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowHideAnimationComponent } from './shared/animations/show-hide-animation/show-hide-animation.component';
import { TranslateApiPipe } from './shared/pipes/translate-api.pipe';
import { ArabicNumbersPipe } from './shared/pipes/arabic-numbers.pipe';
import { ArabicDatePipe } from './shared/pipes/arabic-date.pipe';
import { TestingOnlyComponent } from './testing-only/testing-only.component';
import { ModalModule } from 'ngx-bootstrap/modal';





@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    FilterItemsPipe,
    TableComponent,
    QuantityComponent,
    CategoryComponent,
    MenuComponent,
    OrderComponent,
    SearchComponent,
    ShowHideAnimationComponent,
    TranslateApiPipe,
    ArabicNumbersPipe,
    ArabicDatePipe,
    TestingOnlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTranslateModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TranslateApiPipe,
    ArabicNumbersPipe,
    ArabicDatePipe
  ],
})
export class AppModule { }
