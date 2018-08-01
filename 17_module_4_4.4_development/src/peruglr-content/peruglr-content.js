var peruglrCourseContent = {

    /* Capítulos
    chapters: [
        {
            // Título do capítulo
            chapterTitle: 'Introdução',

            // ID do capítulo para class da section e #URL
            chapterID: 'formando-leitores-para-alem-dos-muros-escolares',
            
            // Páginas do capítulo
            chapterPages: [

                {

                    // Título da página que será exibido no curso
                    pageTitle: 'Capa',
                    
                    // Parêmetro necessário para identificar (class) a página no HTML
                    pageID: 'content-capa',

                    // Adiciona classes customizadas
                    pageCustomClass: '',
                    
                    // Template usado na página
                    pageTemplate: {
                        
                        // Nome do template usado na página
                        templateLabel: 'Padrão',
                        
                        // Parêmetro necessário para identificar (class) o tipo de estrutra no HTML
                        templateID: 'blank-custom',
                        
                        // Página HTML pré-formatada
                        templateHtml: 'page-default.html',

                        // Adiciona classe customizada
                        templateCustomClass: ''

                    },

                    // Arquivos a serem carregados
                    pagePreloaderFiles: {
                        
                        // Carregamento individual
                        singularFiles: {
                            files: [
                                { 'type': 'IMAGE', 'source': 'peruglr-template/habibs/assets/img/favicon.png', 'size': 67422 }
                            ]
                        },

                        // Carregamento em lote para sequência de png ou jpg
                        animationSequenceImgs: [
                            { nameSequence: 'Reimoney Parado', totalImgs: 229, sizeAllImgs: 4669440, path: 'peruglr-template/habibs/assets/img/reimoney-parado', partName:'', startCount:10001, extension: 'png' }
                        ],

                    },

                    // Código HTML a ser inserido na página
                    pageContent: '',

                    // Áudios presentes na página.
                    pageAudios: [
                        {
                            audioID: '', -> Ficará 'id' na tag audio
                            audioFile: '', -> Arquivo de áudio
                            audioPlayer: true -> Aparecerá o player de áudio na página
                        }
                    ],

                    // Função a ser executada quando a página for carregada
                    pageCallbackMethod: 'template.coverPage()',

                    // Status 'active' ou 'inactive' para bloqueio e desbloqueio de páginas ao usuário
                    status: 'active'
                }
            ]
        }
    ]*/

    // CAPÍTULOS
    chapters: [
        {
            
            chapterTitle: 'Módulo 3 - Parte 3',
            chapterID: 'da-leitura-compartilhada-a-individual',
            chapterPages: [
                // 
                    // PAG 1 - CAPA
                //
                {
                    pageTitle: '1 - Capa',
                    pageID: 'capa',
                    pageCustomClass: 'cover-page',
                    pageTemplate: {
                        templateLabel: 'Página padrão',
                        templateID: 'default-page',
                        templateHTML: 'default-page.html',
                        templateCustomClass: ''
                    },
                    pagePreloaderFiles: {
                        singularFiles: {
                            files: [
                            
                            ]
                        },
                        animationSequenceImgs: [],
                        percentNumber: true
                    },
                    pageContent: '\
                    <div class="content vertical-align">\
                        <div class="scroll mCustomScrollbar">\
                            <h1>Das sequências didáticas aos projetos</h1>\
                        </div>\
                    </div>',
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: '',
                            overlayContent: ''
                        }
                    ],
                    pageAudios: [
                        {
                            audioID: '',
                            audioFile: '',
                            audioPlayer: true
                        }
                    ],
                    pageNotes: 'Anotações...',
                    pageCallbackMethod: 'theme.coverPage()',
                    pageStatus: 'active'
                },
                // 
                    // FIM PAG 1
                //

                
                
                {
                    pageTitle: '2 - Das sequências didáticas aos projetos',
                    pageID: 'das-sequencias-didaticas-aos-projetos',
                    pageCustomClass: '',
                    pageTemplate: {
                        templateLabel: 'Página padrão',
                        templateID: 'default-page',
                        templateHTML: 'default-page.html',
                        templateCustomClass: ''
                    },
                    pagePreloaderFiles: {
                        singularFiles: {
                            files: [
                  
                            ]
                        },
                        animationSequenceImgs: [],
                        percentNumber: true
                    },
                    pageContent: '<div class="content vertical-align center"><div class="scroll mCustomScrollbar">\
                        <div class="scroll-x">\
                            <div class="case-infographic">\
                            <div style="height:155px;">\
                                <div class="box-1 btn-overlay" overlay="0" style="position:absolute; z-index:2; top:128px; left:31px;"></div>\
                                <div class="box-infographic" style=" border-radius:0 0 0 35px ;left:407px;">\
                                    <p style="text-align:right;"><strong style="color:inherit;">Sugestões de<br> sequências didáticas<br> com poemas</strong></p>\
                                </div>\
                                <div class="box-3 btn-overlay" overlay="2" style="position:absolute; bottom:227px; left:359px; z-index:1;"></div>\
                                <div class="left1-2" style="position:absolute; bottom:163px; left:262px;"></div>\
                                <div class="box-infographic" style="border-radius:35px 0 0 0  ;bottom:0px; left:0px;">\
                                    <p><strong style="color:inherit;">Sugestão de sequência<br> \
                                    didática com fábulas</strong></p>\
                                </div>\
                            </div>\
                            <div style="display:flex; height:180px;">\
                                <div style="display:flex; margin-bottom:15px;">\
                                <div class="box-infographic" style="border-radius:0 0 35px 0;top:0; left:8px;">\
                                    <p style="text-align:right;"><strong style="color:inherit;">Sugestões de sequência<br> didática com contos de<br> fadas (ou contos<br> maravilhosos)</strong></p>\
                                </div>\
                                    <div class="right1"></div>\
                                    <div class="box-2 btn-overlay" overlay="1" style="position:absolute; top:127px; left:221px; z-index:1;"></div>\
                                    <div class="left-primary left1-2"></div>\
                                \
                                </div>\
                                \
                                <div style="display:flex; margin-bottom:15px;">\
                                    <div class="box-infographic" style="border-radius:0 0 0 35px ;bottom:147px; left:570px;">\
                                        <p style="text-align:right;"><strong style="color:inherit;">“Perseguindo” <br>\
                                        um autor</strong></p>\
                                    </div>\
                                    <div class="box-4 btn-overlay" overlay="3" style="position:absolute; top:126px; right:176px; z-index:1;"></div>\
                                    <div class="left2-2" style="position:absolute; left:402px; bottom:120px;"></div>\
                                    <div class="box-5 btn-overlay" overlay="4" style="position:absolute; top:202px; right:36px; z-index:1;"></div>\
                                    <div class="box-infographic" style="border-radius: 0 35px 0 0;bottom:8px; left:395px;">\
                                        <p style="text-align:left;"><strong style="color:inherit;">Leitura de contos com<br> estruturas semelhantes</strong></p>\
                                    </div>\
                                    <div class="left2-2" style="top:197px; left:544px; position:absolute;"></div>\
                                </div>\
                            </div>\
                            \
                            </div>\
                        </div>\
                        \
                        \
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: '',
                            carouselID: '',
                            carouselCustomClass: '',
                            carouselItens: [
                               
                                
                            ]
                        }
                    ],
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'text-information',
                            overlayContent: '<div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            <p class="sub-title"><strong><em style="color:inherit; font-size:inherit;">01 - Sugestão de sequência didática com fábulas</em></strong></p>\
                            <p>Imagine que você quer que seus alunos aprofundem seus conhecimentos sobre a forma literária da “fábula”.\
                            </p>\
                            \
                            <p>As <strong><em style="color:#ECEE57;">fábulas</em></strong> são narrativas curtas e objetivas, em que as personagens são mais “tipos” que seres complexos e, também, quase nunca têm nome.<br>\
                            Elas são assim porque pretendem conduzir o leitor a <strong><em style="color:#ECEE57;">uma</em></strong> determinada conclusão, que é a “moral” da história, geralmente um parágrafo final que seria a decorrência, <strong><em style="color:#ECEE57;">aparentemente lógica</em></strong>, da história bem curta e com poucos detalhes que acabou de ser contada.</p>\
                            \
                            <p>Veja aqui um exemplo, retirado de Monteiro Lobato:</p>\
                            \
                            <div class="box-content" style="margin:20px auto; width:70%;">\
                            \
                            <p style="text-align:center;"><strong>“O leão e o ratinho</strog></p>\
                            \
                            <p>- Ao sair do buraco viu-se um ratinho entre as patas do leão. Estacou, de pelos em pé, paralisado pelo terror. O leão, porém, não lhe fez mal nenhum.</p>\
                            \
                            <p>- Segue em paz, ratinho. Não tenhas medo de teu rei.</p>\
                            \
                            <p>- Dias depois o leão caiu numa rede. Urrou desesperadamente, debateu-se, as quanto mais se agitava mais preso no laço ficava.</p>\
                            \
                            <p>- Atraído pelos urros, apareceu o ratinho</p>\
                            \
                            <p>- Amor com amor se paga – disse ele lá consigo e pôs-se a roer as cordas.</p>\
                            \
                            <p>- Num instante conseguiu romper uma das malhas. E como a rede era das tais que rompida a primeira malha as outras se afrouxam, pôde o leão deslindar-se e fugir.</p>\
                            \
                            <p style="text-align:center;"><strong style="color:#ECEE57;">Mais vale a paciência pequenina.<br>\
                            Do que arrancos de leão.”</strong></p>\
                            \
                            <p style="font-size:14px; line-height:24px;"><em style="font-size:inherit;">(Trecho de LOBATO, Monteiro. Fábulas. São Paulo: Brasiliense, 1994, p. 51.)</em></p>\
                            \
                            </div>\
                            \
                            <p>A frase final, destacada em negrito, é a moral da fábula, uma conclusão a que todos que a leem deveriam <strong><em style="color:#ECEE57;">necessariamente</em></strong> chegar.</p>\
                            \
                            <p>Mas nem sempre isso funciona assim, porque a mesma fábula pode levar as pessoas a conclusões muito diferentes. Quer ver?</p>\
                            \
                            <p>Pedro Bandeira, no livro Fábulas palpitadas também reconta a fábula do leão e do ratinho. Ao terminar, porém, em vez de moral, ele optou por dar “palpites”:</p>\
                            \
                            <div class="box-content" style="width:50%; margin:20px auto;">\
                            \
                            <p style="text-align:center;"><em>“E lá vem palpite!</em></p>\
                            \
                            <p><em style="font-family:inherit;">Certa vez uma pulguinha resolveu me atormentar.\
                            Enfiou-se em minha roupa e se pôs logo a picar.</em>\
                            </p>\
                            \
                            <p><em style="font-family:inherit;">Procurei, procurei, me coçando da mordida,\
                            e afinal eu encontrei a pulguinha escondida.</em>\
                            </p>\
                            \
                            <p><em style="font-family:inherit;">Com a unha ia esmagá-la, quando foi que eu me lembrei\
                            da história do ratinho que eu sempre admirei.</em>\
                            </p>\
                            \
                            <p><em style="font-family:inherit;">Resolvi então soltá-la e se foi ela pulando.\
                            Desde então a sua ajuda eu fiquei cá esperando…</em>\
                            </p>\
                            \
                            <p><em style="font-family:inherit;">Fábula é sempre moral, qualquer um sempre divulga.\
                            Mas pensar em gratidão não é o caso da pulga!</em></p>\
                            \
                            <p><em style="font-family:inherit;">Mas em que uma pulguinha ia poder me ajudar?\
                            Pulga não serve pra nada, serve só para coçar!”</em></p>\
                            \
                            <p style="font-size:14px; line-height:24px;"><em style="font-size:inherit;">(BANDEIRA, Pedro. Fábulas palpitadas. São Paulo: Moderna, 2010, p. 39.)</em></p>\
                            </div>\
                            \
                            <p>No livro de Monteiro Lobato, após a narração de cada fábula, as personagens intervêm para dar sua opinião sobre a moral, havendo momentos até em que discordam frontalmente dela.</p>\
                            \
                            <p>Já no livro Fábulas de Esopo, de Ruth Rocha (São Paulo: Salamandra, 2010), a autora recontou as fábulas, mas optou por não dar a elas <strong><em style="color:#ECEE57;">nenhuma moral</em></strong>, provavelmente para deixar que cada leitor elabore a sua.</p>\
                            \
                            <p>Como fazer para dar conta dessa variedade toda?</p>\
                            \
                            <p>Você pode, por exemplo, organizar uma <strong><em style="color:#ECEE57;">sequência didática de leitura e discussão de fábulas.</em></strong>\
                            </p>\
                            \
                            <ul class="list-cicle">\
                                <li><div></div><p>Partindo do conhecimento prévio (ou repertório) que seus alunos têm sobre o assunto, você precisa definir seu <strong><em style="color:#ECEE57;">objetivo didático</em></strong>. Por exemplo: “Proporcionar condições para que os alunos do 4º ou 5º ano percebam as variações que existem na forma literária ‘fábula’”. Você pode ter esse objetivo porque quer incentivá-los a escrever uma fábula; ou porque eles demonstraram uma fixação exagerada em buscar “mensagens” ou “morais” em todos os textos que leem.</p></li>\
                                \
                                <li><div></div><p>Em seguida, você fará uma seleção de livros de fábulas, recontadas por diferentes autores de formas diferentes, para que eles possam ler ou ouvir todas as versões.</p></li>\
                                \
                                <li><div></div><p>Depois, você precisa planejar como essas fábulas serão lidas (quem vai lê-las: você, os alunos, ambos?); como vai disponibilizar os livros para eles?; onde ocorrerão as leituras (no cantinho da leitura ou com os alunos em suas mesas?); em que momento da aula?; a ordem em que as leituras vão ocorrer (de preferência, dos textos mais tradicionais para os menos convencionais); quanto tempo durará essa sequência didática (duas semanas?). Enfim, todos os passos, todas as “condições didáticas” necessárias para realizar esse trabalho.</p></li>\
                                \
                                <li><div></div><p>Finalmente, você terá de pensar como vai propor a sequência didática para seus alunos (não precisa necessariamente chamá-la assim), explicitar seus objetivos e conquistar a adesão da turma ao trabalho.</p></li>\
                                \
                                \
                            </ul>\
                            \
                            <p class="sub-title"><strong><em style="color:inherit; font-size:inherit;">De uma sequência para um projeto</em></strong></p>\
                            \
                            <p>Você também pode realizar com seus alunos um <em style="color:#ECEE57;">projeto</em> sobre fábulas. \
                            Nesse caso, trata-se de uma atividade mais complexa, pois o trabalho dos alunos terá também:\
                            </p>\
                            \
                            <ul class="list-cicle">\
                                <li><div></div><p>de culminar num <em style="color:#ECEE57;">produto final</em> (exemplo, um livro de fábulas reescritas por eles; cartazes com fábulas para pregar na escola), </p></li>\
                                \
                                <li><div></div><p>que tenha um <em style="color:#ECEE57;">propósito comunicativo claro</em> (por exemplo, ler as fábulas para crianças de turmas que ainda não estão alfabetizadas; ou recriar as fábulas, escrevê-las em cartazes pequenos e distribuir pela escola)</p></li>\
                                \
                                <li><div></div><p>e que <em style="color:#ECEE57;">faça sentido para eles</em> (Exemplo: Por que vamos fazer esse trabalho? Porque as turmas dos menores gostam de ouvir histórias, e as fábulas são curtinhas, podemos ler para eles em pouco tempo…; porque queremos espalhar a leitura pela escola…).</p></li>\
                                \
                                <li><div></div><p>Você terá de elaborar e redigir a <em style="color:#ECEE57;">justificativa didática</em> e os <em style="color:#ECEE57;">objetivos</em> claros para seu projeto, definindo qual será esse <em style="color:#ECEE57;">produto final</em> e <em style="color:#ECEE57;">para que</em> será elaborado.</p></li>\
                                \
                                <li><div></div><p>Terá de pensar todas as <em style="color:#ECEE57;">etapas</em> e as <em style="color:#ECEE57;">atividades necessárias</em> para chegar à conclusão do projeto, assim como a sua duração. </p></li>\
                                \
                                <li><div></div><p>Finalmente, você deverá <em style="color:#ECEE57;">apresentar e discutir o projeto</em> com seus alunos, de forma que eles entendam e se engajem na proposta e elenquem as etapas pelas quais vão passar.</p></li>\
                                \
                            </ul>\
                            \
                            </div></div>',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'text-information',
                            overlayContent: '\
                            <div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            <p class="sub-title"><strong><em style="color:inherit; font-size:inherit;">02 - Sugestões de sequência didática com contos de fadas (ou contos maravilhosos)</em></strong></p>\
                            \
                            <p>Normalmente, muitos contos de fadas são lidos com as crianças nos anos iniciais do ensino fundamental. Além das crianças gostarem desses contos, eles geralmente possuem uma estrutura simples, fácil de ser memorizada em caso de conversas nas rodas de leitores, reescritas, etc.</p>\
                            \
                            <p>Há várias maneiras de estimular seus alunos a criarem relações entre diferentes contos, de forma a enriquecer seu repertório leitor.</p>\
                            \
                            <p>Sabemos que o que chamamos comumente de contos de fadas nem sempre envolvem fadas ou bruxas; alguns contêm elementos maravilhosos, outros são contos de esperteza; alguns envolvem princesas; outros são contos sobre rivalidade entre irmãos…  Enfim, há várias maneiras de organizar sequências didáticas ou projetos estimulando os alunos a estabelecer relações de intertextualidade entre esses contos.<br>\
                            Algumas sugestões:\
                            </p>\
                            \
                            <ul class="list-cicle">\
                                <li><div></div><p>Selecionar e organizar coletâneas de contos, classificando-os pelos personagens: contos de princesas, contos de irmãos; contos com lobo ou animais malvados; contos com bruxas; contos de animais…</p></li>\
                                \
                                <li><div></div><p>Selecionar e organizar coletâneas classificando os contos por sua origem: tradição oral brasileira; contos europeus; contos africanos; contos japoneses; contos russos…</p></li>\
                                \
                                <li><div></div><p>Criar galerias ou enciclopédias de personagens: galerias de fadas; galerias de personagens malvados, galeria de príncipes e princesas…</p></li>\
                                \
                                <li><div></div><p>Os alunos mais experientes podem fazer trabalhos mais complexos, como, por exemplo, comparar diferentes versões de contos de fadas (dos Grimm e de Perrault; ou diferentes recontos da mesma história tradicional).</p></li>\
                                \
                            </ul>\
                            \
                            <p>Se for seu objetivo trabalhar com contos de fadas em um projeto, pense desde o início em todas as etapas necessárias para realizá-lo e, principalmente, em discutir com seus alunos qual será o propósito comunicativo, o produto final e os seus destinatários.\
                            </p>\
                            \
                            </div>\
                            </div>\
                            ',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },

                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'text-information',
                            overlayContent: '\
                            <div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            <p class="sub-title"><strong><em style="color:inherit; font-size:inherit;">03 - Sugestões de sequências didáticas com poemas</em></strong></p>\
                            \
                            <p>Se você tiver o hábito de ler poemas com sua turma, pode começar a prepará-los para intuitivamente irem compreendendo alguns elementos que diferenciam os tipos de poema.</p>\
                            \
                            <p>Por exemplo, se começar com parlendas, quadrinhas e outros textos de origem oral, aos poucos você pode ir passando para poemas mais contemporâneos, que utilizem ou não recursos da poesia tradicional (número de sílabas, de versos em uma estrofe; presença ou não de rimas…), até chegar a poemas menos tradicionais ou até sem rimas, com versos soltos.</p>\
                            \
                            <p>Uma sequência didática possível seria você selecionar livros ou poemas avulsos de vários poetas e de épocas diferentes, para que eles possam compará-los, de acordo, é claro, com seu domínio da língua e de seu repertório.\
                            </p>\
                            \
                            <p>Algumas possibilidades de classificação:</p>\
                            \
                            \
                            <ul class="list-cicle">\
                                <li><div></div><p><strong><em style="color:#ECEE57;">Estilos dos poemas:</em></strong> brincadeiras com as palavras; adivinhas e trava-línguas; poemas que são adivinhas.</p></li>\
                                \
                                <li><div></div><p><strong><em style="color:#ECEE57;">Conteúdo:</em></strong> histórias escritas em forma de poemas; alfabetos em forma de poemas; poemas sobre crianças; poemas sobre bichos.</p></li>\
                                \
                            </ul>\
                            \
                            <p>Da mesma maneira, essas atividades podem ser parte de um <strong><em style="color:#ECEE57;">projeto</em></strong>, cujo produto final seria um livro coletivo ou poemas escritos em folhas e expostos na sala ou na escola.\
                            </p>\
                            \
                            </div>\
                            </div>\
                            ',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },

                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'text-information',
                            overlayContent: '\
                            <div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            <p class="sub-title"><strong><em style="color:inherit; font-size:inherit;">04 - “Perseguindo” um autor</em></strong></p>\
                            \
                            <p>Em forma de sequência didática ou de projeto, você pode escolher com seus alunos um autor para passar um período lendo e classificando sua obra.</p>\
                            \
                            <p>Escritores como Ana Maria Machado, Eva Furnari, Ruth Rocha, Pedro Bandeira e Walcyr Carrasco possuem vastas obras que incluem livros de vários tipos e para várias idades: histórias curtas ilustradas; recontos de clássicos; livros de poemas… Dependendo do domínio da leitura de sua turma, você pode escolher uma ou mais dessas categorias em um autor, promover a leitura dos livros pré-selecionados por você e realizar atividades ou projetos  nos quais as crianças têm a oportunidade de comparar histórias, temas, maneiras de narrar, personagens e, também, fazer uma seleção das histórias originais, recontos ou poemas preferidos da turma.</p>\
                            \
                            \
                            \
                            </div>\
                            </div>\
                            ',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },


                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'text-information',
                            overlayContent: '\
                            <div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            <div><p class="sub-title"><strong><em style="color:inherit; font-size:inherit;">05 - Leitura de contos com estruturas semelhantes</em></strong></p>\
                            \
                            <p>Entram nessa categoria alguns tipos de livros que já mencionamos em outros momentos. Por exemplo, as histórias acumulativas, os livros-álbum ou ilustrados, os livros com histórias de bichos, de crianças…</p>\
                            \
                            <p>Você e sua turma podem criar uma classificação própria do tipo de narrativas cujos elementos mais lhes interessem.</p>\
                            \
                            <p>Aqui você pode seguir, mesmo que trabalhando de forma intuitiva com as crianças menores, as estratégias de leitura apresentadas por Nodelman:\
                            </p>\
                            \
                            \
                            \
                            \
                            <ul class="list-cicle">\
                                <li><div></div><p>Que livros nós lemos que atiçam mais a nossa imaginação, provocando em nossa mente o surgimento de imagens, sensações, emoções… (concretização).</p></li>\
                                \
                                <li><div></div><p>Que livros têm as personagens mais interessantes?</p></li>\
                                \
                                <li><div></div><p>Que livros têm histórias que a gente não consegue parar de ler? (trama)</p></li>\
                                \
                                <li><div></div><p>Que livros têm histórias escritas de forma mais interessante? (estrutura)</p></li>\
                                \
                                <li><div></div><p>Classificar os livros pelo tipo de narrador: quem conta a história?</p></li>\
                                \
                            </ul>\
                            \
                            <p>Enfim, são tantas as possibilidades quanto sua imaginação e seu conhecimento de seus alunos poderão inspirar!\
                            </p>\
                            </div>\
                            </div>\
                            </div>\
                            ',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },


                        
                        
                    ],
                    pageAudios: [
                        {
                            audioID: '',
                            audioFile: '',
                            audioPlayer: true
                        }
                    ],
                    pageNotes: 'Anotações...',
                    pageCallbackMethod: 'theme.paraSeusAlunosLeremSozinhos()',
                    pageStatus: 'active'
                },
               

               

                
               

            ]
        }

    ]

}