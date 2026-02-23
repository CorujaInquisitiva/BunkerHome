import { Component } from '@angular/core';
import { WorldOfDarknessConstants } from '../shared/utils/constants/world-of-darkness.constants';
import { WorldOfDarknessEnum } from '../shared/utils/enums/world-of-darkness.enum';
import { PersonagemId } from '../shared/utils/types/world-of-darkness.type';
import { Pintura } from './pintura/pintura';

@Component({
  selector: 'world-of-darkness-home',
  imports: [Pintura],
  templateUrl: './world-of-darkness.html',
  styleUrl: './world-of-darkness.css',
})
export class WorldOfDarkness {
  public personagens: PersonagemId[] = WorldOfDarknessConstants.THUMBS as PersonagemId[];
  public personagensEnum = WorldOfDarknessEnum;
}
