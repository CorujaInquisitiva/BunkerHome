import { Component } from '@angular/core';
import { WorldOfDarknessConstants } from '../shared/utils/constants/world-of-darkness.constants';
import { PersonagemId } from '../shared/utils/types/world-of-darkness.type';
import { WorldOfDarknessEnum } from '../shared/utils/enums/world-of-darkness.enum';

@Component({
  selector: 'world-of-darkness-home',
  imports: [],
  templateUrl: './world-of-darkness.html',
  styleUrl: './world-of-darkness.css',
})
export class WorldOfDarkness {
  public personagens: PersonagemId[] = WorldOfDarknessConstants.THUMBS as PersonagemId[];
  public personagensEnum = WorldOfDarknessEnum;
  heleneHover = false;
  heleneFading = false;

  public getHover(personagem: string, leaving: boolean): boolean {
    if (leaving) {
      return (this.heleneHover = false);
    }
    return (this.heleneHover = personagem === this.personagensEnum.HELENE_VEU);
  }

  public getImagem(personagem: string): string {
    if (
      personagem === this.personagensEnum.HELENE_VEU ||
      personagem === this.personagensEnum.HELENE
    ) {
      return this.heleneHover
        ? `assets/vampire/personagens/${this.personagensEnum.HELENE}.png`
        : `assets/vampire/personagens/${this.personagensEnum.HELENE_VEU}.png`;
    }
    return `assets/vampire/personagens/${personagem}.png`;
  }
}
