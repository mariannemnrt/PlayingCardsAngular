import { Component,Output,Input, EventEmitter,output, input, model } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchButtonclicked = output();
  searchChange= output<string>();

  search=model<string>('Initial');

 

  searchClick(){
    this.searchButtonclicked.emit();
  }

}
