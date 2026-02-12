import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WarhammerConstants } from '../../shared/utils/constants/warhammer.constants';
import { PersonagemId } from '../../shared/utils/types/warhammer.types';

@Component({
  selector: 'info-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './info-page.html',
  styleUrl: './info-page.css',
})
export class InfoPage {
  @Input() personagemAtivo: string = '';
  get backgroundUrl(): string {
    if (!this.personagemAtivo) return 'none';
    return `url(assets/warhammer/fundos/${this.personagemAtivo}.png)`;
  }
  get infoText(): string {
    return WarhammerConstants.INFO[this.personagemAtivo as PersonagemId] + '<br><br><br>';
  }
  get textPosition(): string{
    return WarhammerConstants.POSICOES.charPosition[this.personagemAtivo as PersonagemId] === 'direito' ? 'esquerdo' : 'direito';
  }
}
