import { Component } from '@angular/core';
import { WorldOfDarknessConstants } from '../shared/utils/constants/world-of-darkness.constants';
import { WorldOfDarknessEnum } from '../shared/utils/enums/world-of-darkness.enum';
import { PersonagemId } from '../shared/utils/types/world-of-darkness.type';
import { Pintura } from './pintura/pintura';
import { Cartas } from './cartas/cartas';

@Component({
  selector: 'world-of-darkness-home',
  imports: [Pintura, Cartas],
  templateUrl: './world-of-darkness.html',
  styleUrl: './world-of-darkness.css',
})
export class WorldOfDarkness {
  public personagens: PersonagemId[] = WorldOfDarknessConstants.THUMBS as PersonagemId[];
  public personagensEnum = WorldOfDarknessEnum;
  public personagemSelecionado?: string;

  onPersonagemSelecionado(personagem: string) {
    this.personagemSelecionado = personagem;
    console.log(this.personagemSelecionado)
  }
}
