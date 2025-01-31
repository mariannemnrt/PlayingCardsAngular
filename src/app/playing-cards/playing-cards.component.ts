import { Component,Input,InputSignal,input } from '@angular/core';
import { Monster } from '../models/monster.model';

@Component({
  selector: 'app-playing-cards',
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {
 
   monster: InputSignal <Monster>= input (new Monster);

  }


