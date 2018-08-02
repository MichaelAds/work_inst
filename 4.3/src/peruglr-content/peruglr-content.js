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
                            <h1>O texto literário como objeto de aprendizagem</h1>\
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
                                        <p>Até o momento, falamos da literatura em atividades mais livres, de leituras ou conversas realizadas no cantinho da leitura ou biblioteca de classe. Mas, é claro, para formar leitores é preciso também trabalhar com objetivos didáticos.</p>\
                                        <p>Para conversar sobre esse assunto, vamos voltar ao trabalho da professora Delia Lerner, que já citamos no Módulo 1. Segundo ela:</p>\
                                        <div class="box-content"><p style="padding-bottom:0;"><em>“Na escola (…) a leitura é antes de mais nada um objeto de ensino. Para que também se transforme num objeto de aprendizagem, é necessário que tenha sentido do ponto de vista do aluno, o que significa – entre outras coisas – que deve cumprir uma função para a realização de um propósito que ele conhece e valoriza. Para que a leitura como objeto de ensino não se afaste demasiado da prática social que se quer comunicar, é imprescindível ‘representar’ – ou ‘reapresentar’ –, na escola, os diversos usos que ela tem na vida social.”</em></p>\
                                    \
                                    <p style="padding-top:0;text-align:right; font-size:12px; line-height:22px;"><strong style="font-size:inherit;"><em style="font-size:inherit;">LERNER, Delia. Ler e escrever na escola. O real, o possível e o necessário. Porto Alegre: Artmed, 2002, p. 79-80.</em></strong></p>\
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
                                           \<p>Vamos pensar um pouco sobre algumas afirmações que Delia Lerner faz no texto e que colocamos em destaque:</p>\
                                           \
                                           <div class="contain-messenger">\
                                           <div class="box-content-bg-white btn-overlay" overlay="0"><p><strong style="color:#24A58E;">1 . O que será que ela quer dizer ao opor duas formas de encarar a leitura: como objeto de ensino e como objeto de aprendizagem?</strong></p></div>\
                                           <div class="image btn-overlay" overlay="0"></div>\
                                           </div>\
                                           \
                                           <div class="contain-messenger">\
                                           <div class="box-content-bg-white btn-overlay" overlay="1"><p><strong style="color:#24A58E;">2 . O que significa dizer que a leitura deve cumprir uma função social que o aluno conhece e valoriza?</strong></p></div>\
                                           <div class="image btn-overlay" overlay="1"></div>\
                                           \
                                           </div>\
                                           \
                                           <div class="contain-messenger">\
                                           <div class="box-content-bg-white btn-overlay" overlay="2"><p><strong style="color:#24A58E;">3 . Como fazer para “reapresentar” a leitura na escola com os diversos usos que ela tem na vida social?</strong></p></div>\
                                           <div class="image class="btn-overlay" overlay="2"></div>\
                                           \</div>\
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
                                            <p>Entretanto, como incorporar a leitura em situações didáticas desse tipo?</p>\
                                            <p>Segundo Lerner, propondo atividades que:</p>\
                                            \
                                            \
                                            <ul class="list-cicle" style="width:80%; margin:auto;">\
                                                <li><div></div><p>Proporcionem aos alunos o contato com um problema que devem resolver por si mesmos.</p></li>\
                                                <li><div></div><p>Criem situações em que o professor, embora conheça o assunto, não explica o que sabe; apenas intervém para mobilizar nos alunos o desejo de pesquisar e aprender de forma independente do desejo do professor.</p></li>\
                                            </ul>\
                                                \
                                                \
                                                <p>Há alguns tipos de <strong style="color:#ECEE57;"><em style="color:inherit;">modalidades organizativas</em></strong>, segundo Lerner, que fazem parte da rotina de sala de aula:</p>\
                                                \
                                                \
                                                <ul class="list-cicle" style="width:80%; margin:auto;">\
                                                    <li><div></div><p><strong style="color:#ECEE57;"><em style="color:inherit;">Atividades permanentes</em></strong>, que envolvam a leitura e a escrita de textos (pelos alunos e pelo professor).</p></li>\
                                                    <li><div></div><p><strong style="color:#ECEE57;"><em style="color:inherit;">Trabalho com projetos</em></strong> de leitura e escrita, criados em conjunto com os alunos.</p></li>\
                                                    \
                                                    <li><div></div><p><strong style="color:#ECEE57;"><em style="color:inherit;">Trabalho com sequências didáticas</em></strong> que promovam o domínio dos conteúdos e deem instrumentos para os alunos deles se apropriarem para uso próprio.</p></li>\
                                                    <li><div></div><p style="padding-bottom:0;"><strong style="color:#ECEE57;"><em style="color:inherit;">Espaço para atividades independentes</em></strong>, que podem ser sugeridas também pelos alunos. *</p></li>\
                                                \
                                                \
                                                </ul>\
                                            <p style="font-size:12px; text-align:right; line-height:22px; padding-top:0;"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit;">* LERNER, Delia. Op. cit.</em></strong></p>\
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
                                        <p>Mas, neste momento, vamos nos concentrar nos <strong style="color:#ECEE57;"><em style="color:inherit;">projetos</em></strong>.</p>\
                                        \
                                        <div class="box-content"><p style="padding-bottom:0;"><em>“(…) o projeto reúne algumas condições fundamentais para preservar o sentido da leitura e da escrita. A característica essencial desta modalidade é que as ações são planejadas e organizadas para conduzir a elaboração de um produto: uma antologia de contos de autor, um fascículo informativo sobre um tema de interesse, uma fita com poemas gravados, um jornal escolar ou uma página-contribuição para o jornal local, um livro de contos de diferentes gêneros escritos pelas crianças etc. Os alunos compartilham desde o princípio do propósito planejado para o projeto, que funciona como fio condutor das atividades, assegurando a continuidade. Como sabem para onde vão, os alunos podem tomar iniciativas, podem continuar com o trabalho empreendido sem depender a cada instante de indicações pontuais do professor e têm, portanto, maiores oportunidades para formarem-se como leitores e escritores autônomos.” </em></p>\
                                        <p style="font-size:12px; line-height:22px;text-align:right; padding-top:0;"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit;">LERNER, Delia. “O tempo dos projetos”. Entrevista ao jornal DIÁRIO DO GRANDE ABC, 11 de junho de 2004.</em></strong></p>\
                                        </div>\
                                        \
                                        <p>Dentro de um projeto:</p>\
                                        \
                                        <div class="box-content">\
                                            <p style="padding-bottom:0;"><em>“(…) cada situação de leitura responderá a um duplo propósito. Por um lado, um propósito didático: ensinar certos conteúdos constitutivos da prática social da leitura, com o objetivo de que o aluno possa reutilizá-los no futuro, em situações não-didáticas. Por outro lado, um propósito comunicativo relevante desde a perspectiva atual do aluno.”</em></p>\
                                            \
                                            <p style="font-size:12px; line-height:22px;padding-top:0;text-align:right;"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit;"> LERNER, Delia. Ler e escrever na escola. O real, o possível e o necessário. Porto Alegre: Artmed, 2002, p. 80. Destaques nossos.</em></strong></p>\
                                            </div>\
                                        </div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>4</p>'
                                    }
                                }
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
                               <p>O que Delia Lerner está dizendo é que, mais do que “despejar” conteúdos, os professores devem se preocupar com o envolvimento dos alunos com o objeto de ensino. Ou seja: Eu estou ensinando, mas… meu aluno está aprendendo? Até que ponto as atividades que realizo com a minha turma <strong style="color:#ECEE57;"><em style="color:inherit;">trabalham no sentido de desenvolver sua autonomia para buscar o conhecimento de que necessitam?</em></strong></p>\
                            </div>\
                        </div>',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'overlay-img',
                            overlayContent: '<div class="vertical-align">\
                            <div class="scroll mCustomScrollbar">\
                               <p>Conforme já dissemos em outros momentos, significa que, para formar leitores (e escritores), é preciso que os alunos estejam sempre o máximo possível informados sobre os objetivos da leitura que estão realizando (mesmo que seja a leitura livre, que não redunda em nenhuma atividade concreta além da roda de leitores) e que esses objetivos <strong style="color:#ECEE57;"><em style="color:inherit;">façam sentido</em></strong> para eles (leio poemas ou contos porque é agradável, ou porque estamos realizando um trabalho com esse tipo de texto na sala; leio uma matéria científica porque estamos pesquisando determinado assunto para saber mais sobre ele…).</p>\
                            </div>\
                        </div>',
                            overlayCloseButton: {
                                buttonBoxInside: false,
                                buttonCustomClass: '',
                                buttonContent: '<span></span><span></span>'},
                        },
                        
                        {
                            overlayName: '',
                            overlayID: '',
                            overlayCustomClass: 'overlay-img',
                            overlayContent: '<div class="vertical-align">\
                            <div class="scroll mCustomScrollbar">\
                               <p>Esta é, na verdade, a parte mais difícil de seu trabalho. As palavras em destaque reafirmam algo que já ressaltamos várias vezes no decorrer do curso:  que as atividades envolvendo a leitura precisam ter na escola objetivos claros, que se assemelhem o máximo possível ao seu uso na vida real. </p>\
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
                    pageTitle: '3 - Como se elabora um projeto?',
                    pageID: 'como-se-elabora-um-projeto',
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
                    <p class="sub-title"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit; color:inherit;">Como se elabora um projeto?</em></strong></p>\
                    <p>Esse tipo de trabalho exige do professor muita organização e planejamento. Mas – é claro – não será no primeiro projeto que você realizar com seus alunos que tudo vai sair às mil maravilhas.</p>\
                    \
                    <p>Além disso, há algumas dicas importantes que podem ajudar.</p>\
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
                            overlayCustomClass: 'overlay-img',
                            overlayContent: '\
                            <div class="vertical-align"><div class="scroll mCustomScrollbar"><div class="content-image">\
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
                    pageTitle: '4 - De que você precisa para organizar um projeto?',
                    pageID: 'de-que-voce-precisa-para-organizar-um-projeto',
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
                            carouselLabel: 'De que você precisa para organizar um projeto?',
                            carouselID: 'de-que-voce-precisa-para-organizar-um-projeto',
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
                                                    <p>Um <strong style="color:#ECEE57;"><em style="color:inherit;">objetivo concreto</em></strong>, que tenha ao mesmo tempo:</p>\
                                                    <div class="align-box">\
                                                        <div class="box-content">\
                                                            <ul class="list-cicle">\
                                                            <li><div></div><p >Um <strong style="color:#ECEE57;"><em style="color:inherit;">propósito comunicativo</em></strong> perseguido pelos alunos… </p></li>\
                                                            </ul>\
                                                            <p><em>“(…) uma antologia de contos de autor, um fascículo informativo sobre um tema de interesse, uma fita com poemas gravados, um jornal escolar ou uma página-contribuição para o jornal local, um livro de contos de diferentes gêneros escritos pelas crianças etc.”</em></p>\
                                                        </div>\
                                                        <div class="box-content">\
                                                            <ul class="list-cicle">\
                                                            <li><div></div><p>Um <strong style="color:#ECEE57;"><em style="color:inherit;">propósito didático</em></strong> pensado por você…</p></li>\
                                                            </ul>\
                                                            <p style="padding-bottom:0;"><em>“(…) fazer os alunos ingressarem no mundo poético, pô-los em contato com a obra de diferentes poetas, criar condições que lhes permitam avançar como leitores ‘em voz alta’…”</em></p>\
                                                            \
                                                            <p style="text-align:right; padding-top:0;"><strong style="font-size:12px;">Idem, ibidem, p. 81.</strong></p>\
                                                            \
                                                        </div>\
                                                       <div class="box-content">\
                                                            <ul class="list-cicle">\
                                                            <li><div></div><p><strong style="color:#ECEE57;"><em style="color:inherit;">Destinatários</em></strong>: alunos de outra sala, jornal da escola, crianças de alguma instituição, troca com colegas da mesma ou de outra escola…</p></li>\
                                                            </ul>\
                                                        </div>\
                                                        <div class="box-content">\
                                                            <ul class="list-cicle">\
                                                            <li><div></div><p>Uma <strong style="color:#ECEE57;"><em style="color:inherit;">sequência de atividades</em></strong>: a sequência de atividades necessária para chegar ao objetivo. Elas são previstas por você, mas devem ser discutidas e reelaboradas com os alunos no momento em que você for <strong style="color:#ECEE57;"><em style="color:inherit;">apresentar</em></strong> o projeto a eles – aliás, a <strong style="color:#ECEE57;"><em style="color:inherit;">proposição do projeto</strong> aos alunos </em><strong style="color:#ECEE57;"><em style="color:inherit;">e a discussão e elaboração de um plano de trabalho</em></strong> são sempre as primeiras atividades nessa sequência.</p></li>\
                                                            </ul>\</div>\
                                                    </div>\                                            \
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
                                        <div style="width:60%;">\
                                        <p>Podem ser realizados projetos das mais variadas naturezas e objetivos. E, em função disso, cada projeto vai mobilizar uma modalidade diferente de leitura (ler para pesquisar em livros, em jornais, ler vários textos de um autor, para conhecer seu trabalho, ler para selecionar textos…). Como ainda estamos falando da leitura literária, vamos nos concentrar em ideias para esse tipo de projeto.</p>\
                                        </div>\
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
                                            <p class="sub-title"><strong style="font-size:inherit; line-height:inherit; "><em style="font-size:inherit; line-height:inherit; color:inherit;">Um exemplo:</em></strong></p>\
                                            <p>Para que você perceba que não é tão complicado assim, clique no ícone para visualizar um projeto elaborado pelo professor Diogo Fernando dos Santos em conjunto com seus alunos do 5º ano da escola Odete Corrêa Madureira, em Pindamonhangaba, SP.</p>\
                                            <p>O objetivo do professor era trabalhar com os alunos a reescrita de contos sobre bichos, narrados em primeira pessoa. O produto final seriam textos a serem publicados num blog criado por ele e sua turma.</p>\
                                            \
                                            <p>O professor escolheu comparar contos de Clarice Lispector e Sylvia Orthof sobre bichos. No cartaz que ele elaborou em conjunto com a turma na apresentação e discussão do projeto, ele representa a sequência de atividades a serem realizadas e é fruto da discussão de todos os envolvidos.</p>\
                                            \
                                            <a target="_blank" href="https://escritoresmirins.blog/category/quem-escreve-sou-eu/"><div class="click " style="margin:auto;"></div></a>\
                                            \
                                            <p>Vale a pena ver! Por esse trabalho, o professor Diogo ganhou o prêmio Educador Nota 10 – 2017!</p>\
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
                                            <p class="sub-title"><strong style="font-size:inherit; line-height:inherit;"><em style="color:inherit;font-size:inherit; line-height:inherit;">Mais um exemplo</em></strong></p>\
                                            \<p>O projeto da <strong style="color:#ECEE57;"><em style="color:inherit;">Coletânea de Textos do Módulo 3</em></strong> do PROFA (Programa de Formação de Professores Alfabetizadores). Sua elaboração é mais completa, pois se trata de um modelo sugerido para os professores elaborarem e, depois, discutirem com seus alunos.</p>\
                                            <p>Observe bem as partes de que ele se compõe:</p>\
                                            <ul class="list-cicle" style="width:80%; margin:auto;">\
                                            <li><div style="margin-top:7px;"></div>A <strong style="color:#ECEE57;"><em style="color:inherit;">justificativa</em></strong> e os <strong style="color:#ECEE57;"><em style="color:inherit;">objetivos</em></strong> elencados pelos elaboradores do projeto.</li>\
                                            <li><div style="margin-top:7px;"></div>As <strong style="color:#ECEE57;"><em style="color:inherit;">etapas “previstas”</em></strong> – pois ainda serão discutidas com os alunos e, também, podem ser modificadas no caminho.</li>\
                                            <li><div style="margin-top:7px;"></div>O <strong style="color:#ECEE57;"><em style="color:inherit;">tempo previsto</em></strong> para a duração do projeto.</li>\
                                            </ul>\
                                            <p>Projeto elaborado pela equipe pedagógica do Instituto Avisa lá em associação com a Crecheplan. </p>\
                                            <div style="display:flex;"><p>Clique no ícone para visualizar o projeto, nas páginas 147 a 149.</p><a target="_blank" href="http://portal.mec.gov.br/seb/arquivos/pdf/Profa/col_3.pdf"><div class="click" style="margin:10px;"></div></a></div>\
                                            <p>Nesse mesmo documento há outras sugestões que você pode consultar.</p>\
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
                    pageTitle: '5 - Algumas observações importantes sobre projetos',
                    pageID: 'algumas-observacoes-importantes-sobre-projetos',
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
                            carouselLabel: 'Algumas observações importantes sobre projetos',
                            carouselID: 'algumas-observacoes-importantes-sobre-projetos',
                            carouselCustomClass: '',
                            carouselItens: [
                                {
                                    itemLabel: 'text1',
                                    itemID: 'text1',
                                    itemCustomClass:'',
                                    itemContent: '\
                                    <div class="content vertical-align">\
                                        <div class="scroll mCustomScrollbar">\
                                            <ul class="list-cicle">\
                                            <li><div></div><p>A duração depende da complexidade do conteúdo e do produto final a ser realizado e da disposição de seus alunos para se envolverem em atividades de mais curto ou longo prazo. No exemplo acima, o projeto dura alguns dias apenas; mas há projetos que podem durar dois meses ou mais. Normalmente, nos anos iniciais trabalha-se com projetos de mais curta duração.</li>\
                                            <li><div></div><p style="padding:10px 0 0px;">Um projeto não se desenvolve em torno de um tema. Ele é o <em>“(…) encadeamento de atividades e conteúdos para a elaboração de um produto, o que se faz possível ao articular propósitos didáticos e propósitos comunicativos, organizar o tempo do ensino em períodos prolongados e propiciar assim que os alunos pratiquem com continuidade a leitura e a escrita, que possam apropriar-se destas práticas com o sentido que elas têm socialmente.”</em></p></li></ul><p style="font-size:12px; line-height:22px;text-align:right; padding:0 0 10px;"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit;">LERNER, em entrevista citada.</em></strong></p>\
                                            <ul class="list-cicle">\
                                            <li><div></div><p>Não é necessário que haja integração com outras áreas para que ocorra o projeto. Ele pode dizer respeito a apenas uma disciplina.</p></li>\
                                            </ul>\
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
                                        <div class="scroll mCustomScrollbar">\
                                            <ul class="list-cicle">\
                                            <li><div></div><p>Enquanto se realiza um projeto, as atividades didáticas que Lerner chama de “habituais” continuam ocorrendo paralelamente, mesmo que sejam também atividades de leitura. Esse tipo de atividade se distingue do projeto por não visar a criação de um produto final. Ela tem como foco <em>“(…) a familiarização com um gênero ou com um autor e, em alguns casos, com o aprofundamento no conhecimento de um tema. Por exemplo: na primeira série pode haver uma atividade habitual de leitura de contos – que no começo está a cargo do professor –; na segunda série, a atividade habitual pode centrar-se na leitura de poemas, nos dois primeiros bimestres letivos e de curiosidades científicas nos dois últimos; na terceira série podemos ler no primeiro bimestre um romance e vários contos de um mesmo autor e, no segundo, textos expositivos sobre conteúdos que estamos estudando em outra área; na quarta série, nos familiarizamos com diferentes subgêneros do conto.”</em></p></li>\
                                            <li><div></div><p>Depois de finalizado o projeto, os resultados devem ser analisados criticamente, professor e sua turma: Cumpriram seus objetivos? Todas as etapas deram certo? Por quê? O que poderia ser melhorado? O objetivo é aprimorar cada vez mais a atividade, contando com um engajamento cada vez maior dos alunos.</p></li>\
                                            <div style="float:right; margin-bottom:10px" class="btn btn-detail ease btn-overlay" overlay="0">\
                                                <span class="note"></span>\
                                                <p>Nota</p>\
                                            </div>\
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
                                        <div class="scroll mCustomScrollbar" style="width:70%;"><div>\
                                            <p class="sub-title"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit; color:inherit;">Texto complementar</em></strong></p>\
                                            <p>Indicamos um texto do Programa de Formação de Professores Alfabetizadores, do Ministério da Educação, que fala sobre elementos que qualificam um bom projeto.</p>\
                                            <p>Clique no icone abaixo e acesse o texto que está disponível na página 143.</p>\
                                        </div>\
                                        <a target="_blank" href="http://portal.mec.gov.br/seb/arquivos/pdf/Profa/col_3.pdf"><div class="click" style="margin:auto;"></div></a></div>\
                                    </div>',
                                    itemNavigation: {
                                        navCustomClass: '',
                                        navContent: '<p>3</p>'
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
                            overlayContent: '<div class="vertical-align"><div class="scroll mCustomScrollbar">\
                            \
                            <p><strong>As sequências didáticas</strong></p>\
                            \
                            <p>Num artigo denominado “Um decálogo para ensinar a ler e a escrever*” os linguistas Auguste Pasquier e Joaquim Dolz definem as <strong style="color:#ECEE57;"><em style="color:inherit;">sequências didáticas</em></strong> como um trabalho organizado em forma de <strong style="color:#ECEE57;"><em style="color:inherit;">oficinas planejadas</em></strong> pelo professor com o objetivo de aprofundar com os alunos o conhecimento sobre determinado assunto. Por exemplo, sobre um determinado gênero textual, como poemas, ou determinados tipos de poema. O professor deve planejar cuidadosamente as oficinas para que haja um grau crescente de dificuldade, o que permite aos alunos irem se apropriando aos poucos do assunto estudado até chegar o mais próximo possível dos <strong style="color:#ECEE57;"><em style="color:inherit;">objetivos didáticos</em></strong> que ele projetou, levando em consideração o estágio de aprendizagem em que estão. </p>\
                            \
                            <p>Embora no texto em questão eles estejam falando principalmente sobre atividades de escrita, essas definições são apropriadas também para o trabalho mais voltado para a leitura.<br>\
                            As sequências didáticas são um pouco menos complexas que os projetos, mas são também forma interessantes de envolver seus alunos no trabalho com leitura.</p>\
                            \
                            <p style="text-align:right;"><strong style="font-size:inherit; line-height:inherit;"><em style="font-size:inherit; line-height:inherit;>Disponível em  https://www.escrevendoofuturo.org.br/arquivos/4928/um-decalogo-dolz-pasquier.pdf </em></strong></p>\
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