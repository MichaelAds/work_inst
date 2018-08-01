var theme = {

    vars: {
        directionNavigation: null
    },

    // INIT
    init: function() {
        // NAVIGATION
        $(document).on('click', '.moderna-ead .peruglr-include-footer footer .peruglr-navigation .btn-next-page', function() {
            TweenMax.to($('.moderna-ead section.page'), 0.5, { delay: 0, autoAlpha: 0, top: '-100%', ease: Power4.easeOut, onComplete: function() {
                theme.vars.directionNavigation = 'next';
                peruglr.nextPage();
            }});
        });
        $(document).on('click', '.moderna-ead .peruglr-include-footer footer .peruglr-navigation .btn-prev-page', function() {
            TweenMax.to($('.moderna-ead section.page'), 0.5, { delay: 0, autoAlpha: 0, top: '100%', ease: Power4.easeOut, onComplete: function() {
                theme.vars.directionNavigation = 'prev';
                peruglr.prevPage();
            }});
        });

        $(window).resize(function() {
            theme.resizeWindow();
        });

        
    },

        

    notes: function() {

        // BTN NOTES
        $(document).on('click', '.moderna-ead .peruglr-include-footer footer .notes .btn-notes', function() {
            peruglr.blockAll(true);
            $('.moderna-ead .peruglr-include-footer footer .notes').css('width', '100%');
            TweenMax.to($('.moderna-ead .peruglr-include-footer footer .notes form'), 0.5, { delay: 0, bottom: '0%', ease: Power4.easeOut, onComplete: function() {
                peruglr.blockAll(false);
            }});
        });

        // GET NOTES ON CONTENT
        var currentPageNotes = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageNotes;
        $('.moderna-ead .peruglr-include-footer footer .notes form textarea').val(currentPageNotes);

        // VISUAL NOTIFICATION
        if (currentPageNotes != 'Anotações...' && currentPageNotes != '' && currentPageNotes != undefined) {
            TweenMax.to($('.moderna-ead .peruglr-include-footer footer .notes .btn-notes i'), 0.5, { delay: 0, autoAlpha: 1, ease: Power4.easeOut, onComplete: function() {}});
        }
        else {
            TweenMax.to($('.moderna-ead .peruglr-include-footer footer .notes .btn-notes i'), 0.5, { delay: 0, autoAlpha: 0, ease: Power4.easeOut, onComplete: function() {}});
        }

        // INPUT NOTES
        $(document).on('focus', '.moderna-ead .peruglr-include-footer footer .notes form textarea', function() {
            if (this.value == 'Anotações...') this.value = '';
        }).on('blur', '.moderna-ead .peruglr-include-footer footer .notes form textarea', function() {
            if (this.value == '') this.value = 'Anotações...';
        });

        // BTN SUBMIT
        $(document).on('click', '.moderna-ead .peruglr-include-footer footer .notes form .btn-submit', function() {
            if ($('.moderna-ead .peruglr-include-footer footer .notes form textarea').val() == '') alert('Campo de anotações vazio.');
            else {
                peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageNotes = $('.moderna-ead .peruglr-include-footer footer .notes form textarea').val();
                theme.notes();
            }
        });

        // BTN CLOSE NOTES
        $(document).on('click', '.moderna-ead .peruglr-include-footer footer .notes form .btn-close', function() {
            peruglr.blockAll(true);
            if (this.value == 'Anotações...') peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageNotes = 'Anotações...';
            TweenMax.to($('.moderna-ead .peruglr-include-footer footer .notes form'), 0.5, { delay: 0, bottom: '-100%', ease: Power4.easeOut, onComplete: function() {
                $('.moderna-ead .peruglr-include-footer footer .notes').css('width', 0);
                peruglr.blockAll(false);
            }});
        });

    },

    changePage: function() {

        theme.notes();

        
        peruglr.getChapterTitle({ holder:'.peruglr-include-header header .course-info p span.chapter-title' });
        peruglr.getPageTitle({ holder:'.peruglr-include-header header .course-info p span.page-title' });
        
        TweenMax.to($('.moderna-ead .peruglr-include-header'), 0.5, { delay: 0.4, top: 0, ease: Power4.easeOut, onComplete: function() {}});
        TweenMax.to($('.moderna-ead .peruglr-include-footer'), 0.5, { delay: 0.6, bottom: 0, ease: Power4.easeOut, onComplete: function() {}});
        
        $('.moderna-ead .mCustomScrollbar').mCustomScrollbar();

        theme.resizeWindow();

    },

    scroll: function() {

        var mCustomScrollbarHeight = $('.moderna-ead .mCustomScrollbar').height();
        var mCSBcontainerHeight = $('.moderna-ead .mCustomScrollbar .mCustomScrollBox .mCSB_container').height();

        if (mCSBcontainerHeight <= mCustomScrollbarHeight) {
            $('.moderna-ead .mCustomScrollbar .mCustomScrollBox .mCSB_scrollTools_vertical').css('right', '-200%');
        }
        else {
            $('.moderna-ead .mCustomScrollbar .mCustomScrollBox .mCSB_scrollTools_vertical').css('right', 0);
        }

    },

    coverPage: function() {

        theme.changePage();

        $('.moderna-ead section.cover-page').css('top', 0);
        
        TweenMax.to($('.moderna-ead section.cover-page'), 0.5, { delay: 0, autoAlpha: 1, top: 0, ease: Power4.easeOut, onComplete: function() {}});
        TweenMax.to($('.moderna-ead section.cover-page main'), 0.5, { delay: 0.5, autoAlpha: 1, scale: 1, ease: Power4.easeOut, onComplete: function() {
            peruglr.blockAll(false);
        }});

    },

    introPage: function() {
        theme.pagesDefault();
        peruglr.generateCarousel({
            holder: 'section.page main'
        });

        $('section.page.page-introducao main .peruglr-carousel .carousel-navigation ul li').css({
            'border':'0'
        });

        $('section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation .btn-author').addClass('btn-active-author');
        $('.moderna-ead section.page.page-introducao main .peruglr-carousel-introducao .carousel-itens .carousel-item-book').hide()

        $("section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation ul .btn-carousel-nav .btn-author").click(function(event){
            $('.moderna-ead section.page.page-introducao main .peruglr-carousel-introducao .carousel-itens .carousel-item-book').hide()

            $('.moderna-ead section.page.page-introducao main .peruglr-carousel-introducao .carousel-itens .carousel-item-author').css({
                'display':'block'
            });

            $('section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation .btn-book').removeClass('btn-active-book');
            $('section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation .btn-author').addClass('btn-active-author');
            
        })

        $("section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation ul .btn-carousel-nav .btn-book").click(function(){
            $('.moderna-ead section.page.page-introducao main .peruglr-carousel-introducao .carousel-itens .carousel-item-author').hide()
            $('.moderna-ead section.page.page-introducao main .peruglr-carousel-introducao .carousel-itens .carousel-item-book').css({
                'display':'block'
            });
            $('section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation .btn-author').removeClass('btn-active-author');
            $('section.page.page-introducao main .peruglr-carousel-introducao .carousel-navigation .btn-book').addClass('btn-active-book');
            
        })        
    },

    multiPage: function() {
        theme.pagesDefault();
        peruglr.generateCarousel({
            holder: 'section.page main'
        }); 

        $('section.page.page-pesquisa-sobre-leitura main .peruglr-carousel .carousel-navigation ul li').css({
            'border':'0'
        });
        
       

        $("section.page.page-pesquisa-sobre-leitura main .peruglr-carousel-pesquisa-sobre-leitura .carousel-navigation ul .btn-carousel-nav .btn-graphic").click(function(){
            
            $('section.page.page-pesquisa-sobre-leitura').css({
                'background-image':'url(peruglr-themes/moderna-ead/assets/img/graphic.jpg)'
            });
        })

        $("section.page.page-pesquisa-sobre-leitura main .peruglr-carousel-pesquisa-sobre-leitura .carousel-navigation ul .btn-carousel-nav .btn-text1").click(function(){
            
            $('section.page.page-pesquisa-sobre-leitura').css({
                'background-image':'url(peruglr-themes/moderna-ead/assets/img/text1.jpg)'
            });
        })

        $("section.page.page-pesquisa-sobre-leitura main .peruglr-carousel-pesquisa-sobre-leitura .carousel-navigation ul .btn-carousel-nav .btn-table").click(function(){
            
            $('section.page.page-pesquisa-sobre-leitura').css({
                'background-image':'url(peruglr-themes/moderna-ead/assets/img/table.jpg)'
            });
        })
        $("section.page.page-pesquisa-sobre-leitura main .peruglr-carousel-pesquisa-sobre-leitura .carousel-navigation ul .btn-carousel-nav .btn-text2").click(function(){
            
            $('section.page.page-pesquisa-sobre-leitura').css({
                'background-image':'url(peruglr-themes/moderna-ead/assets/img/text2.jpg)'
            });
        })
    },   



    paraSeusAlunosLeremSozinhos: function() {
        
        theme.pagesDefault();
        peruglr.generateCarousel({
            holder: 'section.page main'
            
        });
        theme.changePage();
        $('.btn-overlay').on('click',(e)=>{ peruglr.overlay( $(e.currentTarget).attr('overlay')); $(".text").mCustomScrollbar({ axis:"y" }); });
        
        $(".scroll-x").mCustomScrollbar({ axis:"x" });
        
    },

    

    // DEFAULT PAGE
    pagesDefault: function() {

        theme.changePage();

        console.log(theme.vars.directionNavigation);

        if (theme.vars.directionNavigation == 'prev')
            $('.moderna-ead section.page').css('top', '-100%');
        else if (theme.vars.directionNavigation == 'next')
            $('.moderna-ead section.page').css('top', '100%');
        else
            $('.moderna-ead section.page').css('top', 0);

        TweenMax.to($('.moderna-ead section.page'), 0.5, { delay: 0, autoAlpha: 1, top: 0, ease: Power4.easeOut, onComplete: function() {
            peruglr.blockAll(false);
        }});

    },
    introducao: function(){
        theme.pagesDefault();
        $('.btn-number').on('click',(e)=>{ peruglr.overlay( $(e.currentTarget).attr('number')); });
    },

    pages13to19: function(arg){
        theme.pagesDefault();
        console.log(arg);
        switch (arg)
        {
            case 'page-16':
                $('input[type="radio"]').on('click',()=>{$('this').attr("checked", !$('attr').prop("checked"));});
                $('.btn-detail').on('click',()=>{ peruglr.overlay(); });
            break;

            case 'page-17':
                peruglr.generateCarousel({holder:"section.page main"})
                //$('section.page.page-biblioteca-de-sala-de-aula main .peruglr-carousel-pg-17-c-1 .carousel-itens').mCustomScrollbar({ autoHideScrollbar: true, theme: 'rounded' });
            break;

            case 'page-19':
                $('.books .img').on('click',(e)=>{ peruglr.overlay( $(e.currentTarget).attr('book')); });
                $(".books").mCustomScrollbar({ axis:"x" });
            break

            case 'o-papel-do-professor-como-mediador':
                
                $('.btn-detail').on('click',()=>{ peruglr.overlay(0); });
                $('.image').on('click',()=>{ peruglr.overlay(1); });
            break;
        }
    },

    resizeWindow: function() {

        $('.moderna-ead section.page').css({
            'padding-top': $('.moderna-ead .peruglr-include-header').height(),
            'padding-bottom': $('.moderna-ead .peruglr-include-footer').height(),
        });

        $('.moderna-ead .mCustomScrollbar').mCustomScrollbar('update');

        // theme.scroll();

    }

}

theme.init();