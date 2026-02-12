import { Component, Input } from '@angular/core';

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
}
