import { Posicao } from '../../models/posicao.model';
import { PersonagemId } from '../types/warhammer.types';

export class WarhammerConstants {
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
    grodnar: `Sou Grodnar Goldhand, de Ubersreik. Se o sobrenome lhe parece familiar, é porque provavelmente já comprou uma joia cara demais do meu irmão… ou uma lâmina boa o suficiente para sobreviver a um erro seu. O Clã Goldhand é conhecido no Reikland por trabalhar pedra, metal e contratos com a mesma precisão. Meu pai, Gunnar, construiu esse nome com martelo, suor e uma teimosia que faria montanhas recuarem.
  Meus irmãos seguiram esse caminho. Eu… segui outro.<br>Nasci com mãos fortes para lapidar gemas e olhos bons para reconhecer minério, mas nunca tive paciência para contar veios de pedra enquanto o mundo lá fora estava cheio de coisas tentando matar alguém. Passei anos tentando ser o anão que esperavam que eu fosse, até perceber que alguns metais simplesmente não foram feitos para virar ornamento.
  Então virei punho.<br>Troquei a bancada da oficina pelo barulho das tavernas, arenas e estradas. Descobri que socos resolvem muitos problemas que diplomacia só piora, e que um anão que sabe cair e levantar é mais útil do que um que só sabe calcular o preço de uma esmeralda. Ainda assim, nunca abandonei o que significa carregar o nome Goldhand. Honra não é algo que se deixa na porta de casa. Um contrato é um contrato. Um aliado é responsabilidade. E uma dívida… é um juramento gravado em pedra.
  Luto como aprendi que anões devem lutar: perto o suficiente para sentir o fôlego do inimigo e forte o bastante para garantir que ele não respire outra vez. Não uso martelo cerimonial nem arma feita para impressionar nobres. Confio nos meus punhos, nas minhas soqueiras e na simples filosofia de que qualquer problema pode ser resolvido com determinação, força e uma quantidade adequada de teimosia.
  Viajo com a Armada Agazzi porque encontrei ali algo raro fora dos salões anões: gente que entende que confiança se constrói dividindo perigo, bebida e silêncio depois da batalha. Eles lutam como companheiros, não como clientes. Isso basta para mim.
  Ainda tenho família em Ubersreik. Ainda tenho um clã para honrar. E, um dia, pretendo voltar para eles com histórias que façam meu pai reclamar… mas erguer um caneco mesmo assim.<br>
  Até lá, continuo fazendo o que faço melhor:
  Quebrar ossos, cumprir promessas e garantir que quem luta ao meu lado tenha alguém firme entre ele e o pior que o Velho Mundo pode oferecer.
  Se cruzar meu caminho, espero que seja como aliado.
  Porque inimigos… raramente têm a chance de reclamar duas vezes.`,
    konrad: `Sou Konrad.<br>
  Não tenho sobrenome que valha a pena ser lembrado. Nasci nas vielas de Altdorf, onde nomes raramente significam algo e sobreviver já é considerado sorte. Nunca conheci meu pai. Minha mãe trabalhava em tavernas onde homens bebiam para esquecer quem eram — e onde crianças aprendiam cedo demais o que o mundo realmente oferece.
  Quando adoeci ainda jovem, ela me levou ao Templo de Morr. Esperava proteção… talvez redenção. O sacerdote que me recebeu era quase cego, mas parecia enxergar coisas que ninguém mais via. Durante a bênção, ele me disse que, quando uma nova vida clamasse, Morr me acolheria.
  Desde então, as pessoas sempre pareceram desconfortáveis perto de mim. Animais se inquietam. O ar fica frio. Aprendi a aceitar que alguns homens nascem acompanhados por sombras que não podem abandonar.
  Fui enviado para viver com meu tio Wenzel, um caçador nas bordas da Floresta Reikwald. Foi ali que encontrei algo próximo de paz. A floresta não mente. Predadores caçam porque precisam. Presas fogem porque querem viver. Existe honestidade na selvageria que nunca encontrei nas cidades.
  Aprendi a rastrear, a sobreviver e a reconhecer quando algo que anda pela mata não pertence a este mundo. Desde então, caminho entre trilhas esquecidas, cemitérios abandonados e aldeias onde a vida começa… e, às vezes, termina cedo demais.
  Não temo a morte. Ela é parte da ordem natural das coisas. O que temo é a promessa que carrego desde criança — a sensação de que Morr ainda não terminou comigo. Sinto que há um momento esperando por mim em algum lugar, um instante em que não terei escolha além de aceitar o destino que me foi sussurrado.
  Viajo com meus companheiros porque eles lutam contra horrores que não deveriam existir. E, enquanto essas coisas caminharem pelo Velho Mundo, alguém precisa caçá-las.<br>
  Se me encontrar na estrada, provavelmente será porque algo precisa ser rastreado… ou enterrado.<br>
  E, quando esse dia chegar, espero estar pronto para reconhecer quando a chamada finalmente for para mim.`,
    ettore: `Sou Ettore Agazzi, de Tobaro.<br>
  Talvez você já tenha ouvido esse nome antes. Em Tilea, Agazzi não é pronunciado à toa — costuma vir acompanhado de respeito… ou de cautela. Minha família construiu sua reputação empunhando lâminas a serviço de príncipes, cidades-estado e de qualquer senhor capaz de compreender o valor de uma companhia bem liderada.
  Nasci entre muralhas salgadas e ventos vindos do Estreito de Luccini, cercado por seda, aço e expectativas que jamais me pertenceram por inteiro. Sou o quinto filho de uma casa onde o destino costuma ser decidido antes mesmo do primeiro choro. Meus irmãos herdaram companhias, alianças e influência política. A mim foi concedido algo mais raro — a liberdade de falhar… ou de conquistar um nome que fosse verdadeiramente meu.
  Fui treinado desde cedo na arte da guerra, na esgrima e na estratégia. Ainda assim, enquanto meus irmãos aprendiam a mover soldados como peças previsíveis em um tabuleiro, eu escolhia sentar ao lado de veteranos, ouvir relatos de campanhas esquecidas e compreender o que realmente mantém um homem de pé quando a linha se rompe e o plano falha. A guerra raramente recompensa quem apenas sabe mandar; ela respeita quem entende.
  Quando ficou claro que minha herança seria viver à sombra de outros Agazzi, parti para o norte, rumo ao Império. Levei comigo poucos homens, uma capa vermelha bordada com o grifo de minha casa e uma ambição que minha família sempre considerou imprudente. Costumo achar que chamam de imprudência aquilo que não conseguem controlar.<br>
  Assim nasceu a Armada Agazzi.<br>
  Não somos apenas mercenários. Somos uma companhia fundada sobre lealdade conquistada, não herdada. Lutamos por ouro, sim — negar isso seria insultar a inteligência de todos — mas também lutamos por reputação, honra e independência. Não dobramos o joelho com facilidade, e não quebramos contratos por conveniência. Nossa palavra vale porque sabemos o preço de quebrá-la.
  Sou devoto de Myrmidia, Senhora da Guerra e da Sabedoria. Antes de cada combate, traço seu símbolo sobre o peito e não peço vitória, mas clareza. Clareza para decidir quem avança, quem recua e quem precisa viver para lutar amanhã. Um comandante que busca apenas glória cava a própria sepultura. Um comandante que busca compreensão… constrói legados.
  Dizem que sou orgulhoso. Talvez estejam certos. Um homem que não acredita no próprio valor jamais convencerá outros a marchar ao seu lado. Ainda assim, aprendi cedo que liderança não nasce de títulos, mas de confiança — e confiança se conquista com sangue compartilhado, palavra cumprida e a disposição de dividir o mesmo destino daqueles que lutam sob seu estandarte.
  Hoje, caminho pelas estradas do Império não como um filho esquecido de Tilea, mas como o fundador de algo que carrega meu nome… e o meu risco.<br>
  Se lutar sob meu comando, prometo três coisas:<br>
  Jamais o enviarei para uma batalha que eu mesmo não pisaria.<br>
  Jamais abandonarei um aliado enquanto ainda houver escolha.<br>
  E jamais aceitarei que o nome Agazzi seja lembrado como o de um homem que temeu o próprio destino.`,
    jehan: `Sou Jehan Faugrive, Cavaleiro Errante de Bretonnia, filho da Casa Faugrive das colinas ao sul de Carcassonne.<br>
  Minha família não é grande nem poderosa, mas é antiga, e nossa honra sempre foi mantida com devoção à Dama do Lago e firmeza no campo de batalha. Cresci ouvindo histórias de cavaleiros que enfrentaram monstros, salvaram inocentes e buscaram o Graal não pela glória, mas pela pureza de propósito. Essas histórias não eram apenas lendas para mim — eram promessas.
  Sou o filho mais jovem de minha casa. Meus irmãos foram moldados para guerra e política. Eu fui criado entre orações, histórias e o vento que sopra das colinas. Foi minha mãe quem me ensinou que coragem não nasce da força, mas da fé. Foi ela quem me ensinou que a verdadeira honra é aquilo que um cavaleiro mantém mesmo quando ninguém está olhando.
  Meu pai nunca esperou muito de mim. Talvez por isso eu tenha aprendido a esperar muito de mim mesmo.<br>
  Treinei espada e lança como qualquer nobre de Bretonnia, mas nunca lutei por ambição ou poder. Para mim, cada combate é uma prova, cada jornada é um voto silencioso à Dama. Carrego o lema de minha família como guia para cada decisão que tomo: Olhos no Céu, Honra no Coração.
  Parti de Bretonnia montado em minha fiel égua, Litière, buscando feitos dignos da tradição que carrego. O mundo além das fronteiras de minha terra é mais duro, mais sombrio e, muitas vezes, menos nobre do que as histórias que ouvi na infância. Ainda assim, acredito que o dever de um cavaleiro é levar luz onde ela já não existe.
  Viajo agora ao lado de companheiros que não seguem os códigos de Bretonnia, mas que provaram possuir coragem, lealdade e força diante de horrores que poucos cavaleiros enfrentariam sem hesitar. Com eles, aprendi que honra pode assumir formas diferentes… mas continua sendo algo que precisa ser defendido.<br>
  Meu objetivo permanece o mesmo desde o dia em que deixei minha casa: trilhar um caminho digno da Dama, proteger aqueles que não podem se defender e, um dia, provar que minha fé não foi em vão.<br>
  Se cruzar meu caminho, encontrará um cavaleiro que ainda acredita que o mundo pode ser melhor do que é — e que está disposto a lutar para que isso seja verdade.`,
    helvert: `Sou Helverth. Apenas Helverth, para a maioria.<br>
  Nasci em Carroburg, sob os estandartes de Middenland, uma cidade que ensina cedo que honra e ambição caminham lado a lado — e que nem sempre é possível distingui-las. Fui criado entre muralhas antigas, histórias de guerra e o som constante do aço sendo preparado para conflitos que nunca deixam de chegar.<br>
  Não fui criado para a vida que escolhi.
  Fui moldado por ela.<br>
  Desde jovem, encontrei meu lar nos quartéis e campos de treinamento do Império. Foi ali que aprendi que disciplina mantém homens vivos, que formação é mais importante que bravura, e que a verdadeira coragem não está em avançar sem medo, mas em permanecer firme quando o medo é inevitável.<br>
  Luto pelo Império, sim — mas não pelas glórias cantadas em tavernas ou pelos títulos que homens ambiciosos disputam em salões iluminados. Luto pelos soldados que marcham sem nome, pelos civis que jamais empunharão uma lâmina, e por aqueles que acreditam que a ordem ainda pode existir em um mundo que insiste em afundar no caos.<br>
  Carrego comigo lições que não foram aprendidas em livros nem em cerimônias. Aprendi que monstros não habitam apenas florestas e ruínas antigas. Alguns usam selos, mantos e palavras educadas. Contra esses inimigos, a espada sozinha raramente é suficiente. É preciso paciência. É preciso observar. É preciso sobreviver.<br>
  Hoje, sigo meu caminho como soldado do Império, buscando aperfeiçoar minha posição, minha influência e minha compreensão do mundo que juramos proteger. Não sou o homem mais falante, nem o mais celebrado, mas sou alguém que permanece quando outros recuam.<br>
  Meu dever é simples: manter-me de pé, proteger aqueles que não podem se proteger e, quando chegar a hora certa, garantir que certas dívidas antigas sejam cobradas — não por vingança cega, mas por justiça que o tempo não conseguiu enterrar.<br>
  Se lutarmos lado a lado, você terá em mim alguém que não abandona sua formação, sua palavra ou seus companheiros.<br>
  E, enquanto eu respirar, o estandarte sob o qual marcho não cairá sem resistência.`,
    sarah: `Sou Sarah Everstein, serva de Shallya, a Deusa da Misericórdia.<br>
  Minha vida começou com uma ausência. Meu pai desapareceu na Guerra dos Picos Sombrios antes que eu pudesse conhecê-lo de verdade. Minha mãe tentou manter nossa família unida, mas a guerra deixa marcas que nem o tempo consegue curar. Quando a doença a consumiu, ela me deixou aos cuidados do Templo de Shallya, carregando apenas um medalhão… e perguntas que ainda não encontrei coragem para responder.<br>
  Foi entre os muros do templo que encontrei propósito. Aprendi que a dor é inevitável neste mundo, mas o sofrimento não precisa ser enfrentado sozinho. Shallya ensina que cada vida possui valor, mesmo aquelas que o Velho Mundo insiste em esquecer. Desde então, dedico minhas mãos e minha fé para aliviar a dor dos outros, mesmo quando sei que nem todas as feridas podem ser fechadas.<br>
  Nem sempre fui forte. Durante a infância, sobrevivi graças à proteção de uma amiga que ainda caminha ao meu lado, Solacruz. Onde ela é aço e fogo, eu sou prece e cura. Durante anos, nossas vidas seguiram caminhos diferentes… até que o destino nos reuniu novamente através de um jovem aprendiz ferido chamado Rocco. Desde então, seguimos juntos, cada um cumprindo seu papel — proteger, destruir e restaurar o que restar.<br>
  Viajar com mercenários nunca foi o destino que imaginei para mim. Ainda assim, aprendi que misericórdia não pertence apenas aos templos. Ela também precisa existir nas estradas, nos campos de batalha e nos lugares onde a esperança costuma morrer primeiro.
  Carrego minha fé como outros carregam espadas. Não para julgar, mas para lembrar que até mesmo aqueles que caem nas sombras podem merecer compaixão… ou redenção.<br>
  Se encontrar meu caminho, saiba que farei tudo o que estiver ao meu alcance para preservar a vida. Mas também aprendi que, às vezes, misericórdia significa permanecer firme quando o mundo insiste em quebrar aqueles que lutam ao nosso lado.<br>
  Rezo para que a luz de Shallya alcance todos que ainda acreditam que vale a pena continuar.`,
    solacruz: `Podem me chamar de Solacruz. É o meu sobrenome. Eu prefiro assim. Meu primeiro nome não é importante… Não é nada demais, na verdade. Eu trabalho como guarda na vigia da escola. É um lugar espaçoso, silencioso… Combina comigo. Eu não sou muito extrovertida, mas… eu tenho amigos. Dois. Meus melhores amigos, na verdade.<br> A Sarah… ela é uma freira de Shallya. Muito gentil, sempre sabe o que dizer, mesmo quando eu não digo nada. Conheço ela desde a infância, e desde essa época, faz meus curativos e limpa minhas feridas. E Rocco… ele estuda na Escola do Fogo. Conheci ele de detenção, por coincidência. Era a mesma sala que eu fui inspecionar. Me ganhou no carisma, acredita? Gosto muito de beber com eles, de apostar com eles.`,
    rocco: `Sou Rocco Niekisch, nascido em Ubersreik, filho de ferreiros que nunca entenderam por que o fogo me acompanhava antes mesmo de eu aprender a temê-lo. Desde criança, chamas surgiam onde havia raiva, medo ou conflito — moedas derretiam em minhas mãos, brigas terminavam em cinzas, e olhares desconfiados me seguiam por onde eu ia. Muitos chamavam de maldição. Eu chamava de sobrevivência. Minha vida mudou numa noite sob Morrslieb, quando uma briga com um oficial corrupto incendiou uma taverna inteira e me deixou diante de uma escolha simples: prisão… ou a Escola Aqshy. Escolhi o fogo disciplinado, não por redenção, mas porque compreendi que, se já carregava uma chama dentro de mim, aprenderia a moldá-la em algo que o mundo fosse obrigado a respeitar.<br>Desde então, caminhei entre estudos arcanos, estradas perigosas e decisões moralmente duvidosas. Viajo com companheiros que se tornaram mais do que aliados: Sarah, que me ensinou que o fogo também pode ser usado para proteger; Grodnar, prova viva de que força bruta, jogatina e boa cerveja ainda resolvem muitos problemas; e Solacruz, minha companheira desde os tempos de detenção na Escola Aqshy, e que já me salvou tantas vezes que, dizer que devo minha vida à ela, ainda é pouco. Não escondo minhas ambições — quero viver a vida ao máximo e ser lembrado como um dos maiores conjuradores de chamas do Império. Já usei meu dom para salvar inocentes e sofri ao queimar corpos de quem não pude salvar, e cada memória ainda arde dentro de mim. O fogo pode aquecer, iluminar e proteger… mas, quando provocado, consome tudo. E contra aqueles que ameaçam os meus, eu não sou apenas um mago — eu sou o incêndio.`,
  };
}
