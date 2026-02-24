import { WorldOfDarknessEnum } from '../enums/world-of-darkness.enum';
import { PersonagemId } from '../types/world-of-darkness.type';

export class WorldOfDarknessConstants {
  static readonly THUMBS: string[] = [
    WorldOfDarknessEnum.CELINE,
    WorldOfDarknessEnum.HELENE,
    WorldOfDarknessEnum.BALDWIN,
    WorldOfDarknessEnum.JEAN,
    WorldOfDarknessEnum.HERNAN,
    WorldOfDarknessEnum.KHALED,
    WorldOfDarknessEnum.ELIAS,
    WorldOfDarknessEnum.PHILIPE,
  ];

  static readonly INFO: Record<PersonagemId, string> = {
    celine: ``,
    helene: ``,
    baldwin: ``,
    jean: ``,
    hernan: ``,
    khaled: ``,
    elias: ``,
    philipe: ``,
  };
}
