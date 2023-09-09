import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  @Input() searchItem='';
  @Output() searchItemEvent =new EventEmitter<string>();
  SearchAllItems(){
    this.searchItemEvent.emit(this.searchItem);
  }
}
