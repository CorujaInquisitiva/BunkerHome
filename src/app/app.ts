import { Component, HostListener, OnInit, output, signal } from '@angular/core';
import { GAMES_COMPONENTS } from './games/games-standalone';
import { FoundryStatus } from './games/shared/models/foundry.model';
import { FoundryStatusService } from './games/shared/services/FoundryService.service';
import { SistemaEnum } from './shared/utils/enums/sistemas.enums';

@Component({
  selector: 'app-root',
  imports: [GAMES_COMPONENTS],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(readonly service: FoundryStatusService) {}
  personagemAtivo?: string | null = undefined;

  onPersonagemChange(personagem: any) {
    this.personagemAtivo = personagem;
  }

  sistemaAtual = signal<string | null>(null);

  sistemas = SistemaEnum;
  get isLargeScreen(): boolean {
    return window.innerHeight >= 601;
  }
  get menuStyle() {
    if (this.sistemaAtual() === this.sistemas.WFRP4E) {
      return { 'padding-top': this.isLargeScreen ? '80px' : '40px' };
    }
    return { 'padding-top': this.isLargeScreen ? '12%' : '7%' };
  }

  @HostListener('window:resize')
  ngOnInit(): void {
    this.service.getStatus().subscribe({
      next: (response: FoundryStatus) => {
        this.sistemaAtual.set(response.system);
        this.menuStyle;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
