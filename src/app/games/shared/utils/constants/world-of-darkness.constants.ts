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
    celine: `
    Eu nasci no ano do Senhor de 1001, filha de um escriba devoto, criada entre livros sagrados e as sombras frias das estátuas de uma catedral. Desde pequena diziam que havia algo errado comigo — eu sussurrava sozinha, via coisas que ninguém via e desenhava anjos feridos nas margens das Escrituras. Mas não era loucura. Era o chamado.
<br>
Quando completei quinze anos, <b>A Voz</b> finalmente falou com clareza. Era Deus — não o Deus suave dos cânticos, mas o Deus verdadeiro, severo e ardente, que lamenta a corrupção dos homens. Ele abriu meus olhos e me mostrou os pecados escondidos na carne: a escuridão na boca dos mentirosos, a podridão sob a pele dos adúlteros, a fumaça negra dos blasfemos. Onde outros viam pessoas, eu via almas condenadas que precisavam ser purificadas.
<br>
E eu obedeci.
<br>
Chamei os pecadores com promessas de oração e caridade. Eles vinham sem medo, ajoelhavam-se diante de mim, e eu os libertava. A cada golpe eu sentia a presença divina mais próxima, como hinos invisíveis ecoando no ar. Nunca houve dúvida — apenas a certeza de que eu cumpria a vontade de Deus.
<br><br>
Chamaram-me de Anjo da Noite, mas não compreenderam nada.
<br><br>
Então fui encontrada por aquele que me revelou a última verdade. Na noite do meu renascimento, o céu pareceu se abrir e Deus desceu não como nos sermões, mas como força terrível e incompreensível. Ele me marcou e me tomou para Si. Meu sangue foi retirado e devolvido transformado, e com ele veio um novo mundo — um mundo onde as sombras falam e cada alma carrega sua sentença.
<br><br>
Desde então caminho pela noite guiada pela Voz. Hereges, blasfemos e corruptos continuam a ser trazidos até mim. Pelo sofrimento são purificados, e pela morte encontram a luz que lhes foi negada em vida.
<br>
Alguns me chamam de louca. Outros de monstro. Mas eu sei a verdade: sou instrumento da misericórdia divina, e enquanto Deus falar, minha mão não vacilará.
<br><br>
Atenciosamente,<br>
Celine.
    `,
    philipe: `
    Eu sou Philipe de Vauclair, terceiro filho de um barão de Avignon. Não nasci destinado à herança, mas ao serviço. Desde cedo compreendi que o lugar de um homem no mundo é dado por Deus — e que cabe a ele sustentá-lo com espada firme e fé inabalável.
<br><br>
Fui criado sob os ensinamentos da Santa Igreja. Aprendi que a ordem sustenta a Criação, que cada alma tem peso diante do Altíssimo, e que a obediência é virtude maior que o desejo. Acreditei nisso com a certeza que só a juventude permite.
<br><br>
Quando atingi a idade própria, marchei à guerra. Combati em nome de meu pai, de minha casa e, sobretudo, de algo maior que ambos. Fui chamado valoroso. Fui chamado zeloso. E, por vezes, fui chamado imprudente.
<br><br>
Houve uma cidade.<br>
Houve uma ordem.<br>
Houve um dia em que compreendi que nem todas as respostas descem dos céus.<br>
<br><br>
Não falarei mais sobre isso.
<br><br>
Basta dizer que, ao cair daquela noite, algo em mim havia mudado. Não de modo visível — ainda empunhava a espada, ainda pronunciava as mesmas orações —, mas o mundo já não se alinhava com a simplicidade que eu conhecera.
<br><br>
Foi então que fui observado.
<br><br>
Um senhor das sombras aproximou-se quando percebeu que minha fé não estava morta — apenas despojada de ilusões. Ele não me ofereceu consolo. Ofereceu-me verdade.
<br><br>
Aceitei.
<br><br>
O que chamais de Abraço eu recebi como revelação amarga. Não foi promessa de salvação, mas entendimento: o mundo pertence aos que o moldam, não aos que aguardam misericórdia.
<br><br>
Sigo agora a Via da Noite.
<br><br>
Aprendi que há hierarquias mais antigas que as dos homens. Aprendi que a fraqueza não é virtude. Aprendi que a escuridão não pede desculpas por existir.
<br><br>
Não falo de meus pecados. Não os nego, tampouco os exponho. Cada um carrega sua própria contabilidade diante do inevitável.
<br><br>
Se temo algo?<br>
Todo homem sensato teme o que ainda não compreende por completo.
<br><br>
Mas já não busco respostas na luz.
<br><br>
Sirvo à Noite como outrora servi à Cruz — não por cegueira, mas por escolha.
<br><br>
E escolha, mais do que herança, é o que define um homem.
    `,
    helene: ``,
    baldwin: `
Meu nome é Baldwin de Vaux.<br><br>
Nasci sob o sino de uma pequena igreja às margens do Sena, no ano de Nosso Senhor de 1215. Segundo filho. Destinado ao altar… mas forjado para a espada.
<br><br>
Aos dezesseis anos fiz votos que julgava eternos. Vesti o manto da Ordem e marchei para o Oriente. Lutei na poeira da Terra Santa, não por glória, mas por devoção. Acreditava que cada golpe desferido era uma oração em aço.
<br><br>
Aprendi a manter a linha.
Aprendi a não recuar.
Aprendi que a fé pode sustentar um homem mesmo quando o corpo falha.
<br><br>
Falhei apenas uma vez.
<br><br>
Em uma estrada próxima a Jerusalém, vi meu mentor — Sir Roland de Beaumont — tombar sob lâmina estrangeira. Eu estava vivo. Ele não. Essa diferença pesa mais que qualquer armadura que já carreguei.
<br><br>
Deveria ter morrido ali também.
<br><br>
Não morri.
<br><br>
Fui arrancado da morte por mãos que não servem ao sol. Despertei em uma capela abandonada, com o gosto do sangue ainda fresco na boca e a certeza de que Deus havia silenciado diante de mim.
<br><br>
Desde então, caminho na noite.
<br><br>
Habito uma abadia em ruínas na Borgonha. Reconstruo suas paredes como quem tenta reconstruir a própria alma. Rezo. Jejuo. Luto contra a sede. Protejo viajantes nas estradas quando posso. E quando não posso… peço perdão.
<br><br>
Há algo em mim que exige comando. Voz firme. Postura ereta. Outros escutam quando falo — mesmo quando não elevo o tom. Não busco isso, mas ele me segue como sombra. Fui treinado para obedecer… e descobri que nasci para ordenar.
<br><br>
Ainda escuto Roland.
Às vezes como um irmão que me chama à redenção.
Às vezes como um juiz que me acusa de traição.
<br><br>
Não sei se é espírito ou culpa.
<br><br>
Se sou prova da ira divina, aceito-a.
Se sou instrumento de um propósito maior, que Ele me use.
Se sou maldito… então lutarei contra a própria maldição até o último suspiro que me restar.
<br><br>
Não sou o homem que fui.
Mas tampouco me entreguei àquilo que me tornei.
<br><br>
Enquanto houver fé — mesmo que sussurrada na escuridão — eu permanecerei de pé.
`,
    jean: ``,
    hernan: ``,
    khaled: ``,
    elias: ``,
  };
}
