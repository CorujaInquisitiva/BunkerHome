import { Posicao } from '../models/posicao.model';
import { CommonConstants } from './constants/common.constants';
import { WarhammerConstants } from './constants/warhammer.constants';
import { PersonagemId } from './types/warhammer.types';

type StyleMap = Partial<Record<PersonagemId, { [k: string]: string }>>;

export class StyleUtils {
  public static aplicarPosicoes(ids: PersonagemId[]): StyleMap {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tipoLayout = this.getTipo(vh);
    const styles: StyleMap = {};
    ids.forEach((id) => {
      if (tipoLayout === 'flex' && WarhammerConstants.POSICOES.flex[id]) {
        styles[id] = this.aplicarFlex(WarhammerConstants.POSICOES.flex[id], vw, vh);
      } else if (WarhammerConstants.POSICOES.pixel[id]) {
        styles[id] = this.aplicarPixel(WarhammerConstants.POSICOES.pixel[id], vw, vh, tipoLayout);
      }
    });
    return styles;
  }

  private static getTipo(vh: number): 'flex' | 'intermediario' | 'menor' {
    if (vh > CommonConstants.CONFIG.tela.max) return 'flex';
    if (vh >= CommonConstants.CONFIG.tela.min) return 'intermediario';
    return 'menor';
  }

  private static aplicarFlex(p: Posicao, vw: number, vh: number) {
    return {
      position: 'absolute',
      top: p.top! * vh + 'px',
      left: p.left! * vw + 'px',
      height: p.height! * vh + 'px',
    };
  }

  private static aplicarPixel(
    p: Posicao,
    vw: number,
    vh: number,
    tipo: 'flex' | 'intermediario' | 'menor',
  ) {
    const escalaW = vw / CommonConstants.CONFIG.tela.larguraBase;
    let top = p.top!;
    let left = p.left! * escalaW;
    if (tipo === 'intermediario') top += vh - CommonConstants.CONFIG.tela.min;
    if (tipo === 'menor') top *= vh / CommonConstants.CONFIG.tela.min;
    return {
      position: 'absolute',
      top: top + 'px',
      left: left + 'px',
      height: p.minHeight! + 'px',
    };
  }
}
