import { Component, OnInit, output, signal } from '@angular/core';
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
    console.log(this.personagemAtivo);
    this.personagemAtivo = personagem;
  }

  sistemaAtual = signal<string | null>(null);

  sistemas = SistemaEnum;

  ngOnInit(): void {
    this.service.getStatus().subscribe({
      next: (response: FoundryStatus) => {
        this.sistemaAtual.set(response.system);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
