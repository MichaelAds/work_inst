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
            
            chapterTitle: 'Módulo 3 - Parte 4',
            chapterID: 'estrategias-para-a-leitura-de-um-texto-literario-segundo-perry-nodelman',
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
                            <h1>Sugestões de livros que estimulam \
                            o uso das estratégias de leitura \
                            apontadas por Perry Nodelman</h1>\
                            \
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
                    pageTitle: '2 - Introdução',
                    pageID: 'introducao',
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
                    \
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: 'Introdução',
                            carouselID: 'introducao',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p>No Módulo 2 conversamos bastante sobre a <strong style="color:#ECEE57;"><em style="color:inherit;">leitura de textos literários em voz alta</em></strong> e sobre as <strong style="color:#ECEE57;"><em style="color:inherit;">perguntas</em></strong> sugeridas por Aidan Chambers, para dar início às <strong style="color:#ECEE57;"><em style="color:inherit;">rodas de conversa</em></strong> sobre os textos.</p>\
                                        \
                                        <p>No Módulo 3 nos debruçamos sobre as estratégias de leitura e compreensão de textos propostas por Isabel Solé, aplicando-as a diversos tipos de textos literários.</p>\
                                        \
                                        <p>Antes de trabalharmos a leitura de textos informativos, vamos, neste módulo, aprofundar um pouco mais a leitura de textos literários. </p>\
                                        \
                                        <p>À medida que seus alunos forem se habituando às rodas de leitores e às conversas sobre livros, você pode ir aprofundando seu trabalho, ajudando-os a notar outros elementos que levem a compreender e avaliar melhor as narrativas que leem.</p>\
                                        \
                                        </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text2',
                                    itemID: 'text2',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                           <p>Uma das maneiras de fazer isso é a sugerida pelo professor Perry Nodelman, de quem falamos no Módulo 1. </p>\
                                           \
                                           <p>Em suas aulas de literatura para futuros professores de crianças e jovens, ele parte do pressuposto de <strong style="color:#ECEE57;"><em style="color:inherit;">que podemos ensinar nossos alunos a gostar de ler porque a leitura é, por si própria, um ato que nos causa prazer.</em></strong></p>\
                                           \
                                           <p>Isso não quer dizer de maneira alguma que apenas juntar crianças e livros faz o “milagre” de torná-las leitoras – conforme já vimos. Também não quer dizer que concepções que circulam por aí sobre o <strong style="color:#ECEE57;"><em style="color:inherit;">prazer da leitura</em></strong> – como as frases que destacamos a seguir – sejam verdadeiras (ou, pelo menos, totalmente verdadeiras). As frases:</p>\
                                           \
                                           \
                                           <p style="text-align:center;"><strong style="color:#ECEE57;"><em style="color:inherit;">O texto precisa ser fácil…<br>\
                                           A história precisa ser simples e direta, precisa ter começo, meio e fim…<br>\
                                           Não pode haver cenas violentas ou partes chocantes…<br>\
                                           O texto precisa ser engraçado…<br>\
                                           As letras precisam ser grandes…<br>\
                                           O conteúdo deve agradar à criança…<br>\
                                           O livro deve conter muitas ilustrações coloridas…<br></em></strong>\
                                           </p>\
                                           \
                                           <p>Para Nodelman, o prazer de ler nem sempre se origina da facilidade que alguns textos oferecem, e sim <strong style="color:#ECEE57;"><em style="color:inherit;"><u style="font-family:inherit; color:inherit;">de quanto o próprio texto, seja ele escrito ou visual,</u> nos instiga a descobrir mais e mais <u style="font-family:inherit; color:inherit;">sobre o que vem a seguir, sobre</u> os significados <u style="font-family:inherit; color:inherit;">que ele nos permite</u> construir.</em></strong></p>\
                                           \
                                           \
                                           \
                                           \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>2</p>'
                                    }
                                },

                                
                                
                               
                            ]
                        }
                    ],
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'overlay-img',
                            overlayContent: '<div class="vertical-align">\
                            <div class="scroll mCustomScrollbar">\
                               \
                            </div>\
                        </div>',
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
               

                {
                    pageTitle: '3 - Preencher as lacunas para criar sentido',
                    pageID: 'preencher-as-lacunas-para-criar-sentido',
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
                    pageContent: '<div class="content vertical-align"><div class="scroll mCustomScrollbar">\
                    \
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: 'Preencher as lacunas para criar sentido',
                            carouselID: 'preencher-as-lacunas-para-criar-sentido',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p>Nodelman nos chama a atenção para um fato muito importante:</p>\
                                        \
                                        <p><strong style="color:#ECEE57;"><em style="color:inherit;">Todos os textos deixam lacunas – ou brechas – para que o leitor as preencha com sua imaginação.</em></strong></p>\
                                        \
                                        <p>Observe o exemplo:</p>\
                                        \
                                        <div class="colum-separator">\
                                            <div class="box-content" style="width:65%;">\
                                            <p><strong><em>“Aquela era uma cidade muito pequena, pequena mesmo. Na beirinha da cidade havia um velho jardim abandonado. No jardim havia uma casa velha, e na casa morava Píppi Meialonga. Píppi tinha nove anos e morava completamente sozinha. A menina não tinha pai nem mãe, e no fim das contas até que isso era bom, porque ninguém vinha dizer a ela que estava na hora de ir para a cama no exato instante em que ela estava se divertindo mais, e ninguém a mandava tomar óleo de fígado de bacalhau quando ela estava com vontade de chupar uma bala.”</em></strong></p>\
                                            </div>\
                                        \
                                            <div class="box-content" style="width:20%; padding-top:15px;">\
                                                <div class="image"></div>\
                                                <p style="font-size:10px; line-height:20px;"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit;">(LINDGREN, Astrid. Píppi Meialonga. Tradução de Maria de Macedo. São Paulo: Cia das Letrinhas, 2003, p. 7.)</em></strong></p>\
                                            </div>\
                                        </div>\
                                        \
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text2',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p>As crianças de 9 a 11 anos costumam adorar essa personagem, apesar de ela ter sido criada pela escritora sueca Astrid Lindgren há muito tempo, ainda na década de 1940. </p>\
                                        \
                                        <p>Um dos motivos desse sucesso é, com certeza, a agilidade do texto. Veja que, em apenas um parágrafo:<strong style="color:#ECEE57;"><em style="color:inherit;"> ficamos conhecendo Píppi, sabendo que ela tem 9 anos, que mora sozinha numa cidade pequena e costuma fazer o que bem entende.</em></strong></p>\
                                        \
                                        <p>É claro que a simples ideia de uma menina morar sozinha no meio do nada já encanta as crianças, que inconscientemente sonham com a liberdade de poder fazer o que quiserem, sem ter que obedecer a regra alguma.</p>\
                                        \
                                        <p>Mas, se voltarmos ao trecho e o lermos cuidadosamente, veremos que as informações concretas que ele nos dá são poucas e que a maior parte do que falta <strong style="color:#ECEE57;"><em style="color:inherit;">É PREENCHIDA POR NOSSA IMAGINAÇÃO!</em></strong></p>\
                                        \
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>2</p>'
                                    }
                                },


                                {
                                    itemLabel: 'text3',
                                    itemID: 'text3',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p>Sobre a cidade: <strong style="color:#ECEE57;"><em style="color:inherit;">Que informações temos sobre a cidade?</em></strong></p>\
                                        \
                                        <p>Quase nenhuma, a não ser que é muito pequena. Mas, enquanto leio, minha imaginação – e aposto que a sua também – já vai construindo uma cidadezinha, uma casa velha para Píppi, na “beirinha da cidade”, “uma cidade muito pequena, pequena mesmo”.</p>\
                                        \
                                        <p>Sobre Píppi: <strong style="color:#ECEE57;"><em style="color:inherit;">Que informações temos sobre Píppi?</em></strong></p>\
                                        \
                                        <p>Até agora, quase nada. Mas minha imaginação – e a sua? – já criou a imagem de uma menininha esperta, porque sabe viver sozinha, e alegre, pois gosta de sua liberdade.</p>\
                                        \
                                        <p>Esses são alguns dos tipos de “mágica” que um bom texto ou uma boa imagem fazem com a gente: <strong style="color:#ECEE57;"><em style="color:inherit;"><u style="font-family:inherit; color:inherit;">Em vez de contar tudo</u>, sugerem; deixam espaço para nós construirmos aquilo que está faltando.</em></strong></p>\
                                        \
                                        <p>É claro, na sequência da leitura do livro saberemos muito mais sobre a personagem. Mas não <strong style="color:#ECEE57;"><em style="color:inherit;">tudo</em></strong>. Você já imaginou se Astrid Lindgren se dispusesse a contar tudo sobre Píppi? Em primeiro lugar, o texto jamais poderia tentar descrevê-la em todos os detalhes, sob pena de ficar extremamente longo e tedioso. Em segundo, como contar <strong style="color:#ECEE57;"><em style="color:inherit;">tudo</em></strong> sobre alguém ou uma personagem? Se um escritor ou ilustrador consegue criar uma personagem complexa (um pouco como são as pessoas na vida real), mesmo dando a ele ou ela características bem específicas, ainda assim deixam muito espaço para o leitor imaginar. </p>\
                                        \
                                        <p><strong style="color:#ECEE57;"><em style="color:inherit;">E é aí que está a graça!</em></strong></p>\
                                        \
                                        <p>Como você pode fazer para ensinar seus alunos a usufruir do prazer de preencher as lacunas que o texto deixa para o leitor? É o que vamos ver a seguir.</p>\
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>3</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text4',
                                    itemID: 'text4',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><span>Para todos os anos</span></h3>\
                                        <div style="max-width:845px; margin:auto;">\
                                            <div class="content-colum">\
                                                \
                                                <div class="box-content">\
                                                    <p class="sub-title"><strong>- Ou isto ou aquilo.</strong></p>\
                                                    <p>Poemas de Cecília Meireles.<br>\
                                                    Ilustrações de Odilon Moraes.</p>\
                                                    <p>Editora Global.</p>\
                                                </div>\
                                                \
                                                <div class="box-content">\
                                                    <p class="sub-title"><strong>- Exercícios de ser criança.</strong></p>\
                                                    <p>Poemas de Manoel de Barros.<br>\
                                                    Ilustrações das irmãs Dummont</p>\
                                                    <p>Editora Salamandra.</p>\
                                                </div>\
                                                \
                                                <div class="box-content">\
                                                    <p class="sub-title"><strong>- O fazedor de amanhecer.</strong></p>\
                                                    <p>Poemas de Manoel de Barros.<br>\
                                                    Ilustrações de Ziraldo. \
                                                    </p>\
                                                    <p>Editora Salamandra.</p>\
                                                </div>\
                                                \
                                            </div>\
                                        \
                                            <div class="box-featured">\
                                                <p><strong style="color:inherit;">Nesses três clássicos da poesia para crianças, poemas que dão a oportunidade de mergulhar num universo de sons, imagens e lirismo.</strong></p>\
                                            </div>\
                                        </div>\
                                           \
                                           \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>4</p>'
                                    }
                                },
                                
                            ]
                        }
                    ],
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'overlay-img',
                            overlayContent: '\
                            <div class="vertical-align"><div class="scroll mCustomScrollbar">\
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


            {
                    pageTitle: '4 - Seis estratégias de leitura, para aprender e ensinar',
                    pageID: 'seis-estrategias-de-leitura-para-aprender-e-ensinar',
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
                    <p></p>\
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: ' Seis estratégias de leitura, para aprender e ensinar',
                            carouselID: 'seis-estrategias-de-leitura-para-aprender-e-ensinar',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            \
                                            <p>Na mesma direção que Aidan Chambers, Perry Nodelman nos dá ideias de como a ajudar as crianças (e nós também) a encontrar prazer na leitura de textos literários, deixando a imaginação trabalhar.</p>\
                                            \
                                            <p>Ele nos diz que, ao ler ou ouvir determinado texto literário, os leitores <strong style="color:#ECEE57;"><em style="color:inherit;">aprendem</em></strong> a se valer de seis estratégias, para criar sentido e preencher as lacunas deixadas pelo escritor. Destacamos o verbo “aprender” porque é nesse ponto que entra sua ação como mediador (a). Pois, ainda segundo Nodelman, essas estratégias são dominadas pelos “leitores competentes”, aqueles que <strong style="color:#ECEE57;"><em style="color:inherit;">aprenderam</em></strong> a “construir sentido a partir das informações que obtêm enquanto vão abrindo caminho em meio a um texto literário”. Ou seja, são estratégias que podem ser <strong style="color:#ECEE57;"><em style="color:inherit;">ensinadas</em></strong>.</p>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text2',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <p>Costumamos procurar o sentido do texto usando <strong style="color:#ECEE57;"><em style="color:inherit;">uma das seis</em></strong> estratégias, ou <strong style="color:#ECEE57;"><em style="color:inherit;">algumas delas</em></strong>, ou <strong style="color:#ECEE57;"><em style="color:inherit;">todas</em></strong> ao mesmo tempo:</p>\
                                        <div style="width:26%; margin:auto;">\
                                        <p><strong style="color:#ECEE57;">- a concretização,<br> \
                                        - as personagens,<br> \
                                        - a trama,<br> \
                                        - o tema,<br> \
                                        - a estrutura,<br> \
                                        - o ponto de vista ou foco.</strong></p>\
                                        </div>\
                                        <p>Embora essas estratégias sejam adquiridas por meio da prática de leitura, você pode trabalhar com seus alunos desde a Educação Infantil. Quer ver?</p>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>2</p>'
                                    }
                                },

                                

                                
                            ]
                        }
                    ],
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: '',
                            overlayContent: '<div class="vertical-align"><div class="scroll">\
                            \
                            \
                            \
                            </div></div>',
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

                {
                    pageTitle: '5 - A concretização',
                    pageID: 'a-concretizacao',
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
                    <p></p>\
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: 'A concretização',
                            carouselID: 'a-concretizacao',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            \
                                            <p class="sub-title"><strong><em style="font-size:inherit; color:inherit;">01 - A concretização</em></p>\
                                            \
                                            <p>Vamos deixar que as próprias palavras demonstrem o que é a <strong style="color:#ECEE57;"><em style="color:inherit;">concretização</em></strong>.<br>\
                                            Leia os trechos que apresentaremos a seguir – deixe-se levar por eles:\
                                            </p>\
                                            \
                                            <div class="separator-colum">\
                                            \
                                                <div class="box-content" style="width:25%;">\
                                                    <p>1<br>\
                                                    “COISA BOA\
                                                    é dormir na fazenda.\
                                                    Sono embalado\
                                                    pelo canto do curiango.\
                                                    O assobio comprido\
                                                    atravessa a cortina de renda\
                                                    e vem beijar meu ouvido.”\
                                                    </p>\
                                                    <p style="font-size:12px; line-height:22px;"> (BARROS, Sônia. In: _. Coisa boa. São Paulo: Moderna, 2007, p. 7.)</p>\
                                                </div>\
                                                \
                                                <div class="box-content" style="width:65%;">\
                                                    <p>2<br>\
                                                    “Nossa casa já não existe. Como tantas outras coisas, ela passou. Mas naquele tempo tinha uma pequena varanda forrada de ladrilho xadrez, frio e limpo. Galhos do maracujá cresciam e se enroscavam com ternura na madeira do telhado. E suas flores, brincos roxos de princesa, viviam breves, dependuradas como estrelas em um céu baixo que as mãos podiam tocar.”</p>\
                                                    <p style="font-size:12px; line-height:22px;">(QUEIRÓS, Bartolomeu Campos. Até passarinho passa. São Paulo: Moderna, 2003, p. 5.)</p>\
                                                </div>\
                                                \
                                            \
                                            </div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text2',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            \
                                            <p>Da mesma forma que o parágrafo inicial do livro Píppi Meialonga, os trechos acima <strong style="color:#ECEE57;"><em style="color:inherit;">nos estimulam a preencher com nossa imaginação os detalhes que não nos contam e a formar imagens mentais a partir do que descrevem.</em></strong></p>\
                                            \
                                            <p>Quem não consegue imaginar um quarto de fazenda, a cortina de renda na janela, ouvir (ou imaginar) o “assobio comprido” do curiango “beijando” nosso ouvido, ao ler o poema tão curtinho de Sônia Barros?</p>\
                                            \
                                            <p>Quem não consegue imaginar uma casa com varanda a partir da breve descrição feita por Bartolomeu Campos de Queirós? Podemos quase sentir o frio dos ladrilhos, ver os galhos do maracujá se enroscando “com ternura” na madeira do telhado; podemos quase visualizar e tocar suas flores, “como estrelas em um céu baixo”.</p>\
                                            \
                                            <p>Essa estratégia que utilizamos para criar sentido ao ler um texto literário é chamada por Nodelman de <strong style="color:#ECEE57;"><em style="color:inherit;">concretização</em></strong>. Sendo, talvez, a mais importante de todas as seis, ela diz respeito a como passagens dos textos evocam memórias sensoriais e nos ajudam a imaginar (criar imagens mentais), <strong style="color:#ECEE57;"><em style="color:inherit;">transformando palavras em imagens e sons, o que nos proporciona uma agradável experiência.</em></strong></p>\
                                            \
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>2</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text3',
                                    itemID: 'text3',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <p class="sub-title"><strong><em style="font-size:inherit; color:inherit;">Outro trecho para se deixar levar pela estratégia da concretização.</em></strong></p>\
                                        \
                                        <div class="box-content" style="width:80%; margin:auto;">\
                                        \
                                        <p style="padding-bottom:0;"><strong><em>“As jabuticabas tinham outros fregueses além da menina. Um deles era um leitão muito guloso, que recebera o nome de Rabicó. Assim que via Narizinho trepar à árvore, Rabicó vinha correndo postar-se embaixo, à espera dos caroços. Cada vez que soava lá em cima um tloc! seguido de um pluf! ouvia-se cá embaixo um nhoc! do leitão abocanhando qualquer coisa. E a música da jabuticabeira era assim: tloc! pluf! nhoc! – tloc!  pluf! nhoc!…”</em></strong></p>\
                                        \
                                        <p style="text-align:right; padding-top:0; font-size:12px; line-height:22px;">(LOBATO, Monteiro. Reinações de Narizinho. São Paulo: Globo, 2008)</p>\
                                        \
                                        </div>\
                                        \
                                        <p>A concretização também é importante na leitura de poemas, em que o som das palavras e o ritmo dos versos “embalam” o leitor.  </p>\
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>3</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text4',
                                    itemID: 'text4',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <p class="sub-title"><strong><em style="font-size:inherit; color:inherit;">Concretização e repertório.</em></strong></p>\
                                        \
                                        <p style="padding-left:25px;">Alguns textos literários podem proporcionar concretizações que nos levam muito longe – dependendo das informações de que dispomos sobre o conteúdo enfocado.<br>\
                                        Já vimos como o entendimento das palavras que James Barrie usa para descrever a “ilha” onde estaria a Terra do Nunca, no livro Peter Pan, depende de conhecimentos ou referências anteriores:</p>\
                                        \
                                        <div class="box-content">\
                                        \
                                            <p><strong><em>“Eu não sei se você já viu o mapa da cabeça de uma pessoa por dentro. Às vezes os médicos desenham mapas de outras partes suas e seu próprio mapa pode ser muito interessante. Mas eles nunca se metem a desenhar a mente de uma criança. Não só porque é muito confusa, mas porque ela fica girando sem parar. É cheia de linhas em ziguezague, parecidas com os gráficos de temperatura. Provavelmente essas linhas são estradas da ilha. Ah, sim, porque a Terra do Nunca é, sempre, mais ou menos uma ilha, com manchas surpreendentes de cores aqui e ali, com recifes de coral e embarcações cheias de mastros se fazendo ao largo, com selvagens e covis solitários, com gnomos que quase sempre são alfaiates, com cavernas por onde correm rios, com príncipes que têm seis irmãos mais velhos, e uma cabana que está caindo aos pedaços, e uma velha muito velha de nariz torto.”</em></strong></p>\
                                        \
                                            <p style="text-align:right; padding-top:0; font-size:12px; line-height:22px;"> (BARRIE, James M. Peter Pan. São Paulo: Salamandra, 2006, pp. 14-15. Tradução de Ana Maria Machado.)</p>\
                                        </div>\
                                        </div>\
                                        \
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>4</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text5',
                                    itemID: 'text5',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p>Observe como a enumeração de objetos, locais e personagens evoca em nossa mente memórias de coisas que já conhecemos, de outros contos que já lemos, de lugares onde já estivemos (de corpo presente ou apenas em pensamento). </p>\
                                        \
                                        <p>O problema é que, se seus alunos não entenderem as imagens expressas pelo texto, não vão querer continuar a leitura do livro. Isso acontece, segundo Nodelman: <strong style="color:#ECEE57;><em style="color:inherit;">Porque tudo o que imaginamos tem como referência aquilo que já conhecemos – o que chamamos de nosso “repertório” pessoal.</em></strong></p>\
                                        \
                                        <p>O que ele chama de repertório tem mais ou menos o mesmo significado do que Isabel Solé chama de conhecimentos prévios. São informações, referências que, em maior ou menor grau temos (ou não…), que são extremamente necessárias para a compreensão de qualquer texto e que, por isso mesmo, precisam ser exploradas antes da leitura.</p>\
                                        \
                                        <p>Por isso é preciso que as crianças e jovens tenham acesso a muitas e variadas leituras. Quanto maior for o repertório que tiverem, maior serão suas possibilidades de concretização. E é seu papel ajudar seus alunos nesse trabalho.</p>\
                                        \
                                        <p>Já vimos, no Módulo 3, como a apresentação de um mapa de temperatura ajudaria a compreender boa parte do trecho. Uma vez tendo associado a imagem do mapa ao texto, ficaria mais fácil compreender não só a descrição que ele faz do “mapa da cabeça de uma criança” como também seu sentido metafórico: uma mente inquieta, em que tudo muda o tempo todo, onde estão as “estradas da ilha”. </p>\
                                        \
                                        <p>Isto é, indiretamente, Barrie está nos dizendo que a Terra do Nunca está na mente de cada um – embora isso não precise ficar explícito. O importante é que a compreensão mais profunda da imagem que ele quis criar faz com que os leitores se envolvam mais na narrativa.</p>\
                                        \
                                        <p>Já para compreender a segunda parte do parágrafo, são necessárias informações mais complexas:</p>\
                                        \
                                        <div class="box-content" style="width:90%; margin:auto;">\
                                        \
                                        <p><strong><em>“(…) com recifes de coral e embarcações cheias de mastros se fazendo ao largo, com selvagens e covis solitários, com gnomos que quase sempre são alfaiates, com cavernas por onde correm rios, com príncipes que têm seis irmãos mais velhos, e uma cabana que está caindo aos pedaços, e uma velha muito velha de nariz torto.”</em></strong></p>\
                                        \
                                        </div>\
                                        \
                                        <p>Além da necessidade de conhecer o sentido de palavras e expressões como “recifes de coral”, “embarcações”, “fazer-se ao largo”, “covis”, as referências que o texto faz estão associadas a outras histórias, principalmente a aventuras e contos de fadas. Assim, a leitura de um livro como Peter Pan se destina a crianças que já têm um certo repertório literário; você vai precisar preparar sua turma por algum tempo, lendo para eles vários contos de fadas ou livros de aventura, para que adquiram repertório suficiente para compreender o livro – e, é claro, ampliá-lo ainda mais com a riqueza de imagens que ajudam a concretizar.</p>\
                                        \
                                        <p>É muito importante pensar no repertório de seus alunos quando você vai escolher um livro para ler para ou com eles. O livro ideal contém informações que eles já dominam e também informações e referências novas, que ampliarão seu repertório de leitores.</p>\
                                        \
                                        </div>\
                                        \
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>5</p>'
                                    }
                                },

                               
                            ]
                        }
                    ],
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: '',
                            overlayContent: '<div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            \
                           \
                            \
                            </div>\
                            </div>',
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

                {
                    pageTitle: '6 - As personagens',
                    pageID: 'as-personagens',
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
                    <p></p>\
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: 'As personagens',
                            carouselID: 'as-personagens',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            \
                                            <p class="sub-title"><strong><em style="font-size:inherit; color:inherit;">02 - As personagens</em></p>\
                                            \
                                            <p>Voltando ao trecho retirado de Píppi Meialonga, imagine a surpresa do leitor ao deparar, logo no início de um livro, com uma <strong style="color:#ECEE57;"><em style="color:inherit;">personagem</em></strong> assim! Que criança não vai querer saber quem é essa tal de Píppi, tão poderosa que consegue viver sozinha aos nove anos de idade? Quem seriam seus pais? E o que teria acontecido com eles, para deixá-la sozinha na vida tão cedo?\
                                            </p>\
                                            \
                                            <div class="box-content">\
                                            \
                                                <p>É preciso lembrar – e deixar bem claro para seus alunos – que as <strong style="color:#ECEE57;"><em style="color:inherit;">personagens são criações</em></strong> de um escritor ou escritora, ilustrador ou ilustradora etc. <br>\
                                                No Módulo 2 ressaltamos a importância de seus alunos terem consciência da <strong style="color:#ECEE57;"><em style="color:inherit;">autoria</em></strong> das obras que leem. Essa consciência, além de lhes dar a possibilidade de se tornarem leitores críticos, também pode aguçar sua curiosidade e proporcionar a fruição mais completa do livro.<br>\
                                                Sendo a personagem uma <strong style="color:#ECEE57;"><em style="color:inherit;">criação</em></strong>, seu criador <strong style="color:#ECEE57;"><em style="color:inherit;">escolhe</em></strong> que características desse ser quer deixar em evidência, que características quer esconder. Por quê? Por vários motivos. <br>\
                                                No caso de Píppi Meialonga, por exemplo, o que a autora <strong style="color:#ECEE57;"><em style="color:inherit;">não conta</em></strong> nesse trecho é mais importante do que aquilo que ela <strong style="color:#ECEE57;"><em style="color:inherit;">conta</em></strong>. Isso provavelmente foi feito com um objetivo: aguçar a curiosidade dos leitores, para que continuem lendo a narrativa!\
                                                </p>\
                                            \
                                            </div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text2',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            \
                                            <p class="sub-title">Observe também um outro trecho:</p>\
                                            \
                                            <div class="box-content">\
                                            \
                                            <p style="padding-bottom:0;"><strong><em> “Quando Mary Lennox foi mandada para Misselthaite Manor para morar com o tio, todo mundo disse que ela era a criança mais antipática que qualquer pessoa já tinha visto. E era verdade. Tinha uma cara magrela e um corpo magricelo, cabelo claro ralinho e estava sempre de mau humor. O cabelo era amarelo e o rosto também era amarelo, porque ela tinha nascido na Índia e sempre estava adoentada, de um jeito ou de outro.”</em></strong></p>\
                                            <p style="font-size:12px; padding-top:0; text-align:right; line-height:22px;"></p>\
                                            </div>\
                                            \
                                            <p>Mary é a protagonista de O jardim secreto, uma novela clássica inglesa do século XIX (também escrita durante a Era Vitoriana). A descrição da personagem – que aparece no <strong style="color:#ECEE57;"><em style="color:inherit;">primeiro parágrafo</em></strong> do livro – como uma pessoa feia, desagradável e desinteressante, também é proposital. Ela deixa os leitores tão curiosos que dificilmente deixamos de continuar lendo, para descobrir o que vai ocorrer com essa menina! Mesmo sendo tão “insossa”, alguma coisa deve estar para acontecer com ela, para merecer ser protagonista de um livro!</p>\
                                            \
                                            <p><strong style="color:#ECEE57;"><em style="color:inherit;">O que ocorre é que os escritores se valem de nossa curiosidade para nos arrastar livro adentro.</em></strong></p>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>2</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text3',
                                    itemID: 'text3',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p>É ela que nos leva a sentir prazer em buscar informações (ou imaginar) sobre as pessoas ou seres que os textos apresentam – quem são, como são, o que vai acontecer com elas, por que fazem o que fazem etc.</p>\
                                        \
                                        <p>Como vimos, o texto só nos pode apresentar <strong style="color:#ECEE57;"><em style="color:inherit;">parte</em></strong> dessas informações, sob pena de se estender demais e, também por ser impossível ter domínio sobre tudo o que ocorre na mente e na vida de alguém (mesmo ela sendo uma personagem de ficção).</p>\
                                        \
                                        <p>A imagem utilizada por Nodelman é a de que o que sabemos das personagens por <strong style="color:#ECEE57;"><em style="color:inherit;">intermédio do que é narrado nas histórias</em></strong> é “meramente a ponta de um iceberg de informações mais detalhadas sobre elas”.</p>\
                                        \
                                        <p>Assim, continuamos a ler porque queremos descobrir mais, preencher as “brechas” que a narrativa deixa para trás.<strong style="color:#ECEE57;"><em style="color:inherit;"> É por isso que chamar a atenção de seus alunos para as personagens de uma narrativa também é uma forma de incentivá-los a continuar lendo e descobrir muito mais sobre seus significados.</em></strong></p>\
                                        \
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>3</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text4',
                                    itemID: 'text4',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <p>Por outro lado, se todos nós adoramos tentar adivinhar, saber o que têm pela frente aqueles cuja história estamos lendo ou ouvindo, se vão resolver seus problemas e como vão reagir, é preciso tomar certo cuidado. Nossa curiosidade pode nos levar a agir como a vizinha xereta, que vê uma cena da janela e fica tentando adivinhar o resto. Isso faz parte da brincadeira de ler. Mas Nodelman adverte:</p>\
                                        \
                                        \
                                        \
                                        <div class="box-content">\
                                        \
                                            <p><strong>“Fazer adivinhações sobre personagens literárias nos permite ver como suas ações ‘batem’ com o que assumimos ser verdade sobre o comportamento humano. <em style="color:#ECEE57;">Mas, da mesma forma que a fofoca, isso tem seus perigos: pode representar erroneamente as pessoas por enquadrá-las em categorias que já temos.”</em></strong></p>\
                                        \
                                        </div>\
                                        \
                                        <p>Uma das maneiras de afastar esse “perigo”, como já vimos, é sempre retornar à leitura a cada vez que um aluno fizer deduções a partir de elementos que não estão presentes no livro. Já vimos como muitas vezes é necessário checar hipóteses e interpretações para confirmar a compreensão.</p>\
                                        \
                                        <p>Por outro lado, uma boa narrativa também pode “desconcertar” o leitor, apresentando descrições e ações inesperadas de personagens, que contrariam suas expectativas, obrigando-os a analisá-las de maneira mais crítica.</p>\
                                        \
                                        <p>Um texto literário que apresenta personagens interessantes, além de atiçar nossa curiosidade sobre os desdobramentos da narrativa, obriga-nos a nos colocar no lugar do outro, a entender as diferenças de personalidade entre as pessoas, a aumentar nossa capacidade de aceitação.</p>\
                                        \
                                        </div>\
                                        \
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>4</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text5',
                                    itemID: 'text5',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <p><strong style="color:#ECEE57;"><em>Agora é com você. Leia os trechos que serão apresentados prestando atenção às personagens.</em> </strong></p>\
                                        \
                                        <div class="box-content">\
                                        \
                                        <p style="padding-bottom:0;">1<br>\
                                        “Sempre que estava rodando, deixando o vento brincar de balão com a sua saia, a menina pensava:<br>\
                                        – Daqui a pouco eu vou pular amarelinha.\
                                        Daqui a pouco, quando estava pulando amarelinha, seu corpo pulava, mas seu pensamento continuava pensando:\
                                        – Depois, vou balançar no balanço. Quando acabar de balançar no balanço, vou botar minha boneca para dormir, vou beber água. Quando acabar de beber água, vou fazer xixi. Quando acabar de fazer xixi, vou tomar banho. Quando acabar de tomar banho, vou dormir. Quando acabar de dormir (…)”\
                                        </p>\
                                        \
                                        <p style="padding-top:0; font-size:12px; line-height:22px; text-align:right;">(FALCÃO, Adriana. “A menina que só pensava em daqui a pouco”. In: _____. Sete histórias para contar. São Paulo: Salamandra, 2013, p. 6.)</p>\
                                        \
                                        \
                                        </div>\
                                        \
                                        <p>O trecho faz parte de um conto de Adriana Falcão, de um livro em que ela apresenta personagens muito especiais, cujo comportamento estimula a discussão sobre vários aspectos da vida. </p>\
                                        \
                                        <p>Que perguntas você faria a seus alunos para ajuda-los a compreender melhor esse trecho do conto (ou o conto todo)?</p>\
                                        \
                                        </div>\
                                        \
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>5</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text6',
                                    itemID: 'text6',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        \
                                        \
                                        <div class="box-content">\
                                        \
                                        <p style="padding-bottom:0;">2<br>\
                                        “China tinha os olhinhos puxados, por isso eu passei a chamá-lo assim. No começo, minha mãe não gostou do apelido, mas com o tempo ela se acostumou.\
                                        China demorava a crescer. Eu estava louco por um companheiro. Alguém que jogasse bola comigo, com quem eu pudesse trocar figurinhas, brincar de super-herói e disputar torneios de video game (eu era ligado em video game).\
                                        Mas China era mesmo muito devagar. Tinha preguiça de sentar, nem engatinhava. Ficava só deitado, quieto. E eu esperando por ele.\
                                        Os anos foram passando. E, apesar da minha pressa, China continuava na dele, devagar e sempre. A grande diferença é que ele já andava, corria de um jeito engraçado, mas nada de falar comigo.”</p>\
                                        \
                                        <p style="padding-top:0; font-size:12px; line-height:22px; text-align:right;">(PORTELA, Miriam. Alguém muito especial. São Paulo: Moderna, 2016, pp. 4-5.)</p>\
                                        \
                                        \
                                        </div>\
                                        \
                                        <p>Assim começa o livro Alguém muito especial, de Miriam Portela, narrado em primeira pessoa por um menino que acaba de ganhar um irmãozinho. Esse bebê é um pouco diferente do que o menino imaginava, e o livro nos conta com delicadeza como o menino vai descobrindo que seu irmão é “especial”, tanto em suas necessidades quanto dentro de seu coração.</p>\
                                        \
                                        <p>Pense em algumas questões que você poderia apresentar para seus alunos para estimular sua curiosidade e capacidade de observação sobre detalhes do texto que nos ajudam a visualizar as personagens.</p>\
                                        \
                                        </div>\
                                        \
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                               
                            ]
                        }
                    ],
                    pageOverlay: [
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: '',
                            overlayContent: '<div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            \
                           \
                            \
                            </div>\
                            </div>',
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