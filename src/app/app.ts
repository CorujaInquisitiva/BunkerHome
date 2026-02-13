import { Component, OnInit, signal } from '@angular/core';
import { GAMES_COMPONENTS } from './games/games-standalone';
import { FoundryStatusService } from './games/shared/services/FoundryService.service';
import { FoundryStatus } from './games/shared/models/foundry.model';
import { SistemaEnum } from './shared/utils/enums/sistemas.enums';

@Component({
  selector: 'app-root',
  imports: [GAMES_COMPONENTS],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(readonly service: FoundryStatusService) {}
  public sistemaAtual: string = '';
  public sistemas = SistemaEnum;
  ngOnInit(): void {
    this.service.getStatus().subscribe({
      next: (response: FoundryStatus) => {
        this.sistemaAtual = response.system;
      },
      error: (err: any) => {
        console.error('Erro ao buscar status:', err);
      },
    });
  }
  protected readonly title = signal(this.sistemaAtual === 'wfrp4e' ? 'Warhammer: Velho Mundo' : 'Vampiro: Dark Ages');
}
