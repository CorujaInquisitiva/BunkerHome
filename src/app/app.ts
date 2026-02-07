import { Component, signal } from '@angular/core';
import { GAMES_COMPONENTS } from './games/games-standalone';

@Component({
  selector: 'app-root',
  imports: [GAMES_COMPONENTS],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BunkerHome');
}
