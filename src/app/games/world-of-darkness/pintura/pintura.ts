import { Component, EventEmitter, Output } from '@angular/core';
import { WorldOfDarknessConstants } from '../../shared/utils/constants/world-of-darkness.constants';
import { WorldOfDarknessEnum } from '../../shared/utils/enums/world-of-darkness.enum';
import { PersonagemId } from '../../shared/utils/types/world-of-darkness.type';

@Component({
  selector: 'pintura-view',
  imports: [],
  templateUrl: './pintura.html',
  styleUrl: './pintura.css',
})
export class Pintura {
  @Output() personagemAtivoChange = new EventEmitter<string>();
  public personagens: PersonagemId[] = WorldOfDarknessConstants.THUMBS as PersonagemId[];
  public personagensEnum = WorldOfDarknessEnum;
  public personagemAtivo?: string;

  public selecionarPersonagem(personagem: string): void {
    this.personagemAtivo = personagem;
    this.personagemAtivoChange.emit(personagem);
  }
}
