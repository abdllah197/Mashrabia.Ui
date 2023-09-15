import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule } from 'src/app/shared/modules/translate/translate.module';

@Component({
  standalone:true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports:[NgxTranslateModule,FormsModule]

})
export class SearchComponent{
  @Input() searchItem='';
  @Output() searchItemEvent =new EventEmitter<string>();
  SearchAllItems(){
    this.searchItemEvent.emit(this.searchItem);
  }
}
