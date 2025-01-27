import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardsComponent } from './playing-cards/playing-cards.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlayingCardsAngular';

monster1!:Monster;
constructor(){
  this.monster1=new Monster();
  this.monster1.name="pikachu";
  this.monster1.hp=70;
  this.monster1.figureCaption="N°018 Pikachu";
  this.monster1.attackName="éclair";
  this.monster1.attackStrength=50;
  this.monster1.attackDescription="envoie un eclair électrique"

}
}
