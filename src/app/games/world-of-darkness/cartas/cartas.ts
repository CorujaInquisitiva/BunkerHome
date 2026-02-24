import { Component, Input } from '@angular/core';
import { PersonagemId } from '../../shared/utils/types/world-of-darkness.type';
import { WorldOfDarknessConstants } from '../../shared/utils/constants/world-of-darkness.constants';

@Component({
  selector: 'cartas',
  imports: [],
  templateUrl: './cartas.html',
  styleUrl: './cartas.css',
})
export class Cartas {
  @Input() personagemAtivo?: string = '';
  get backgroundUrl(): string {
    if (!this.personagemAtivo) return 'none';
    return `url(assets/vampire/fundos/${this.personagemAtivo}.png)`;
  }
  get infoText(): string {
    return WorldOfDarknessConstants.INFO[this.personagemAtivo as PersonagemId] + '<br><br><br>';
  }
}
