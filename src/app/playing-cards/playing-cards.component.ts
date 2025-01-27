import { Component,Input } from '@angular/core';
import { Monster } from '../models/monster.model';

@Component({
  selector: 'app-playing-cards',
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {
  @Input() monster: Monster=new Monster();

  }


