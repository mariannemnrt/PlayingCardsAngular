import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardsComponent } from './playing-cards/playing-cards.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardsComponent ,SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlayingCardsAngular';

monster1!:Monster;
count: number =0;
constructor(){
  this.monster1=new Monster();
  this.monster1.name="Dracofeu";
  this.monster1.hp=70;
  this.monster1.figureCaption="N°018 dracofeu";
  this.monster1.attackName="brulure";
  this.monster1.attackStrength=50;
  this.monster1.attackDescription="brule l'ennemi lui infligeant des points de dégats"

  
}
increaseCount(){
  this.count++;
}
  
}
