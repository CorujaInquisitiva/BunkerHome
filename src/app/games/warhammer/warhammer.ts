import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { WarhammerConstants } from '../shared/utils/constants/warhammer.constants';
import { StyleUtils } from '../shared/utils/style.utils';
import { PersonagemId } from '../shared/utils/types/warhammer.types';

@Component({
  selector: 'warhammer-home',
  imports: [CommonModule],
  templateUrl: './warhammer.html',
  styleUrl: './warhammer.css',
})
export class Warhammer implements OnInit{
  ngOnInit(): void {
    this.atualizarPosicoes();
  }
  public personagens: PersonagemId[] = WarhammerConstants.THUMBS as PersonagemId[];
  public personagemAtivo: string = '';

  styles: Partial<Record<PersonagemId, any>> = {};

  atualizarPosicoes() {
    debugger
    this.styles = StyleUtils.aplicarPosicoes(this.personagens);
  }

  @HostListener('window:resize')
  onResize() {
    this.atualizarPosicoes();
  }

  public selecionarPersonagem(personagem: string): void {
    this.personagemAtivo = personagem;
    console.log(this.personagemAtivo);
  }
}
