import { Posicao } from '../games.utils';
import { PersonagemId } from '../types/warhammer.types';

export class AppConstants {
  static readonly CONFIG = {
    tela: {
      min: 600,
      max: 1080,
      larguraBase: 1366,
    },
    animacao: {
      duracao: 350,
    },
  };

  static readonly THUMBS: string[] = [
    'konrad',
    'grodnar',
    'ettore',
    'helvert',
    'jehan',
    'rocco',
    'solacruz',
    'sarah',
  ];

  static readonly POSICOES: {
    flex: Record<PersonagemId, Posicao>;
    pixel: Record<PersonagemId, Posicao>;
    charPosition: Record<PersonagemId, 'direito' | 'esquerdo'>;
  } = {
    flex: {
      ettore: new Posicao(0.1335, 0.33, 0.85),
      grodnar: new Posicao(0.3, 0.194, 0.684),
      konrad: new Posicao(0.13, 0.08, 0.85),
      jehan: new Posicao(0.21, 0.39, 0.87),
      helvert: new Posicao(0.12, 0.455, 0.9),
      sarah: new Posicao(0.31, 0.524, 0.75),
      solacruz: new Posicao(0.245, 0.634, 0.8),
      rocco: new Posicao(0.154, 0.703, 0.85),
    },
    pixel: {
      ettore: new Posicao(80, 440, undefined, 510),
      grodnar: new Posicao(180, 265, undefined, 410),
      konrad: new Posicao(78, 109, undefined, 510),
      jehan: new Posicao(126, 532, undefined, 522),
      helvert: new Posicao(72, 621, undefined, 540),
      sarah: new Posicao(186, 715, undefined, 450),
      solacruz: new Posicao(147, 866, undefined, 480),
      rocco: new Posicao(92, 960, undefined, 510),
    },
    charPosition: {
      konrad: 'direito',
      grodnar: 'esquerdo',
      ettore: 'direito',
      jehan: 'esquerdo',
      helvert: 'direito',
      sarah: 'esquerdo',
      solacruz: 'direito',
      rocco: 'esquerdo',
    },
  };

  static readonly INFO: Record<PersonagemId, string> = {
    grodnar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    konrad: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    ettore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    jehan: `Sou Jehan Faugrive, Cavaleiro Errante de Bretonnia...`,
    helvert: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    sarah: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    solacruz: `Podem me chamar de Solacruz. É o meu sobrenome...`,
    rocco: `Sou Rocco Niekisch… e, se ouviu meu nome antes...`,
  };
}
