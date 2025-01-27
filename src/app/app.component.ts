import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardsComponent } from './playing-cards/playing-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlayingCardsAngular';
}
