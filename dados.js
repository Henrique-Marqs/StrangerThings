let dados = [
    {
        titulo: "Eleven",
        descricao: "Onze (realizado por Millie Bobby Brown); em seu idioma original se chama Eleven ou El; nasceu como Jane Ives, filha de Terry Ives, e cresceu nos Laboratórios Hawkins, onde foi experimentada por cientistas até o início da primeira temporada. Onze tem poderes telecinéticos e telepáticos, que lhe permitem controlar as coisas com sua mente. Ela escapou do laboratório e fez amizade com Dustin,  Lucas, Will e Mike (seu interesse amoroso).",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Onze",
        tags: "poder, namorada do mike, on, onze, 11"
    },
    {
        titulo: "Mike Wheeler",
        descricao: "Michael (Mike Wheeler) é um personagem fictício da série de terror de ficção científica da Netflix Stranger Things. Ele é um dos personagens centrais da série, atuando como o líder do grupo principal de crianças.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Mike_Wheeler",
        tags: "namorado da on, lider, irmão da nancy"
    },
    {
        titulo: "",
        descricao: "William (Will) Byers (interpretado por Noah Schnapp), o irmão mais novo de Jonathan e filho de Joyce, é um menino gentil e muitas vezes tímido. No grupo de Dungeons and Dragons, Will é o clérigo, mas mais tarde ocasionalmente desempenha o papel de Dungeon Master; ele é referido como Will the Wise.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Will_Byers",
        tags: "desaparecido, menino que foi pro mundo invertido, filho mais novo da joyce"
    },
    {
        titulo: "Lucas Sinclair",
        descricao: "Lucas Sinclair (interpretado por Caleb McLaughlin) é amigo de Mike, Will e Dustin, e irmão mais velho de Erica. Lucas inicialmente desconfia de Onze, mas depois faz amizade com ela.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Lucas_Sainclair",
        tags: "namorado da max, irmão da erica"
    },
    {
        titulo: "Dustin Henderson",
        descricao: "Dustin Henderson (interpretado por Gaten Matarazzo) é amigo de Mike, Will e Lucas, ele é um menino muito inteligente e estudioso e tem displasia cleidocraniana. Em seu grupo de jogo do Dungeons & Dragons, Dustin é o bardo e tem provavelmente o maior conhecimento do jogo, particularmente em monstros.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Dustin_Henderson",
        tags: "melhor amigo do steve, namorado da suzie, nerd"
    },
    {
        titulo: "Max Mayfield",
        descricao: "Maxine (Max) Mayfield (interpretada por Sadie Sink) é a meia-irmã mais nova de Billy, uma skatista ávida e a moleca do grupo que chama a atenção de Lucas quando se sabe que ela tem a maior pontuação em Dig Dug. Embora ela nunca tenha jogado Dungeons and Dragons, ela se chama de (zoomer) do grupo, apesar da insistência de Mike de que o termo é inventado.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Max_Mayfield",
        tags: "skatista, irmã do billy, amiga da onze, namorada do lucas"
    },
    {
        titulo: "Nancy Wheeler",
        descricao: "Nancy Wheeler (interpretada por Natalia Dyer) é a filha adolescente de Karen e Ted, irmã mais velha de Mike e Holly Wheeler. Inicialmente, Nancy é uma pária na escola até que o popular estudante Steve Harrington se interessa por ela. O relacionamento deles dura até o início da segunda temporada, quando ela começa a namorar Jonathan Byers depois de alguma ajuda do teórico da conspiração Murray Bauman. Ela é altamente proficiente com armas de fogo, apesar de uma notável falta de treinamento ou prática.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Nancy_Wheeler",
        tags: "irmã do  mike, namorada do steve, ex do jonathan"
    },
    {
        titulo: "Steve Harrington",
        descricao: "Steve Harrington (interpretado por Joe Keery) é um estudante popular na escola. Ele tenta desenvolver um relacionamento com Nancy e intimidar Jonathan, embora venha a se arrepender disso.[24] Keery foi promovido a regular da série a partir da segunda temporada, depois de recorrente na primeira. Steve então desempenhou um papel mais proeminente, desenvolvendo um relacionamento de irmão com Dustin e se tornando um protetor do grupo principal de crianças.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Steve_Harrington",
        tags: "namorado da nancy, amigo proximo do dustin, trabalha com a robin, popular"
    },
    {
        titulo: "Eddie Munson",
        descricao: "Eddie Munson (interpretado por Joseph Quinn) é um excêntrico estudante da Hawkins High School e presidente de seu (Hellfire Club) com tema de Dungeons & Dragons, onde ele faz amizade com Mike e Dustin. Eddie é mais velho do que a maioria de seus colegas, pois foi forçado a permanecer no ensino médio por vários anos adicionais depois de não conseguir passar nas aulas necessárias para se formar.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Eddie_Munson",
        tags: "lider do helfire club, repetente, jogador de D&D"
    },
    {
        titulo: "Robin Buckley",
        descricao: "Robin Buckley (interpretada por Maya Hawke) é uma garota apresentada na terceira temporada, que trabalhou ao lado de Steve na sorveteria Scoops Ahoy do Starcourt Mall. Ela é sarcástica e entediada com seu trabalho, fluente em inglês, espanhol, francês e italiano, e provoca Steve sobre sua incapacidade de flertar com garotas.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Robin_Buckley",
        tags: "trabalha com o steve"
    },
    {
        titulo: "Jonathan Byers",
        descricao: "Jonathan Byers (interpretado por Charlie Heaton) é o irmão mais velho de Will e filho de Joyce, é quieto e é considerado um estranho na Hawkins High. Ele é um aspirante a fotógrafo e muito próximo de Joyce e Will. Ele começa a namorar Nancy no final da segunda temporada.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Jonathan_Byers",
        tags: "irmão do will, filho mais velho da joyce, ex namorado da nancy wheeler"
    },
    {
        titulo: "Karen Wheeler",
        descricao: "Karen Wheeler (interpretada por Cara Buono) é mãe de Nancy, Mike e Holly, e esposa de Ted Wheeler. Ela é uma mãe amorosa que permanece em grande parte ignorante sobre as atividades de seus filhos.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Keren_Wheeler",
        tags: "mãe do mike, mãe da nancy"
    },
    {
        titulo: "Jim Hopper",
        descricao: "James (Jim) Hopper Jr. (interpretado por David Harbour) também chamado de (Hopper) e (Hop), é o chefe  do Departamento de Polícia de Hawkins. Hopper viveu em Hawkins a maior parte de sua vida, tendo  frequentado o ensino médio com Joyce Byers e Bob Newby em meados da década de 1950. Nesse período, Hopper não era um aluno exemplar e passava todo o seu tempo matando aula e fumando cigarros com Byers e Newby durante o quinto e sexto período.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Jim_Hopper",
        tags: "policial de hawkins, namorado da joyce, pai adotivo da onze"
    },
    {
        titulo: "Joyce Byers",
        descricao: "Joyce Byers (interpretada por Winona Ryder) é uma dona de casa e mãe de Will Byers e Jonathan Byers, frutos de seu antigo relacionamento com Lonnie Byers, que abandonou a família para iniciar um relacionamento com uma mulher mais nova. Joyce é uma mulher carinhosa, determinada e obstinada, que trabalha como balconista na Melvald's General Store, no centro de Hawkins.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Joyce_Byers",
        tags: "mãe do wil, mãe do jonathan, namorada do jim"
    },
    {
        titulo: "Erica Sinclair",
        descricao: "Erica Sinclair (interpretada por Priah Ferguson) é a irmã mais nova de Lucas. Introduzida na segunda temporada como personagem recorrente, ela foi promovida a regular na terceira temporada.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Erica_Sainclair",
        tags: "irmã mais nova do lucas"
    },
    {
        titulo: "Billy Hargrove",
        descricao: "William (Billy) Hargrove (interpretado por Dacre Montgomery) é o descuidado, imprudente e verbalmente abusivo com Max - uma consequência do abuso físico que ele próprio sofre de seu pai. Ele é bastante promíscuo, muitas vezes dormindo com donas de casa entediadas.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Billy_Hargrove",
        tags: "irmão da max"
    },
    {
        titulo: "Bob Newby",
        descricao: "Bob Newby (interpretado por Sean Astin) é um ex-colega de classe de Joyce e Hopper, que dirige o  Hawkins Radio Shack, e se torna o namorado de Joyce na segunda temporada, colocando-o em  desacordo com Hopper.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Bob_Newby",
        tags: "namorou a joyce, ex namorado da joyce"
    },
    {
        titulo: "Sam Owens",
        descricao: "Dr. Sam Owens (interpretado por Paul Reiser) é um executivo do Departamento de Energia dos Estados Unidos que substitui Brenner no Laboratório Hawkins. Owens é tão comprometido com a pesquisa científica e teimoso quanto seu antecessor, mas muito mais empático com os residentes do Laboratório de Hawkins.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Sam_Owens",
        tags: "substituto do martin brenner"
    },
    {
        titulo: "Argyle",
        descricao: "Argyle (interpretado por Eduardo Franco) é amigo maconheiro de Jonathan na Califórnia que trabalha como motorista de entrega de pizza, introduzido na quarta temporada.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Argyle",
        tags: "amigo do jonathan, entregador de pizza"
    },
    {
        titulo: "Martin Brenner",
        descricao: "Martin Brenner (interpretado por Matthew Modine) é o cientista chefe do Laboratório Hawkins e dos experimentos realizados lá. Ele é um cientista insensível e manipulador, tendo sequestrado Onze de sua mãe, Terry Ives, a quem mais tarde submeteu a terapia de eletrochoque para destruir a mente e os pensamentos da mulher.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Martin_Brenner",
        tags: "pai da onze, cientista louco, chefe do laboratório Hawkins"
    },
    {
        titulo: "Murray Bauman",
        descricao: "Murray Bauman (interpretado por Brett Gelman) é um investigador particular e teórico da conspiração contratado para investigar o desaparecimento de Barbara Holland. Apresentado pela primeira vez na segunda temporada, ele ajuda Nancy e Jonathan em sua missão de fechar o Laboratório Nacional Hawkins.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Murray_Bauman",
        tags: ""
    },
    {
        titulo: "Demogorgon",
        descricao: "Criaturas predatórias do Mundo Invertido que servem como força de invasão inicial do Devorador de Mentes, são assassinas e violentas com inteligência limitada.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Demogorgons",
        tags: "demo, criatura, monstro de tentaculo"
    },
    {
        titulo: "Devorador de Mentes",
        descricao: "Introduzido na segunda temporada como uma entidade não-corpórea malévola que reside na dimensão paralela conhecida como Mundo Invertido, cada ser vivo nessa realidade serve como uma extensão da mente colmeia do Devorador de Mentes, que atuam no desejo dessa entidade de se espalhar para a terra.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Devorador_de_Mentes",
        tags: "monstro gigante"
    },
    {
        titulo: "Vecna",
        descricao: "Vecna ​​(interpretado por Jamie Campbell Bower) é um ser assassino do Mundo Invertido e o principal antagonista da quarta temporada. Ele ataca jovens se recuperando de traumas passados, e seu método de matar envolve induzir visões de pesadelo em suas vítimas antes de quebrar telecineticamente seus ossos e implodir seus globos oculares. Vecna ​​mata vários alunos da Hawkins High School, incluindo Chrissy Cunningham, Fred Benson e Patrick McKinney, e quase mata Max até que seus amigos encontrem uma maneira de quebrar sua influência usando música.",
        link: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Stranger_Things#Vecna",
        tags: "1, um, henry, henry creel"
    }
]