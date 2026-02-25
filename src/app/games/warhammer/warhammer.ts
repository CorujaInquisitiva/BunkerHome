import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output, output } from '@angular/core';
import { WarhammerConstants } from '../shared/utils/constants/warhammer.constants';
import { StyleUtils } from '../shared/utils/style.utils';
import { PersonagemId } from '../shared/utils/types/warhammer.types';
import { InfoPage } from './info-page/info-page';
import { Montes } from './montes/montes';

@Component({
  selector: 'warhammer-home',
  imports: [CommonModule, Montes, InfoPage],
  templateUrl: './warhammer.html',
  styleUrl: './warhammer.css',
})
export class Warhammer implements OnInit {

  @Output() personagemAtivoChange = new EventEmitter<string>();

  public personagens: PersonagemId[] = WarhammerConstants.THUMBS as PersonagemId[];
  public personagemAtivo?: string;
  public styles: Partial<Record<PersonagemId, any>> = {};
  public ladoAtivo: 'esquerdo' | 'direito' | '' = '';

  public setPersonagem(personagem: string | undefined): void {
    this.personagemAtivo = personagem;
    if (personagem) {
      const lado =
        WarhammerConstants.POSICOES.charPosition[personagem as PersonagemId]
        || 'direito';

      this.ladoAtivo = lado;
    } else {
      this.ladoAtivo = '';
    }
    this.personagemAtivoChange.emit(personagem);
  }

  public selecionarPersonagem(personagem: string): void {
    this.setPersonagem(personagem);
  }

  public voltar(): void {
    this.setPersonagem(undefined);
  }

  @HostListener('window:resize')
  public ngOnInit(): void {
    this.atualizarPosicoes();
  }

  private atualizarPosicoes(): void {
    this.styles = StyleUtils.aplicarPosicoes(this.personagens);
  }
}
