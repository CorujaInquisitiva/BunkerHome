import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { WarhammerConstants } from '../shared/utils/constants/warhammer.constants';
import { StyleUtils } from '../shared/utils/style.utils';
import { PersonagemId } from '../shared/utils/types/warhammer.types';
import { Montes } from './montes/montes';
import { Menu } from './menu/menu';
import { InfoPage } from './info-page/info-page';

@Component({
  selector: 'warhammer-home',
  imports: [CommonModule, Montes, Menu, InfoPage],
  templateUrl: './warhammer.html',
  styleUrl: './warhammer.css',
})
export class Warhammer implements OnInit {
  public personagens: PersonagemId[] = WarhammerConstants.THUMBS as PersonagemId[];
  public personagemAtivo: string = '';
  public styles: Partial<Record<PersonagemId, any>> = {};

  @HostListener('window:resize')
  public ngOnInit(): void {
    this.atualizarPosicoes();
  }

  public selecionarPersonagem(personagem: string): void {
    this.personagemAtivo = personagem;
  }

  public voltar(): void{
    this.personagemAtivo = '';
  }

  private atualizarPosicoes(): void {
    this.styles = StyleUtils.aplicarPosicoes(this.personagens);
  }
}
