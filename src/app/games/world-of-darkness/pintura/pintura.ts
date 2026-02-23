import { Component } from '@angular/core';
import { PersonagemId } from '../../shared/utils/types/world-of-darkness.type';
import { WorldOfDarknessEnum } from '../../shared/utils/enums/world-of-darkness.enum';
import { WorldOfDarknessConstants } from '../../shared/utils/constants/world-of-darkness.constants';

@Component({
  selector: 'pintura-view',
  imports: [],
  templateUrl: './pintura.html',
  styleUrl: './pintura.css',
})
export class Pintura {
  public personagens: PersonagemId[] = WorldOfDarknessConstants.THUMBS as PersonagemId[];
  public personagensEnum = WorldOfDarknessEnum;
}
