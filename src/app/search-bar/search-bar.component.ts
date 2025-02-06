import { Component,Output,Input, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchButtonclicked = new EventEmitter();
  @Output() searchChange= new EventEmitter<string>();

  @Input() search='Initial';

  updateSearch(value:string){
    this.searchChange.emit(value);
  }

  searchClick(){
    this.searchButtonclicked.emit();
  }

}
