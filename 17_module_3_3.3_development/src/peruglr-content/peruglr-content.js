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
                            <h1>Da leitura compartilhada à individual</h1>\
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
                    <p>Agora vamos abordar elementos que ajudarão você a preparar suas sessões de leitura com seus alunos.</p>\
                    \
                    <p>Partimos de sugestões para a <strong><em style="color:inherit; font-size:inherit;">leitura compartilhada</em></strong> até chegar ao momento em que você começa a solicitar que eles realizem sessões de <strong><em style="color:inherit; font-size:inherit;">leitura individuais</em></strong>, na escola ou em casa</p>\
                    \
                    <p>Escolhemos como exemplos alguns livros cuja "personalidade", como diz Chambers, permite que você use estratégias interessantes.</p>\
                    </div></div>',
                    pageCarousels: [
                        {
                            carouselLabel: '',
                            carouselID: '',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: '',
                                    itemID: '',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: ''
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
                            overlayContent: '<p>\
                            </p>',
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
                    pageCallbackMethod: 'theme.introPage()',
                    pageStatus: 'active'
                },
               

                {
                    pageTitle: '3 - A leitura de livros ilustrados',
                    pageID: 'a-leitura-de-livros-ilustrados',
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
                            carouselLabel: 'a leitura de livros ilustrados',
                            carouselID: 'a-leitura-de-livros-ilustrados',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            <h3><span>NOTA</span></h3>\
                                            <div class="box">\
                                            <p style="padding:0 0 3px"><strong style="color:inherit;">Livro ilustrado e livro-álbum</strong></p>\
                                            <p style="padding:0px 0 10px;">\
                                            Existe uma diferença (às vezes, sutil) entre <strong><em style="color:inherit; font-size:inherit;">livro ilustrado e livro-álbum</em></strong>. Alguns estudiosos dizem que um bom teste é ler o texto sem prestar atenção às ilustrações; se ele se sustenta sozinho, pode ser compreendido sem as imagens, então <strong><em style="color:inherit; font-size:inherit;">não é</em></strong> livro-álbum. Entretanto, há um tipo de livro-álbum em que texto e ilustrações são independentes, mas, juntos, criam uma terceira “camada” de leitura, mais complexa, como veremos mais à frente.\
                                            </p>\
                                            <p style="padding-bottom:0;">Por enquanto, vamos pensar assim: que, no livro-álbum, texto e ilustrações se complementam de tal forma que não é possível entender a narrativa completa se ignoramos um dos dois (como vimos com O túnel). A maior parte dos livros com pouco texto não são livros-álbum, e sim <strong><em style="color:inherit; font-size:inherit;">livros ilustrados</em></strong>, em que o texto se sustenta sem a ilustração, mas esta enriquece e complementa a leitura.</p>\
                                            </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'a-leitura-de-livros-ilustrados',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><span>Para o 1º ano</span></h3>\
                                        <div class="block-text"><p>\
                                        <strong style="color:inherit;">A Cinderela das bonecas.</strong> \
                                        Texto de Ruth Rocha, ilustrações de Mariana Massarani. \
                                        Editora Salamandra. \
                                        Impresso em letra bastão.\
                                        </p></div>\
                                        \
                                        \
                                        <div class="content-separator">\
                                            <div class="separator-top"></div>\
                                            <div class="separator-bottom"></div>\
                                        </div>\
                                        <div class="content-image">\
                                            <div class="image img-overlay" overlay="0"></div>\
                                        </div>\
                                        <div class="border-box">\
                                            <p>Era uma vez a Vovó Neném, uma senhora muito querida pelas crianças do bairro. Um dia, as meninas decidem fazer um concurso de bonecas, mas Mariana está triste, pois sua boneca está muito velha. Vovó Neném a ajuda a resolver o problema. Mas… será que a Vovó é uma fada?\
                                            </p>\
                                        </div>\
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
                                            <h3><strong style="font-size:inherit;">ANTES DA LEITURA</strong></h3>\
                                            <h4 style="margin-left:20px;"><strong style="font-size:inherit;">Prepare-se para apresentar o livro. Observe a capa:</strong></h4>\
                                            <ul class="list-cicle" style="margin-left:25px;">\
                                                <li><div></div><p><strong>Quem é autora do texto?</strong></p></li>\
                                                <li><div></div><p><strong>Quem realizou as ilustrações?</strong></p></li>\
                                                <li><div></div><p><strong>Leia as duas páginas finais do livro. Ali você vai ficar sabendo muito sobre a origem da história que vai ler, sobre Ruth Rocha e a ilustradora.</strong></p></li>\
                                            </ul>\
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
                                            <h3><strong style="font-size:inherit;">ANTES DA LEITURA</strong></h3>\
                                            <h4 style="margin-left:20px;"><strong style="font-size:inherit;">Converse com seus alunos:</strong></h4>\
                                            <ul class="list-cicle" style="margin-left:30px;">\
                                                <li><div></div><p><strong>Será que eles já conhecem Ruth Rocha? Já leram algum livro dela?</strong></p></li>\
                                                <li><div></div><p><strong>Onde está nome da autora? Com que tipo de letra ele está impresso? Por que vocês acham que ele foi impresso assim?</strong></p></li>\
                                                <li><div></div><p><strong>Onde está o nome da ilustradora? Por que vocês acham que ele aparece também na capa?</strong></p></li>\
                                                <li><div></div><p><strong>Onde está o logotipo da editora?</strong></p></li>\
                                                <li><div></div><p><strong>Que imagem aparece na capa? Quem ela representa? Por que será que ela está usando uma coroa? Por que tem um olho fechado? Ela é uma princesa ou uma boneca?</strong></p></li>\
                                            </ul>\
                                            <div style="float:right;" class="btn btn-detail ease" tela=0>\
                                                <span class="note"></span>\
                                                <p>Nota</p>\
                                            </div>\
                                        </div>\
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
                                            <h3><strong style="font-size:inherit;">ANTES DA LEITURA</strong></h3>\
                                            <h4 style="margin-left:20px;"><strong style="font-size:inherit;">Observe a quarta capa do livro.</strong></h4>\
                                            <ul class="list-cicle" style="margin-left:30px;">\
                                                <li><div></div><p><strong>Leia o texto em voz alta. Ele é um texto que você pode ler para seus alunos – ou pedir a algum deles que leia, não? Pode ser uma forma de motivá-los para a leitura.</strong></p></li>\
                                                <li><div></div><p><strong>Observe também que o livro pertence a uma série: Série Vou Te Contar!, sobre a qual há mais informações na página 39 do livro, que você já leu.  Alguém conhece outros livros da série?</strong></p></li>\
                                                <li><div></div><p><strong>Observe a ilustração da quarta capa: uma menina brincando e, ao seu lado, uma boneca velha. Será que a história é sobre a menina ou sobre a boneca? Pergunte isso a seus alunos e espere que eles façam antecipações sobre o que vão ler.</strong></p></li>\
                                                <li><div></div><p><strong>Aponte o nome da editora.</strong></p></li>\
                                                <li><div></div><p><strong>Que imagem aparece na capa? Quem ela representa? Por que será que ela está usando uma coroa? Por que tem um olho fechado? Ela é uma princesa ou uma boneca?</strong></p></li>\
                                            </ul>\
                                            \
                                        </div>\
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
                                            <h3><strong style="font-size:inherit;">ANTES DA LEITURA</strong></h3>\
                                            <h4 style="margin-left:20px;"><strong style="font-size:inherit;">Observe (e ajude seus alunos a observar) o verso da capa e a primeira página do livro.</strong></h4>\
                                            <ul class="list-cicle" style="margin-left:30px;">\
                                                <li><div></div><p><strong>A ilustradora fez uma brincadeira, misturando contos de fadas diferentes.</strong></p></li>\
                                                <li><div></div><p><strong>Pergunte a seus alunos: eles conseguem perceber que personagens ela misturou?</strong></p></li>\
                                            </ul>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            <h3><strong style="font-size:inherit;">ANTES DA LEITURA</strong></h3>\
                                            <h4 style="margin-left:20px;"><strong style="font-size:inherit;">Na página 4 estão os nomes de outras pessoas que trabalharam para que a história se tornasse um livro.</strong></h4>\
                                            <h4 style="margin-left:20px;"><strong style="font-size:inherit;">Na página 5, a história começa.</strong></h4>\
                                            <ul class="list-cicle" style="margin-left:30px;">\
                                                <li><div></div><p><strong>Apresente às crianças a Vovó Neném. Deixe que observem sua casinha, os passarinhos, o balão de fala com um assobio.</strong></p></li>\
                                                <li><div></div><p><strong>Ela parece uma pessoa alegre ou triste? Quem conhece alguém parecido com a vovó Neném?</strong></p></li>\
                                                <li><div></div><p><strong>Vamos ler a história da Vovó Neném?</strong></p></li>\
                                                <li><div></div><p><strong>Combine com as crianças que vocês vão ler a história toda e depois vão ter um espaço de tempo para conversar sobre ela.</strong></p></li>\
                                                \
                                            </ul>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
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
                            overlayContent: '<div class="vertical-align"><div class="scroll mCustomScrollbar"><div class="block-text"><p>“Vovó Neném vivia numa casinha muito clarinha, cercada de flores e de passarinhos. \
                            Ela sabia fazer as melhores balas do mundo, daquelas branquinhas que se desmancham na boca…\
                            E brigadeiros, daqueles cobertos de bolinhas coloridas, \
                            E doces de coco,\
                            E bolos fofíssimos de chocolate!\
                            Vocês já sabem por que os netinhos de Vovó Neném adoravam visitar a avó. E todas as crianças que moravam por perto se consideravam seus netos.\
                            Mas não era somente por causa dos doces gostosos que as crianças gostavam de ir à casa dela. \
                            Vovó Neném era cheia de ideias, estava sempre inventando alguma brincadeira. (…)\
                            Mas o que a Vovó fazia como ninguém era contar histórias. Não que ela contasse muito bem, não. É que era uma graça o jeito que ela contava.\
                            — Era uma vez uma menina muito bonitinha, muito boazinha, chamada Chapeuzinho Vermelho. Um dia ela ia andando pela floresta quando encontrou… encontrou… Ah! Encontrou a Bela Adormecida!\
                            As crianças riam, riam…”\
                            \
                            </p></div>\
                            \
                            <div class="content-separator">\
                                <div class="separator-top"></div>\
                                <div class="separator-bottom"></div>\
                            </div>\
                            <div class="content-image">\
                                <div class="image img-overlay" overlay="0"></div>\
                            </div>\
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
                    pageTitle: '4 - A leitura de livros ilustrados pt.2',
                    pageID: 'a-leitura-de-livros-ilustrados-pt2',
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
                            carouselLabel: 'a leitura de livros ilustrados pt2',
                            carouselID: 'a-leitura-de-livros-ilustrados-pt2',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                           <h3><strong style="font-size:inherit;">DURANTE A LEITURA</strong></h3>\
                                            \
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>Comece a ler, buscando usar a entonação correta para as falas e expressar as emoções que o texto contém.</strong></p></li>\
                                                <li><div></div><p><strong>Pare em alguns momentos para mostrar as imagens e checar se sua audiência está atenta.</strong></p></li>\
                                                \
                                            </ul>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'a-leitura-de-livros-ilustrados-pt2',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>DEPOIS DA LEITURA</strong></h3>\
                                        <p style="margin-left: 30px">\
                                        Você deve ter observado, ao assistir o vídeo, que uma sessão de leitura deve durar no máximo uma hora, ou um pouco mais, com alunos maiores.\
                                        Deve ter observado também que não é possível “esgotar” a interpretação de um livro em uma só leitura, quer porque as interpretações são muitas e variadas, quer também porque, como já vimos, a cada retorno que fazemos ao texto aprofundamos um pouco mais o conhecimento que temos dele.\
                                        Assim, você, que conhece seus alunos, é a melhor pessoa para ter ideia de que aspectos seriam interessantes comentar com eles na <strong>roda de leitores</strong>.\
                                            </p>\
                                        </div>\
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
                                            <h3><strong>DEPOIS DA LEITURA</strong></h3>\
                                            <div style="margin-left: 30px">\
                                            <p>Aqui vão algumas sugestões:</p>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>O uso de balões de fala no decorrer do texto. Seus alunos conseguem identificar que eles representam falas?</strong></p></li>\
                                                <li><div></div><p><strong>Onde costumamos encontrar esses balões?*</strong></p></li>\
                                                \
                                            </ul>\
                                            <p style="margin-left:30px;" class="small-text">*Em histórias em quadrinhos.</p>\
                                            </div>\
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
                                            <h3><strong style="font-size:inherit;">DEPOIS DA LEITURA</strong></h3>\
                                            <div class="separator-colum">\
                                            <div class="colum-left">\
                                            <h4><span>Nas páginas 8 e 9.</span></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>As crianças podem querer reconhecer e comentar as brincadeiras que aparecem ali. Alguém conhece alguma delas?</strong></p></li>\
                                            </ul>\
                                            \
                                            <h4><span>Nas páginas 10 a 13.</span></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>Vovó Neném gostava de misturar histórias. Que histórias ela misturou? Alguém conhece essas histórias?</strong></p></li>\
                                                <li><div></div><p><strong>Se a sua turma for conhecedora de contos de fadas, eles vão adorar encontrar essas contradições.</strong></p></li>\
                                            </ul>\
                                            </div>\
                                            \
                                            <div class="colum-right">\
                                            <h4><span>Nas páginas 14 a 19.</span></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>Como é uma festa de bonecas?</strong></p></li>\
                                                <li><div></div><p><strong>Por que Mariana estava triste?</strong></p></li>\
                                            </ul>\
                                            \
                                            <h4><span>Nas páginas 20 a 23.</span></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>Observaram a fala da Vovó Neném na página 21? O que será que ela quis dizer?</strong></p></li>\
                                                <li><div></div><p><strong>Ela consegue ajudar a Mariana?</strong></p></li>\
                                            </ul>\
                                            </div></div>\
                                            \
                                        </div>\
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
                                        <div class="separator-colum">\
                                        <div class="colum-left">\
                                        <h4><span>Nas páginas 24 a 29.</span></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Como ficou a boneca?</strong  ></p></li>\
                                        </ul>\
                                        \
                                        <h4><span>Nas páginas 30 a 35.</span></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Quem pediu para o Beto consertar o carrinho de boneca de Mariana?*</strong    ></p></li>\
                                        </ul>\
                                        <p style="margin-left:30px;" class="small-text">*Algumas crianças podem não perceber imediatamente que aquilo foi uma surpresa da Vovó Neném.</p>\
                                        </div>\
                                        \
                                        <div class="colum-right">\
                                        <h4><span>Nas páginas 36 e 37.</span></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Por que Mariana deu à sua boneca o nome de Cinderela?</strong></p></li>\
                                            <li><div></div><p><strong>Vocês descobriram por que o livro se chama <em style="color:#edeb64;">A Cinderela das bonecas?</em></strong></p></li>\
                                            <li><div></div><p><strong>Finalmente, mostre a todos a imagem da página 38 e faça-os notar que ali está escrito FIM.</strong></p></li>\
                                            <li><div></div><p><strong>Em conjunto com seus alunos, recapitule a história inteira, para ver se ficaram lacunas na compreensão.</strong></p></li>\
                                            <li><div></div><p><strong>Se só você tiver o livro em mãos, passe-o pela turma, para que eles possam observar as ilustrações de perto.</strong></p></li>\
                                        </ul>\
                                        \
                                        \
                                       \
                                        </div></div>\
                                        <div class="legend"><p class="small-text">Você encontra mais sugestões de atividades com este livro no site da editora. Acesse pelo link:</p><div class="click"></div></div>\
                                        \
                                        </div>\
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
                                        <h3><strong>SUGESTÃO PARA LEITURA PELOS PRÓPRIOS ALUNOS</strong></h3>\
                                       \
                                        <p>Caso você disponha de um exemplar para cada criança ou para cada dupla, você pode iniciar, em seguida, uma sessão de leitura silenciosa individual ou de leitura em duplas. \
                                        </p>\
                                        \
                                        <p>Neste caso, você pode ir circulando entre os alunos, para auxiliar em momentos de dificuldade.\
                                        </p>\
                                            \
                                        <p>Se dispuser apenas de um exemplar, você pode ir passando o livro entre as crianças, para que cada um leia um trecho em voz alta. Após a leitura, você pode recapitular, em grupo, a história que foi lida.\
                                        </p>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <div class="block-text"><p>\
                                        <strong style="color:inherit;">Era uma vez uma bruxa.</strong> \
                                        Texto de Lia Zatz, ilustrações de Marcelo Cipis. \
                                        Editora Moderna.\
                                        </p></div>\
                                        \
                                        \
                                        <div class="content-separator">\
                                            <div class="separator-top"></div>\
                                            <div class="separator-bottom"></div>\
                                        </div>\
                                        <div class="content-image">\
                                            <div class="image"></div>\
                                        </div>\
                                        <div class="border-box">\
                                            <p>Esta é uma história escrita em forma de carta enigmática. A bruxa Meleca se cansa de viver na floresta e sai em busca de novas aventuras. De repente, entra numa nuvem escura e descobre a cidade grande. Será que ela vai ser feliz ali?\
                                            </p>\
                                        </div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text8',
                                    itemID: 'text8',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <p>\
                                        Um livro muito interessante para ler de forma compartilhada com crianças em fase de alfabetização. Trata-se de uma carta enigmática, como você pode ver pela imagem abaixo. Seu texto está em letra bastão e vem intercalado com imagens cujo sentido as crianças precisam desvendar. Seus alunos vão se divertir!\
                                        </p>\
                                        \
                                        \
                                        \
                                        <div class="content-image">\
                                            <div class="image"></div>\
                                        </div>\
                                        <div style="float:right; display:inline-block; width:65%;">\
                                            <p>Você pode ler este livro de forma compartilhada, seguindo as fases sugeridas por Isabel Solé: <strong><em style="color:inherit;">antes, durante</em></strong> e <strong><em style="color:inherit;">depois da leitura</em></strong>. Você encontra essas sugestões e outras informações sobre o livro no site da editora. \
                                            </p>\
                                            \
                                            <div class="legend" style="text-align:left;"><p>Acesse pelo link:</p><div class="click"></div></div>\
                                        </div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>8</p>'
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
                            overlayContent: '<p>\
                            </p>',
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
                    pageTitle: '5 - A leitura de livros ilustrados pt.3',
                    pageID: 'a-leitura-de-livros-ilustrados-pt3',
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
                            carouselLabel: 'a leitura de livros ilustrados pt3',
                            carouselID: 'a-leitura-de-livros-ilustrados-pt3',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            <h3><strong>SUGESTÃO PARA LEITURA PELOS PRÓPRIOS ALUNOS</strong></h3>\
                                        \
                                            <p>Caso você disponha de um exemplar para cada criança ou para cada dupla, você pode iniciar, em seguida, uma sessão de leitura silenciosa individual ou de leitura em duplas. Neste caso, você pode ir circulando entre os alunos, para auxiliar em momentos de dificuldade. \
                                            </p>\
                                            \
                                            <p>Se dispuser apenas um exemplar, você pode ir passando o livro entre as crianças, para que cada um leia um trecho em voz alta. Após a leitura, você pode recapitular, em grupo, a história que foi lida.\
                                            </p>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'a-leitura-de-livros-ilustrados-pt3',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>Para 2º e 3º anos</strong></h3>\
                                        <div class="block-text"><p>\
                                        <strong style="color:inherit;">Tem uma janela na minha boca.</strong> Texto de Blandina Franco, ilustrações de José Carlos Lollo. Editora Salamandra.\
                                        </p></div>\
                                        \
                                        \
                                        <div class="content-separator">\
                                            <div class="separator-top"></div>\
                                            <div class="separator-bottom"></div>\
                                        </div>\
                                        <div class="content-image">\
                                            <div class="image"></div>\
                                        </div>\
                                        <div class="border-box">\
                                            <p>Após perder um dente, Maria Fernanda começa a disparar umas verdades por aí. Também pudera! Sua mãe falou que ela tem uma janela na boca, então todas as verdades estavam livres, leves e soltas. Quer dizer, nem tão leves assim. Maria Fernanda vai aprender que tem certas coisas que não podem escapar pela janelinha!\
                                            </p>\
                                        </div>\
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
                                            <h3><strong>ANTES DA LEITURA</strong></h3>\
                                            <div style="margin-left:30px;"><h4><strong style="color:#fff;">Converse com seus alunos, mostre a capa do livro, e incentive-os a fazer antecipações.</strong></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>Da forma como os nomes dos autores aparecem na capa, é possível saber que escreveu o texto e quem fez as ilustrações?*</strong></p></li>\
                                                <li><div></div><p><strong>Será que seus alunos já conhecem essa dupla de autores? Já leram algum livro deles?</strong></p></li>\
                                                \
                                                <li><div></div><p><strong>A capa tem um recorte que imita uma janela. Por que será? De que janela será que a história fala?</strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Quem será essa menina que parece na janelinha da capa?</strong></p></li>\
                                                <li><div></div><p><strong>Onde está o logotipo da editora?</strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Leia a quarta capa em voz alta: por que será que é estranha assim?**</strong></p></li>\
                                            </ul>\
                                            <div style="width:625px; float:right;"><p class="small-text">* Não. É preciso ler a biografia dos autores, na página 47, para saber   \
                                            que Blandina escreve e Lollo desenha.</p>\
                                            <p class="small-text">** Trata-se de uma brincadeira dos autores: como se fossem crianças\
                                            vendo o livro numa livraria.</p></div></div>\
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
                                            <h3><strong style="font-size:inherit;">DURANTE A LEITURA</strong></h3>\
                                            <div class="separator-colum">\
                                            <div class="colum-left">\
                                            <h4><strong style="color:#fff;">Observe (e ajude seus alunos a observar) a primeira página do livro.</strong></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>A menina que aparece na capa está mesmo numa janela.</strong></p></li>\
                                            </ul>\
                                            \
                                            <h4><strong style="color:#fff;">Na página 2 estão os nomes de outras pessoas que trabalharam para que a história se tornasse um livro.</strong></h4>\
                                            <h4><strong style="color:#fff;">Mostre a eles a página 3.</strong></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>O que aparece nesta ilustração? Por que será que tem um dente pulando, correndo?</strong></p></li>\
                                                <li><div></div><p><strong>Explique que esta página, que se chama “frontispício” ou “página de rosto” do livro, repete quase todas as informações da capa. É aí que o livro começa.</strong></p></li>\
                                            </ul>\
                                            </div>\
                                            \
                                            <div class="colum-right">\
                                            <h4><strong style="color:#fff;">Na página 4, a história começa.</strong></h4>\
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>Leia a primeira frase e mostre a ilustração de Maria Fernanda.</strong></p></li>\
                                                <li><div></div><p><strong>Vamos saber o que aconteceu com ela?</strong></p></li>\
                                            \
                                                <li><div></div><p><strong>Combine com as crianças que vocês vão ler a história toda e depois vão ter um espaço de tempo para conversar sobre ela.</strong></p></li>\
                                                <li><div></div><p><strong>Comece a ler, buscando usar a entonação correta para as falas e expressar as emoções que o texto contém.</strong></p></li>\
                                            </ul></div>\
                                            </div>\
                                            \
                                        </div>\
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
                                        <h3><strong style="font-size:inherit;">DEPOIS DA LEITURA</strong></h3>\
                                        <div style="margin-left:30px;">\
                                        <h4><strong style="color:#fff;">Aqui vão algumas sugestões de perguntas para iniciar a roda de leitores:</strong></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong style="color:#fff;">Vocês entenderam o que aconteceu com a Maria Fernanda?</strong></p></li>\
                                            <li><div></div><p><strong style="color:#fff;">Vocês se lembram quando caiu seu primeiro dente? Como se sentiram?</strong></p></li>\
                                            \
                                            <li><div></div><p><strong style="color:#fff;">Vamos ver o que aconteceu na cabeça da Maria Fernanda?</strong></p></li>\
                                        </ul>\
                                        \
                                        <h5><strong style="color:#fff;">Observe que livro quase todo apresenta uma página de texto “espelhada” com uma de ilustração. Em quase todas as ilustrações há alguma coisa importante a notar para compreender o que se passa na cabeça de Maria Fernanda:</strong>\
                                        </h5>\
                                        </div>\
                                        </div>\
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
                                        <h3><strong style="font-size:inherit;">DEPOIS DA LEITURA</strong></h3>\
                                       <div class="separator-colum">\
                                        <div class="colum-left">\
                                        <h4><strong>Página 7:</strong></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Chame a atenção para a mão da mãe, aparando o dente que caiu. O que será que isso quer dizer?</strong></p></li>\
                                            <li><div></div><p><strong>Por que há uma mamadeira caindo também?</strong></p></li>\
                                        </ul>\
                                        \
                                        <h4><strong>Páginas 12 a 27:</strong></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Repasse com eles o texto e a ilustração dessas páginas, para conferir se acompanharam a confusão que aconteceu na cabeça da menina.</strong></p></li>\
                                        </ul>\
                                        </div>\
                                        \
                                        <div colum-right>\
                                        <h4><strong>A partir da página 28:</strong></h4>\
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>O que Maria Fernanda começou a achar?</strong></p></li>\
                                            <li><div></div><p><strong>O que aconteceu com Maria Fernanda então? A ideia dela deu certo?</strong></p></li>\
                                            <li><div></div><p><strong>Como a história termina?</strong></p></li>\
                                            \
                                            <h5><strong style="color:#fff;">Assim que se certificar de que todos compreenderam a narrativa, lance a pergunta:</strong></h5>\
                                            <li><div></div><p><strong>O que vocês acham: a gente pode falar tudo aquilo que vem em nossa cabeça?</strong></p></li>\
                                        </ul></div>\
                                        </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>SUGESTÃO PARA LEITURA PELOS PRÓPRIOS ALUNOS</strong></h3>\
                                        \
                                            <p>Caso você disponha de um exemplar para cada criança ou para cada dupla, você pode iniciar, em seguida, uma sessão de leitura silenciosa individual ou de leitura em duplas. Neste caso, você pode ir circulando entre os alunos, para auxiliar em momentos de dificuldade. \
                                            </p>\
                                            \
                                            <p>Se dispuser apenas um exemplar, você pode ir passando o livro entre as crianças, para que cada um leia um trecho em voz alta. Após a leitura, você pode recapitular, em grupo, a história que foi lida.\
                                            </p>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text8',
                                    itemID: 'text8',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>NOTA</strong></h3>\
                                        <div style="border:1px solid #fff; padding:0px 12px">\
                                        <p>\
                                        <strong>Sobre a leitura de livros ilustrados</strong>\
                                        </p>\
                                        <p>Quando estiver lendo livros ilustrados, lembre-se:\
                                        No caso de só você ter o livro em mãos, leia sempre de forma que eles possam observar as ilustrações.\
                                        No caso de todos os alunos terem o livro em mãos, pare nos momentos significativos para reverem juntos as imagens, recapitularem o que já leram e o que compreenderam (ou não) da história.\
                                        \
                                        </p>\
                                        </div>\
                                        \
                                        \
                                        \
                                       \
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>8</p>'
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
                            overlayContent: '<p>\
                            </p>',
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
                    pageTitle: '6 - A leitura de livros-álbum',
                    pageID: 'a-leitura-de-livros-album',
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
                            carouselLabel: 'a leitura de livros album',
                            carouselID: 'a-leitura-de-livros-album',
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
                                       \
                                        <div class="block-text"><p>\
                                        <strong style="color:inherit;">Marilu. </strong><br>\
                                        Texto e ilustrações de Eva Furnari. \
                                        Editora Moderna.\
                                        </p></div>\
                                        \
                                        \
                                        <div class="content-separator">\
                                            <div class="separator-top"></div>\
                                            <div class="separator-bottom"></div>\
                                        </div>\
                                        <div class="content-image">\
                                            <div class="image"></div>\
                                        </div>\
                                        <div class="border-box">\
                                            <p>Marilu acha tudo chato e sem graça. Anda sempre aborrecida em seu mundo sem cor, até que, certo dia, vê uma garota carregando uma lanterna de papel multicolorida. Decide então comprar uma igual. Seu brinquedo, porém, logo começa a ficar cinza… Marilu volta à loja para reclamar, mas acaba descobrindo que o problema não está nas coisas, mas em sua maneira de olhar…\
                                            </p>\
                                        </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'a-leitura-de-livros-album',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <p>Neste livro, Eva Furnari utiliza as cores de uma forma muito expressiva. É por isso que texto e imagem precisam ser lidos em conjunto. Ajude seus alunos a observarem o uso do cinza para representar o mau humor e Marilu em contraste com a vida engraçada dos Pimpolhos. Você pode realizar com seus alunos uma leitura compartilhada muito divertida. Você encontra sugestões de atividades para antes, durante e depois da leitura no site da editora. </p>\
                                        <div class="legend" style="text-align:left;"><p>Acesse pelo link:</p><div class="click"></div></div>\
                                        \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Terminada a leitura, caso só você disponha do livro, passe pela turma inteira para que eles possam apreciar as ilustrações e fazer comentários ou perguntas. Se todos os alunos dispuserem de um exemplar, ou mesmo se houver exemplares suficientes para leituras em grupo, incentive-os a fazer mais uma leitura do livro, agora por conta própria. Enquanto isso, você vai passando pelas crianças, ajudando-as quando for preciso.</strong></p></li>\
                                        </ul>\
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
                                            <div class="block-text"><p>\
                                            <strong style="color:inherit;">Longe.</strong><br>\
                                            Texto de Silvana Tavano e ilustrações de María Wernicke. Editora Salamandra.\
                                            </p></div>\
                                            \
                                            \
                                            <div class="content-separator">\
                                                <div class="separator-top"></div>\
                                                <div class="separator-bottom"></div>\
                                            </div>\
                                            <div class="content-image">\
                                                <div class="image"></div>\
                                            </div>\
                                            <div class="border-box">\
                                                <p>Carros, navios e aviões transportam gente para longe – cidades distantes, países que ficam do outro lado do mundo. Mas… e quando Longe fica além de onde qualquer um deles pode nos levar? Só a imaginação é capaz de viajar sem limites até o lugar onde mora a saudade.\
                                                </p>\
                                            </div>\
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
                                        <p>Nesta narrativa poética, o texto e as ilustrações caminham juntos, levando os leitores a penetrar no mundo interno de uma criança que busca o pai, que morreu ou se foi. Trata-se de um verdadeiro livro-álbum, em que as imagens complementam e acentuam a saudade do protagonista. </p>\
                                        <p>Você encontra sugestões de atividades para antes, durante e depois da leitura no site da editora. </p>\
                                        <div class="legend" style="text-align:left;"><p>Acesse pelo link:</p><div class="click"></div></div>\
                                        \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Terminada a leitura, caso só você disponha do livro, passe pela turma inteira para que eles possam apreciar as ilustrações e fazer comentários ou perguntas. Se todos os alunos dispuserem de um exemplar, ou mesmo se houver exemplares suficientes para leituras em grupo, incentive-os a fazer mais uma leitura do livro, agora por conta própria. Enquanto isso, você vai passando pelas crianças, ajudando-as quando for preciso.</strong></p></li>\
                                        </ul>\
                                            \
                                        </div>\
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
                                        <div class="block-text"><p>\
                                        <strong style="color:inherit;">Sam e Dave cavaram um buraco.</strong><br>\
                                        Mac Barnett e Jon Klassen. Editora Salamandra. Tradução de Janette Tavano.\
                                        </p></div>\
                                        \
                                        \
                                        <div class="content-separator">\
                                            <div class="separator-top"></div>\
                                            <div class="separator-bottom"></div>\
                                        </div>\
                                        <div class="content-image">\
                                            <div class="image"></div>\
                                        </div>\
                                        <div class="border-box">\
                                            <p>Todas as crianças adoram cavar buracos. Sam e Dave decidiram cavar fundo, fundo, bem fundo… Até que encontraram algo muito especial!\
                                            </p>\
                                        </div>\
                                        \
                                        </div>\
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
                                        <p>Este também é um livro-álbum divertido, feito em dupla por dois grandes artistas. Nele os dois amigos (acompanhados de um cachorro e observados atentamente por um gato), decidem, numa bela segunda-feira, cavar um buraco ao lado de uma macieira. Decidem que não vão parar de cavar até encontrar algo de especial. E cavam, cavam e cavam, enquanto as ilustrações mostram que estão passando (sem notar) por perto de diamantes – cuja existência só o cachorro parece capaz de pressentir. Continuam sempre cavando, juntos ou sozinhos, mudam de direção, mas nunca encontram nada de especial (embora os diamantes, cada vez maiores, estejam sempre por ali, bem perto). Até que se cansam e acabam dormindo. Mas o cachorro não para de cavar, e os três acabam caindo num buraco sem fundo e, por fim, num chão macio – o que que os leva à conclusão de que viveram algo especial.  </p>\
                                        <p>No final, estão de volta em casa…  Será? Novamente o cãozinho, o gato (o mesmo gato?) e outros detalhes vão fazer o leitor pensar. É preciso dar tempo para as crianças observarem muito bem as ilustrações. Dificilmente elas vão chegar a um consenso sobre o que aconteceu ali. Essa é a parte mais divertida da brincadeira criada por Mac e Jon.</p>\
                                        <p>Você encontra sugestões de atividades para antes, durante e depois da leitura no site da editora. </p>\
                                        <div class="legend" style="text-align:left;"><p>Acesse pelo link:</p><div class="click"></div></div>\
                                        \
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            <p>Entretanto, gostaríamos de chamar sua atenção para detalhes das ilustrações que podem passar despercebidos, na hora da <strong><em>roda de leitores.</em></strong></p>\
                                            \
                                            <h4><strong>Página 1:</strong></h4>\
                                            \
                                            <div style="margin-left:30px;"><ul class="list-cicle">\
                                            <li><div></div><p><strong>Observe que a página mostra unicamente uma macieira. O que teria ela a ver com o buraco que Sam e Dave cavaram?</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Nas páginas 3 e 4, os dois estão saindo de uma casa que tem um catavento em forma de galo. Na varanda, há um vaso com uma tulipa e, sentado no degrau, um gato de coleira laranja os observa partir. Lá está de novo a macieira. É ao lado dela que os dois vão cavar seu buraco.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>No decorrer do texto, a narrativa segue, aparentemente alheia ao que acontece nas ilustrações. Chame a atenção de seus alunos para isso: apesar de estarem sempre tão perto de diamantes e nem eles nem o narrador parecem perceber nada.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Observe, na página 40, a forma criativa como o texto e a ilustração representam a queda dos três.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Finalmente, observe as páginas finais: eles voltaram mesmo para casa? Onde está a macieira? E a flor, o gato e o cata-vento são os mesmos da casa original?</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Será que aconteceu algo muito especial com Sam e Dave e eles nem perceberam?</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Terminada a leitura, caso só você disponha do livro, passe pela turma inteira para que eles possam apreciar as ilustrações e fazer comentários ou perguntas. Se todos os alunos dispuserem de um exemplar, ou mesmo se houver exemplares suficientes para leituras em grupo, incentive-os a fazer mais uma leitura do livro, agora por conta própria. Enquanto isso, você vai passando pelas crianças, ajudando-as quando for preciso.</strong></p></li>\
                                        </ul></div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
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
                            overlayContent: '<p>\
                            </p>',
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
                    pageTitle: '7 - A leitura de textos mais longos',
                    pageID: 'a-leitura-de-textos-mais-longos',
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
                            carouselLabel: 'a leitura de textos mais longos',
                            carouselID: 'a-leitura-de-textos-mais-longos',
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
                                        <h3><span>OS CLÁSSICOS</span></h3>\
                                        <div style="margin-left:30px;"><p>Voltando a um assunto sobre o qual começamos a falar no módulo 2, uma excelente maneira de conduzir seus alunos pelos caminhos da leitura são os clássicos. No início, você pode ler para eles e, à medida em que forem adquirindo autonomia, passar para a leitura individual.</p>\
                                        <p>A seguir, detalhamos algumas sugestões.</p></div>\
                                        \
                                        <div style="float:right;" class="btn btn-detail ease" tela=0>\
                                                <span class="note"></span>\
                                                <p>Nota</p>\
                                            </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'a-leitura-de-textos-mais-longos',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        \
                                        <div class="block-text"><p>\
                                            <strong style="color:inherit;">Contos de Grimm e Contos de Andersen. </strong><br>\
                                            Histórias de Wilhelm e Jacob Grimm e de Hans Christian Andersen recontadas por Walcyr Carrasco. \
                                            Ilustrações de Alexandre Rampazzo. \
                                            Editora Moderna.\
                                            </p></div>\
                                            \
                                            \
                                            <div class="content-separator">\
                                                <div class="separator-top"></div>\
                                                <div class="separator-bottom"></div>\
                                            </div>\
                                            <div class="content-image">\
                                                <div class="image"></div>\
                                                <div class="image2"></div>\
                                            </div>\
                                            <div class="border-box">\
                                                <p>Explicando quando a situação requer, apagando-se quando cabe deixar a personagem aparecer e desempenhar seu papel, Walcyr Carrasco reconta histórias dos irmãos Grimm e de Hans Christian Andersen. As histórias foram reescritas em linguagem acessível, divertida e ágil, que deixa as personagens inteiramente à vontade diante dos leitores, sejam eles grandes e pequenos.\
                                                </p>\
                                            </div>\
                                        <p>Na leitura destes livros, compostos de vários recontos reunidos em um só volume, você pode exercitar com seus alunos <strong style="color:#fff;">os procedimentos leitores</strong>, de que falamos no <strong style="color:#fff;">módulo 1</strong>.</p>\
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
                                            <h3><span>ANTES DA LEITURA</span> </h3>\
                                            <p style="margin-left:30px;">As sugestões, incluindo as de exploração da capa, quarta capa, de incentivar os alunos a anteciparem sobre que trata o livro são as mesmas, tanto para alunos menores quanto para os maiores. </p>\
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
                                        <h4><span>Para a sua preparação:</span></h4>\
                                        \
                                        <div style="margin-left:30px;"><ul class="list-cicle">\
                                            <li><div></div><p><strong>Observe que ambos os livros possuem uma bela introdução da professora Regina Zilbermann, que contextualiza os contos na época em que foram recolhidos da tradição popular (irmãos Grimm) ou escritos (Hans Christian Andersen), além de informações sobre os autores. Essas introduções contêm informações para você preparar a apresentação dos contos para seus alunos.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Observe que as quartas capas reproduzem um pequeno trecho da respectiva introdução, que você pode ler para seus alunos para motivá-los para a leitura.</strong></p></li>\
                                        </ul>\
                                        \
                                        <div class="content-img">\
                                            <div class="image"></div>\
                                            <div class="image2"></div>\
                                        </div>\
                                            </div>\
                                        </div>\
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
                                        <h4><span>Para a sua preparação:</span></h4>\
                                        \
                                        <div style="margin-left:30px;"><ul class="list-cicle">\
                                            <li><div></div><p><strong>Leia o sumário e ajude os alunos a recuperar os conhecimentos que já têm sobre cada conto.</strong> </p></li>\
                                            \
                                            <li><div></div><p><strong>Como se trata de histórias tradicionais, pode ser que seus alunos já conheçam muitas delas. Mas você pode apresentar as desconhecidas para eles e, em seguida, pedir que escolham no Sumário (ver abaixo) a história que querem que você leia.</strong></p></li>\
                                            <li><div></div><p><strong>No caso de 1º a 3º anos, peça a um aluno para encontrar no sumário o nome do conto e a página onde se encontra; depois, peça-lhe para mostrar a todos onde encontrou. </strong></p></li>\
                                            <li><div></div><p><strong>Ler as quartas capas para se informar sobre o livro e saber utilizar o sumário são procedimentos leitores muito importantes! </strong></p></li>\
                                        </ul>\
                                        \
                                        <div class="content-img">\
                                            <div class="image"></div>\
                                            <div class="image2"></div>\
                                        </div></div>\
                                        \
                                        </div>\
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
                                        <h3><strong>DURANTE A LEITURA </strong></h3>\
                                        <h4><strong>Para 1º a 3º ano</strong></h4>\
                                        <div style="margin-left:30px;"><h4>Para os alunos ainda não totalmente alfabetizados, você pode ler um conto em voz alta.</h4>\
                                        \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Leia a narração com a entonação adequada, para que seus alunos percebam a diferença entre a voz do narrador e os diálogos. </strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Durante a leitura, observe os alunos, para ver se estão acompanhando o que você lê. Se estiverem com o livro em mãos, peça-lhes para marcarem a lápis as palavras que não conhecem.</strong></p></li>\
                                            <li><div></div><p><strong>Se não estiverem, pare nos momentos em que encontrar palavras difíceis – como já vimos – só em situações que o não conhecimento de seu significado possa dificultar a compreensão do conto. Explique a eles que na roda de leitores as palavras desconhecidas serão esclarecidas.</strong></p></li>\
                                        </ul>\
                                        </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><span>DEPOIS DA LEITURA  </span></h3>\
                                        \
                                        \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Durante a roda de leitores, ajude-os a recapitular cada passagem do conto.</strong> </p></li>\
                                            \
                                            <li><div></div><p><strong>Esclareça o que não foi compreendido e releia trechos, se for necessário, esclarecendo o sentido das palavras desconhecidas.</strong></p></li>\
                                            <li><div></div><p><strong>Ajude-os a perceber, nos próprios contos, os momentos em que o narrador que reconta as histórias interfere, dando informações ou sua opinião sobre alguma passagem. Por exemplo, na página 136, sobre a ideia dos pais de João e Maria de abandoná-los à própria soret: <em>“Francamente, não era uma ideia muito maternal. Onde já se viu a própria mãe querer abandonar os filhos na floresta?”</em>.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Ao final, peça a opinião das crianças sobre o conto. O que acharam das interferências do narrador?</strong></p></li>\
                                            <li><div></div><p><strong>É importante desenvolver esse tipo de discussão, para que eles se tornem cada vez mais leitores críticos.</strong></p></li>\
                                            <li><div></div><p><strong>Após a conversa, você pode recapitular oralmente os principais eventos do conto. Pode também ir registrando no quadro a sequência de acontecimentos, caso queira trabalhar com ela numa atividade de reescrita.</strong></p></li>\
                                        </ul>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text8',
                                    itemID: 'text8',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h4><span>Para 4º e 5º anos </span></h4>\
                                       <div style="margin-left:30px;"> <h4><strong style="color:#fff;">Para os alunos ainda não totalmente alfabetizados, você pode ler um conto em voz alta.</strong></h4>\
                                        \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Comece com os procedimentos normais para antes e durante a leitura. </strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Ao final, porém, após a roda de leitores, caso haja livros suficientes, você pode pedir para cada aluno escolher um outro conto e lê-lo silenciosamente para um outro dia em que houver roda de histórias.</strong></p></li>\
                                            <li><div></div><p><strong>Nesse dia, cada aluno relata para os colegas o conto que leu (no caso de dois ou mais escolherem o mesmo, eles dividem o relato).</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Ao final, na roda de leitores, todos discutem os contos lidos.</strong></p></li>\
                                        </ul>\
                                            \
                                            <h4><strong style="color:#fff;">Você encontra mais sugestões de atividades para antes, durante e depois da leitura no site da editora.</strong></h4> \
                                            <div class="legend" style="text-align:left;"><p><strong>Acesse pelo link:</strong></p><div class="click"></div></div></div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>8</p>'
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
                            overlayContent: '<p>\
                            </p>',
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
                    pageTitle: '8 - Outras leituras de clássicos',
                    pageID: 'outras-leituras-de-classicos',
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
                            carouselLabel: 'a leitura de livros album',
                            carouselID: 'outras-leituras-de-classicos',
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
                                        \
                                        <p>O livro Peter Pan, ou Peter Pan e Wendy é outro clássico presente no imaginário de todos nós. Escrito durante a Era Vitoriana na Inglaterra, o texto era inicialmente uma peça de teatro, pois seu autor, James M. Barrie, era escritor de teatro.\
                                        O livro original já foi recontado por vários escritores, incluindo Monteiro Lobato. A seguir, apresentamos sugestões de trabalho com duas versões: a recriação da novela por Pedro Bandeira e a tradução do texto original, por Ana Maria Machado.\
                                        </p>\
                                        \
                                        <div style="text-align:center;"><div style="margin: auto;left: 0;right: 0;" class="btn btn-detail ease" tela=0>\
                                                <span class="note"></span>\
                                                <p>Nota</p>\
                                            </div></div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'outras-leituras-de-classicos',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><span>Para o 4º ano</span></h3>\
                                        <div class="block-text"><p>\
                                            <strong style="color:inherit;">Peter Pan. </strong><br>\
                                            Recriação da obra de James Barrie. Texto de Pedro Bandeira, ilustrações de Robson Araújo. Editora Moderna.\
                                            </p></div>\
                                            \
                                            \
                                            <div class="content-separator">\
                                                <div class="separator-top"></div>\
                                                <div class="separator-bottom"></div>\
                                            </div>\
                                            <div class="content-image">\
                                                <div class="image"></div>\
                                               \
                                            </div>\
                                            <div class="border-box">\
                                                <p>Pedro Bandeira é um exímio contador de histórias. Sua “recriação” de Peter Pan é mais simples que a versão original e, por isso mesmo, excelente para introduzir seus alunos no mundo das personagens inesquecíveis que povoam a Terra do Nunca.\
                                                Este livro faz parte de uma série de recontos realizados por Pedro Bandeira: “Série Deixa que Eu Conto”.\
                                                </p>\
                                            </div>\
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
                                            \
                                            <p><strong>Você encontra as sugestões completas de atividades no site da editora.</strong> </p>\
                                            \
                                            <div class="legend" style="text-align:left;"><p><strong>Acesse pelo link:</strong></p><div class="click"></div></div>\
                                            \
                                            <ul class="list-cicle">\
                                                <li><div></div><p><strong>As atividades apresentadas no site são bem completas, e abrangem as três fases sugeridas por Isabel Solé.<strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Apenas para complementar, sugerimos que você comece lendo o primeiro capítulo e, em seguida, deixe que um aluno leia o segundo, outro o terceiro, assim consecutivamente, mesmo que não realize toda a leitura no mesmo dia.<strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Você pode também ler um capítulo na hora do conto e pedir aos alunos que leiam alguns capítulos em casa.<strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Nesse caso – ou no caso de o livro ser lido em diferentes dias – comece a atividade recapitulando oralmente os eventos dos capítulos anteriores.<strong></p></li>\
                                                \
                                                <li><div></div><p><strong>E, finalmente, não se esqueça de explorar bem o Sumário, ensinando seus alunos a usá-lo adequadamente, assim como o <em style="color:#EDEB64;">marcador de livros.</em><strong></p></li>\
                                            </ul>\
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
                                        <h3><span>Para o 5º ano</span></h3>\
                                        <div class="block-text"><p>\
                                            <strong style="color:inherit;">Peter Pan. </strong><br>\
                                            Texto de James Barrie, ilustrações de Fernando Vicente. Tradução de Ana Maria Machado. Editora Salamandra.\
                                            </p></div>\
                                            \
                                            \
                                            <div class="content-separator">\
                                                <div class="separator-top"></div>\
                                                <div class="separator-bottom"></div>\
                                            </div>\
                                            <div class="content-image">\
                                                <div class="image"></div>\
                                               \
                                            </div>\
                                            <div class="border-box">\
                                                <p>Esta é a versão integral da história do menino que não podia crescer: a oportunidade para conhecer de perto e se encantar com personagens inesquecíveis como Peter Pan, o Capitão Gancho, Wendy e seus irmãos e os Meninos Perdidos da Terra do Nunca.\
                                                </p>\
                                            </div>\
                                            \
                                        </div>\
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
                                        <h3><strong>ANTES DA LEITURA </strong></h3>\
                                        \
                                        <h4><strong>Prepare-se para apresentar o livro. </strong></h4>\
                                        <ul class="list-cicle">\
                                            <li style="margin-right:55px;"><div></div><p><strong>Comece buscando informações relevantes sobre o livro e o autor. No link abaixo, você encontra, no site da editora, um material com informações sobre o autor, a obra e sugestões de trabalho:</strong></p><span class="click"></span></li>\
                                        </ul>\
                                        \
                                        <h3><strong>DURANTE A LEITURA</strong></h3>\
                                        \
                                        <p><strong>O encarte tem sugestões detalhadas de como apresentar o livro e para como <em style="color:#EDEB64;">atuar durante</em> a leitura.</strong></p>\
                                        \
                                        </div>\
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
                                        <h3><strong>DEPOIS DA LEITURA </strong></h3>\
                                        <p style="margin-left:30px;"><strong>É para este momento que gostaríamos de detalhar alguns outros elementos que você pode colocar em discussão com seus alunos após a leitura de cada capítulo, deixando as perguntas mais generalizantes sugeridas pelo encarte para o final da leitura do livro todo.</strong></p>\
                                        \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>No capítulo 1  </strong></h3>\
                                        \
                                        \
                                        <ul class="list-cicle">\
                                            \
                                            \
                                            <li><div></div><p><strong>Seus alunos podem estranhar os comentários do autor sobre a discussão entre o casal sobre se iam ou não ficar com Wendy, quando a senhora Darling descobriu que ia ter um bebê. Explique para eles que a história ocorre durante a chamada Era Vitoriana (ver NOTA), o longo período durante o qual reinou a Rainha Vitória na Inglaterra. Neste período, a pobreza na Inglaterra era extrema, o que explica também o fato de a empregada Liz (página 13) ser tão pequena: ela era com certeza uma criança que havia mentido a idade para poder trabalhar.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>Explique também que o narrador da história é muito irônico e gosta de explorar situações meio absurdas. Observe quando ele conta sobre a cadela Naná como babá das crianças (a partir da página 11). Com toda certeza, o narrador está brincando em muitos momentos, e isso cria um clima no livro que nos prepara para a viagem à Terra do Nunca que vamos fazer com as crianças.</strong></p></li>\
                                        </ul>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text8',
                                    itemID: 'text8',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <div>\
                                        \
                                            <ul class="list-cicle" style="width:65%; max-width:680px; display:inline-block;">\
                                                <li><div></div><p><strong>Nesse sentido, releia com eles o trecho que fala sobre o “mapa da cabeça de uma criança”. Você pode mostrar para seus alunos um exemplo como este:</strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Observando um mapa assim, fica muito mais fácil transformar em imagens as palavras de Barrie, nas páginas 14 e 15:</strong></p></li>\
                                                \
                                                <li><div></div><p><strong>Ao final, na roda de leitores, todos discutem os contos lidos.</strong></p></li>\
                                            </ul>\
                                            <div class="image"></div>\
                                            </div>\
                                            \
                                        \
                                            \
                                            <div style="border:1px solid #fff; padding:0 12px; "><p><strong>“(…) Mas eles nunca se metem a desenhar a mente de uma criança. Não só porque é muito confusa, mas porque ela fica girando sem parar. É cheia de linhas em ziguezague, parecidas com os gráficos de temperatura. Provavelmente essas linhas são estradas da ilha. Ah, sim, porque a Terra do Nunca é, sempre, mais ou menos uma ilha, com manchas surpreendentes de cores aqui e ali (…)”</strong></p></div>\
                                            \
                                            \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Este capítulo é fundamental para conquistar seus alunos para a leitura do livro. Se eles se deixarem levar pela atmosfera de fantasia criada por Barrie vão se encantar e mergulhar no mundo das personagens da Terra do nunca.</strong></p></li>\
                                        </ul>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>8</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text9',
                                    itemID: 'text9',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>Observações sobre outros capítulos  </strong></h3>\
                                        \
                                        \
                                        <ul class="list-cicle">\
                                            <li><div></div><p><strong>Até o capítulo IV a narrativa flui bem. Você pode parar nos momentos em que encontrar algum elemento do texto para destacar, ou nas divertidas intervenções do narrador, como na página 59, em que ele garante aos leitores que “no final tudo vai dar certo e acabar bem”.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>O capítulo IV, porém, vai exigir de você um pouco mais de discussão, pois Peter fica sumindo e reaparecendo, e isso pode ser um pouco monótono para os leitores. Explique a eles que o escritor fez isso de propósito, para criar também nos leitores essa atmosfera sonolenta, que é o que “nos carrega” todos para a Terra do Nunca.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>No capítulo V, a destacar, a apresentação que Barrie faz dos personagens da ilha andando uns atrás dos outros. Essa cena tem um poder descritivo tão forte que é como se estivéssemos vendo a cena. Lembre-se que Peter Pan foi, antes de ser livro, uma peça de teatro. Essa força para criar imagens aparece em vários momentos. Você pode parar e explorar cada um deles com seus alunos, pois os recursos utilizados pelo escritor são muito ricos e darão a seus alunos exemplo muito interessantes do uso da linguagem literária.</strong></p></li>\
                                            \
                                            <li><div></div><p><strong>No mais, curta com eles a leitura desse clássico, que pode durar algumas semana, por se tratar de texto bem mais complexo que o reconto.</strong></p></li>\
                                            \
                                        </ul>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>9</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text10',
                                    itemID: 'text10',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>Observações sobre outros capítulos  </strong></h3>\
                                        \
                                        <div class="box-information">\
                                            \
                                            <div class="box-contain">\
                                            <div class="number"><p><strong>1</strong></p></div><p><strong style="color:inherit;">Todas as vezes em que organizar rodas de leitores com seus alunos, lembre-se de estimulá-los a estabelecer vínculos entre a história que leram e outras – vividas, escutadas, lidas.</strong></p>\
                                            </div>\
                                            \
                                            <div class="box-contain">\
                                            <div class="number"><p><strong>2</strong></p></div><p><strong style="color:inherit;">O mesmo vale para as emoções e sentimentos que a história provoca ou comunica – beleza, valentia, coragem, solidariedade, abandono – é muito importante dar-lhes espaço e liberdade para expressarem o que sentem.</strong></p>\
                                            </div>\
                                            \
                                            <div class="box-contain">\
                                            <div class="number"><p><strong>3</strong></p></div><p><strong style="color:inherit;">Nunca deixe de discutir as controvérsias que pode haver na interpretação do texto. Volte sempre ao livro para discuti-las, pedindo aos alunos que apontem ali a origem de sua opinião. Claro, toda história traz múltiplas interpretações. Caso não se chegue a um consenso, não se preocupe.</strong></p>\
                                            </div>\
                                            \
                                            <div class="box-contain">\
                                            <div class="number"><p><strong>4</strong></p></div><p><strong style="color:inherit;">E, por fim, mas não menos importante, lembre-se sempre de parar e reler, conversar sobre algum trecho especialmente bonito e bem escrito do livro, alguma imagem que ele suscita e outros elementos que podem ajudar seus alunos a serem bons leitores e bons escritores.</strong></p>\
                                            </div>\
                                        </div>\
                                        \
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>10</p>'
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
                            overlayContent: '<p>\
                            </p>',
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
                    pageTitle: '9 - A leitura de poesia',
                    pageID: 'a-leitura-de-poesia',
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
                            carouselLabel: 'A leitura de poesia',
                            carouselID: 'a-leitura-de-poesia',
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
                                        \
                                        <p>A poesia costuma ser um tipo de texto um tanto esquecido nas escolas brasileiras. É uma pena, pois o ritmo, o som, os jogos de palavras – todos presentes nos poemas – constituem os elementos que costumam atrair as crianças, desde bem pequenas, para a linguagem oral ou escrita.\
                                        </p>\
                                        \
                                        <p>Confirmando as palavras de Ligia Cademartori:</p>\
                                        \
                                        <div style="width:80%; margin:auto;">\
                                                \
                                                <p>"Ao promover e aprimorar a relação da criança com a linguagem, convém não perder de vista que ouvir e falar são atividades primárias, enquanto leitura e escrita são atividades básicas. As primeiras se desenvolvem espontaneamente; as segundas requerem formalização. Para passar de um tipo de atividade a outro, é preciso ter adquirido certo grau de consciência da estrutura da língua.</p>\
                                                <p>Do mesmo modo que o conhecimento da realidade exterior só se dá com a exploração dos objetos, <strong style="color:#fff;">a familiaridade com a língua requer uma etapa na qual ela seja tratada em sua materialidade. Ou seja: é preciso brincar com ela, brincar com palavras.</strong> Lembrando José Paulo Paes: “bola, papagaio, pião de tanto brincar se gastam. As palavras não. Quanto mais se brinca com elas, mais novas ficam”.</p>\
                                                \
                                                <p><strong style="color:#fff;">Nesse brincar com a língua, sua potencialidade de transmitir informações costuma ser neutralizada. Prevalece o prazer da expressão e a liberdade de composição</strong>. A atenção dirige-se aos meios, aos aspectos formais, mais do que ao fim, como acontece quando o interesse é a informação. E são muitas as formas de brincar: unindo livremente fonemas, alterando partes das palavras para conseguir efeitos novos, jogando com sentidos iguais, diferentes, pertinentes, impertinentes.</p>\
                                                <p>E há as <strong style="color:#fff;">rimas, as quadras, as cantigas, os poemas</strong>. Cito trecho de O que é literatura infantil, em que digo: ‘a poesia infantil, de início apresentada oralmente, irá, de modo gradual, possibilitar o contato da criança com seu suporte: o livro. A versificação, nessa etapa, se insere no mundo infantil como um jogo, continuidade do brinquedo com as unidades linguísticas, no qual o significado não tem primazia’. Pois o poético tem como característica fundamental a surpresa diante das relações linguísticas estabelecidas no plano da composição e do sentido.”</p>\
                                                \
                                                <p class="source"><strong>(Trecho do artigo “As narratividades”. In: Monica Correia Baptista, Rita de Cássia Freitas Coelho, Vanessa Ferraz Almeida Neves, Maria Fernanda Rezende Nunes, Patricia Corsino, Angela Rabelo Barreto, orgs. Literatura na educação infantil: Acervos, espaços e mediações. Destaques nossos. Disponível em: http://ceale.fae.ufmg.br/app/webroot/files/uploads/LEPI/Lit-EI-acervos-espacos-mediacoes.pdf )</strong></p>\
                                            </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>1</p>'
                                    }
                                },
                                {
                                    itemLabel: 'outras-leituras-de-classicos',
                                    itemID: 'text2',
                                    itemCustomClass: '',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        \
                                        <div class="scroll mCustomScrollbar">\
                                        <p>O que significa “tratar a língua em sua materialidade”? Significa explorar seus sons, seus ritmos, sua cadência. Assim, mais que se preocupar com sentido, as leituras de poemas podem ser feitas sem a preocupação de realizar alguma atividade concreta, a não ser a <strong>roda de conversa</strong>, em que cada um terá espaço para expressar sua opinião e suas emoções a respeito do texto lido e ouvido.</p>\
                                        \
                                        <p>Alguns poemas podem ser lidos por crianças ainda não completamente alfabetizadas – pois, é claro, após algumas leituras elas já decoraram parte do texto, com o auxílio das rimas. Assim, desde cedo você pode deixar seus alunos lerem poemas em voz alta para toda a turma. Algumas sessões no cantinho da leitura podem ser organizadas em forma de <strong>sarau</strong>, em que cada aluno escolhe um poema para ler para os outros.</p>\
                                        \
                                        <p>Mas há várias maneiras de levar a poesia desde muito cedo para as sessões de leitura.</p>\
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
                                            <h3><strong>Para 1º e 2º anos</strong></h3>\
                                            <h4><strong style="color:#fff;">Livros com jogos de palavras:</strong></h4>\
                                           \
                                            \
                                            <div class="content-image">\
                                            \
                                            <div class="image1"></div>\
                                            \
                                            <div class="image2"></div>\
                                            \
                                            <div class="image3"></div>\
                                            \
                                            <div class="image4"></div>\
                                            \
                                            </div>\
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
                                        \
                                        <h3><strong>Para 1º e 2º anos</strong></h3>\
                                        <h4><strong style="color:#fff;">Narrativas escritas em quadrinhas:</strong></h4>\
                                       \
                                        \
                                        <div class="content-image">\
                                        \
                                        <div class="image1"></div>\
                                        \
                                        <div class="image2"></div>\
                                        \
                                        <div class="image3"></div>\
                                        \
                                       \
                                        \
                                        </div>\
                                        \
                                    </div>\
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
                                            <h3><strong>Para 1º e 2º anos</strong></h3>\
                                            <h4><strong style="color:#fff;">Poemas</strong></h4>\
                                           \
                                            \
                                            <div class="content-image">\
                                            \
                                            <div class="image1"></div>\
                                            \
                                            <div class="image2"></div>\
                                            \
                                            <div class="image3"></div>\
                                            \
                                           \
                                            \
                                            </div>\
                                            \
                                        </div>\
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
                                            <h3><strong>Para 1º e 2º anos</strong></h3>\
                                            <h4><strong style="color:#fff;">Adivinhas, trava-línguas, parlendas e trovas:</strong></h4>\
                                           \
                                            \
                                            <div class="content-image">\
                                            \
                                            <div class="image1"></div>\
                                            \
                                            <div class="image2"></div>\
                                            \
                                           \
                                            \
                                           \
                                            \
                                            </div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>6</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text7',
                                    itemID: 'text7',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                    <div class="scroll mCustomScrollbar">\
                                        \
                                        <h3><strong>Para 1º e 2º anos</strong></h3>\
                                        <h4><strong style="color:#fff;">Adivinhas</strong></h4>\
                                       \
                                        \
                                        <div class="content-image">\
                                        \
                                        <div class="image1"></div>\
                                        \
                                        <div class="image2"></div>\
                                        \
                                       \
                                        \
                                       \
                                        \
                                        </div>\
                                        \
                                    </div>\
                                </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>7</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text8',
                                    itemID: 'text8',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                    <div class="scroll mCustomScrollbar">\
                                        \
                                        <h3><strong>Outros livros de poesia para 1º a 3º anos</strong></h3>\
                                        <h4><strong style="color:#fff;">Poemas:</strong></h4>\
                                       \
                                        \
                                        <div class="content-image">\
                                        \
                                        <div class="image1"></div>\
                                        \
                                        \
                                        </div>\
                                        \
                                    </div>\
                                </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>8</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text9',
                                    itemID: 'text9',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>Outros livros de poesia para 1º a 3º anos</strong></h3>\
                                        <h4><strong style="color:#fff;">Poesia e música:</strong></h4>\
                                       \
                                        \
                                        <div class="content-image">\
                                        \
                                        <div class="image1"></div>\
                                        \
                                        <div class="image2"></div>\
                                        \
                                        </div>\
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>9</p>'
                                    }
                                },

                                {
                                    itemLabel: 'text10',
                                    itemID: 'text10',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>Para 4º e 5º anos</strong></h3>\
                                     \
                                       \
                                        \
                                        <div class="content-image">\
                                        \
                                        <div class="image1"></div>\
                                        \
                                        <div class="image2"></div>\
                                        \
                                        <div class="image3"></div>\
                                        \
                                        <div class="image4"></div>\
                                        \
                                        <div class="image5"></div>\
                                        \
                                        <div class="image6"></div>\
                                        \
                                        <div class="image7"></div>\
                                        \
                                        <div class="image8"></div>\
                                        </div>\
                                        \
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>10</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text11',
                                    itemID: 'text11',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <h3><strong>Para 4º e 5º anos</strong></h3>\
                                        <h4><strong style="color:#fff;">Narrativa em forma de poema:</strong></h4>\
                                       \
                                        \
                                        <div class="content-image">\
                                        \
                                        <div class="image1"></div>\
                                        \
                                        \
                                        </div>\
                                        \
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>11</p>'
                                    }
                                },
                                {
                                    itemLabel: 'text12',
                                    itemID: 'text12',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                        <div class="box-content">\
                                        \
                                        <p>Apenas com uma seleção dos livros dos catálogos das Editoras Moderna e Salamandra você já pode ter uma ideia da riqueza de nossa poesia para crianças. Procure ler e levar para seus alunos também livros de poemas de:</p>\
                                        \
                                        <p style="padding:10px 0 0 20px;"><strong><em>Arnaldo Antunes</em></strong></p>\
                                        <p style="padding:0 0 0 20px;"><strong><em>Cecília Meireles</em></strong></p>\
                                        <p style="padding:0 0 0 20px;"><strong><em>Cora Coralina</em></strong></p>\
                                        <p style="padding:0 0 0 20px;"><strong><em>José Paulo Pae</em>s</strong></p>\
                                        <p style="padding:0 0 0 20px;"><strong><em>Lalau</em></strong></p>\
                                        <p style="padding:0 0 0 20px;"><strong><em>Sidônio Muralha</em></strong></p>\
                                        <p style="padding:0 0 10px 20px ;"><strong><em>Vinicius de Moraes</em></strong></p>\
                                        \
                                        <p>… e tantos outros poetas maravilhosos, que vão encher sua sala de som e alegria.</p>\
                                        \
                                       \
                                        </div>\
                                        \
                                            \
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>12</p>'
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
                            overlayContent: '<p>\
                            </p>',
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