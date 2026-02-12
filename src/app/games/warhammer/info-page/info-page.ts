import { Component, Input } from '@angular/core';
import { WarhammerConstants } from '../../shared/utils/constants/warhammer.constants';
import { PersonagemId } from '../../shared/utils/types/warhammer.types';
import { NgClass } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'info-page',
  imports: [],
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
}
