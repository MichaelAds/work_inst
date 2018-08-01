// Global Variables
var peruglrVars = {
	// Total images sequences
	totalSequenceImgs: null,

	// Info course
	documentTitle: null,
	courseID: null,
	courseTitle: null,

	// Modules
	moduleTitle: null,

	// Chapters
	totalChapters: null,
	currentChapter: 0,

	// Pages
	totalChapterPages: null,
	currentChapterPage: 0,
	statusChapterPage: null
}

// Peruglr methods
var peruglr = {

	// Version
	version: 'Version: 0.6.0',

	// Start application
	start: function() {

		// On change hash URL
		$(window).bind('hashchange', function() {
			peruglr.buildPage();
		});
		
		$.getScript('peruglr-config.js', function(data, textStatus, jqxhr) {
			
			peruglrVars.documentTitle = peruglrCourseInfo.documentTitle;

			peruglrVars.courseID = peruglrCourseInfo.courseID;
			
			peruglrVars.totalChapters = peruglrCourseContent.chapters.length;
			peruglrVars.totalChapterPages = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages.length;

			peruglrVars.statusChapterPage = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].status;

			peruglr.buildPage();

			peruglr.credits();

		});

	},

	// Credits
	credits: function() {
		var cssRule =
		'color: rgb(76, 52, 146);' +
		'font-family: Arial, Helvetica, sans-serif;' +
		'font-size: 40px;' +
		'font-weight: bold;' +
		'line-height: 40px';
		
		// Clear console for credits
		if (peruglrConfig.initConsoleClear == true) console.clear();
		
		console.log('%cPeruglr', cssRule);
		console.log('Developed by Perugluglu Interactive www.perugluglu.net');
	},

	// Block and unlock page click
	blockAll: function(action) {
        if (action == true) {
            $('#peruglr').addClass('events-none');
            $('#peruglr .btn').removeClass('ease');
        }
        else if (action == false){
            $('#peruglr').removeClass('events-none');
            $('#peruglr .btn').addClass('ease');
        }
    },

	// Building the basic structure of the page
	buildPage: function() {

		// Kill all transitions
		TweenMax.killAll();
		
		$('#peruglr').attr('class', peruglrVars.courseID);

		$('#peruglr section.page').remove();
		
		$('#peruglr').append('<section class="page"></section>');

		peruglr.blockAll(true);

		var splitHashAll = location.hash.split('#')[1];
		var splitHashChapter = null;
		var splitHashChapterPage = null;
		if (splitHashAll == undefined) {
			location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
			return null;
		}
		else {
			splitHashChapter = splitHashAll.split('/')[0];
			splitHashChapterPage = splitHashAll.split('/')[1];
		}

		var findChapter = _.findKey(peruglrCourseContent.chapters, { chapterID: splitHashChapter });
		if (findChapter == undefined) {
			findChapter = 0;
			location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
		}
		var findChapterPage = _.findKey(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages, { pageID: splitHashChapterPage });
		if (findChapterPage == undefined) {
			findChapterPage = 0;
			location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
		}
		
		peruglrVars.currentChapter = findChapter;
		peruglrVars.currentChapterPage = findChapterPage;
		
		$('#peruglr section.page').load('peruglr-themes/' + peruglrVars.courseID + '/templates/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageTemplate.templateHTML, function() {
			
			$(this).addClass('chapter-' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID).addClass('page-' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID).addClass(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCustomClass).addClass(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageTemplate.templateID).addClass(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageTemplate.templateCustomClass);
			
			if (peruglrCourseInfo.moduleTitle != '') {
				$(document).attr('title', peruglrCourseInfo.courseTitle + ', ' + peruglrCourseInfo.moduleTitle + ', ' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterTitle + ', ' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageTitle + ' :: ' + peruglrVars.documentTitle);
			}
			else {
				$(document).attr('title', peruglrCourseInfo.courseTitle + ', ' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterTitle + ', ' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageTitle + ' :: ' + peruglrVars.documentTitle);
			}

			peruglrVars.totalSequenceImgs = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs.length;
			
			if (peruglrVars.totalSequenceImgs > 0)
				peruglr.addSequenceImgsLoad();
			else {
				peruglr.startLoadPage();
			}

		});

	},

	// Add png or jpg sequences in preloader
	addSequenceImgsLoad: function() {

		peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.singularFiles.files = [];
		
		for (var i=0; i<peruglrVars.totalSequenceImgs; i++) {
			
			var totalImgs = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs[i].totalImgs;
			var sizeAllImgs = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs[i].sizeAllImgs;
			var path = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs[i].path;
			var partName = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs[i].partName;
			var startCount = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs[i].startCount;
			var extension = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.animationSequenceImgs[i].extension;
			var meanSizeImgs = parseInt(sizeAllImgs / totalImgs);

			for (var j = startCount; j <= ((totalImgs + startCount) -1); j++) {
				peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.singularFiles.files.push({ type:'IMAGE', source:'' + path + '/' + partName + j + '.' + extension, size:meanSizeImgs });

				if (j == ((totalImgs + startCount) -1)) {
					peruglr.startLoadPage();
				}
			}

		}

	},

	// Start load files
	startLoadPage: function() {
		
		$('#peruglr').append('<div id="preloader"><div style="background-image:url(' + peruglrConfig.preloaderImg + ')"></div></div>');
		TweenMax.to($('#peruglr #preloader'), 1, { delay:0, autoAlpha:1, ease:Power4.easeOut, onComplete:function() { }});

		var totalFiles = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.singularFiles.files.length;
		
		if (totalFiles > 0) {
			
			$.html5Loader({
				
				filesToLoad: peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.singularFiles,
				
				onUpdate: function (percentage) {
					if (peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pagePreloaderFiles.percentNumber == true) {
						$('#peruglr #preloader div').html('<span>' + percentage + '%</span>');
					}
					if (percentage >= 100) {
						console.log(totalFiles + ' loaded file(s)');
					}
				},
				
				onComplete: function() {
					TweenMax.to($('#peruglr #preloader'), 0.5, { delay: 0, autoAlpha: 0, ease: Power4.easeOut, onComplete: function () {
						$('#peruglr #preloader').remove();
						eval(peruglr.getCallbackMethod());
						peruglr.updateNavigation();
					}});
				}

			});

		}
		else {

			TweenMax.to($('#peruglr #preloader'), 0.5, { delay: 0, autoAlpha: 0, ease: Power4.easeOut, onComplete: function () {
				console.log('0 loaded file');
				$('#peruglr #preloader').remove();
				eval(peruglr.getCallbackMethod());
				peruglr.updateNavigation();
			}});

		}

	},

	// Update navigation
	updateNavigation: function() {

		$('#peruglr .peruglr-navigation .btn').removeClass('btn-blocked');

		if (peruglrVars.currentChapter == 0 && peruglrVars.currentChapterPage == 0) {
			$('#peruglr .peruglr-navigation .btn-prev-page').addClass('btn-blocked');
		}

		if (peruglrVars.currentChapter == peruglrVars.totalChapters - 1 && peruglrVars.currentChapterPage == peruglrVars.totalChapterPages - 1) {
			$('#peruglr .peruglr-navigation .btn-next-page').addClass('btn-blocked');
		}

	},

	// GET HEADER CONTENT -----------------------------------------------------------------------
	// Sintax example: peruglr.getCourseTitle({ holder:'h1' });
	getCourseTitle: function(parameter) {
		
		var holder = '';
		
		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		$('#peruglr ' + holder).html(peruglrCourseInfo.courseTitle);

	},

	// Sintax example: peruglr.getModuleTitle({ holder:'h2' });
	getModuleTitle: function(parameter) {
		
		var holder = '';
		
		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		$('#peruglr ' + holder).html(peruglrCourseInfo.moduleTitle);

	},

	// Sintax example: peruglr.getChapterTitle({ holder:'h3' });
	getChapterTitle: function(parameter) {
		
		var holder = '';
		
		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		$('#peruglr ' + holder).html(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterTitle);

	},

	// Sintax example: peruglr.getPageTitle({ holder:'h4' });
	getPageTitle: function(parameter) {

		var holder = '';
		
		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		$('#peruglr ' + holder).html(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageTitle);

	},

	// GET MAIN CONTENT -------------------------------------------------------------------------
	// Sintax example: peruglr.contentPage({ holder:'main' });
	getPageContent: function(parameter) {
		
		var holder = '';

		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		$('#peruglr section.page ' + holder).append(peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageContent);

	},

	// INCLUDE ELEMENT --------------------------------------------------------------------------
	// Sintax example: peruglr.includeElement({ id:'header', include:'header.html', position:'after', destroy: true });
	includeElement:function(parameter) {

		var id = '';
		var include = '';
		var holder = '';
		var position = 'after';
		var destroy = true;

		if (parameter != undefined && parameter != '') {
			if (parameter.id != undefined && parameter.id != '') id = parameter.id;
			if (parameter.include != undefined && parameter.include != '') include = parameter.include;
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
			if (parameter.position != undefined && parameter.position != '') position = parameter.position;
			if (parameter.destroy != undefined && parameter.destroy != '') destroy = parameter.destroy;
		}

		if (parameter.destroy == false) {
			if ($('#peruglr .peruglr-include-' + parameter.id).length == 0) {
				if (parameter.position == undefined || parameter.position == 'after')
					$('#peruglr ' + holder).append('<div class="peruglr-include peruglr-include-' + parameter.id + '"></div>');
				else
					$('#peruglr ' + holder).prepend('<div class="peruglr-include peruglr-include-' + parameter.id + '"></div>');
				
				$('#peruglr .peruglr-include.peruglr-include-' + parameter.id).load('peruglr-themes/' + peruglrVars.courseID + '/includes/' + parameter.include, function() {
					peruglrVars[parameter.id] = true;
				});
			}
		}
		else {
			$('#peruglr .peruglr-include.peruglr-include-' + parameter.id).remove();
			if (parameter.position == undefined || parameter.position == 'after')
				$('#peruglr ' + holder).append('<div class="peruglr-include peruglr-include-' + parameter.id + '"></div>');
			else
				$('#peruglr ' + holder).prepend('<div class="peruglr-include peruglr-include-' + parameter.id + '"></div>');
			
			$('#peruglr .peruglr-include.peruglr-include-' + parameter.id).load('peruglr-themes/' + peruglrVars.courseID + '/includes/' + parameter.include, function() {
				peruglrVars[parameter.id] = true;
			});
		}

	},

	overlay: function(parameter) {

		var overlayIndex = parameter || 0;
		var holder = '';

		if (parameter != undefined && parameter != '') {
			if (parameter.overlayIndex != undefined && parameter.overlayIndex != '') overlayIndex = parameter.index;
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		var overlayID = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayID;
		var overlayCustomClass = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayCustomClass;
		var overlayContent = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayContent;

		$('#peruglr ' + holder).append('<div class="peruglr-overlay peruglr-overlay-' + overlayID + '"><div class="' + overlayCustomClass + '">' + overlayContent + '</div></div>');

		var buttonBoxInside = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayCloseButton.buttonBoxInside;
		var overlayID = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayID;
		var buttonCustomClass = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayCloseButton.buttonCustomClass;
		var buttonContent = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageOverlay[overlayIndex].overlayCloseButton.buttonContent;

		if (buttonBoxInside == false) {
			$('#peruglr ' + holder + ' .peruglr-overlay.peruglr-overlay-' + overlayID).append('<div class="btn btn-close ' + buttonCustomClass + '">' + buttonContent + '</div>');
		}
		else {
			$('#peruglr ' + holder + ' .peruglr-overlay.peruglr-overlay-' + overlayID + ' > div').append('<div class="btn btn-close ' + buttonCustomClass + '">' + buttonContent + '</div>');
		}

		$(document).on('click', '#peruglr ' + holder + ' .peruglr-overlay.peruglr-overlay-' + overlayID + ' .btn-close', function() {
			TweenMax.to($('#peruglr ' + holder + ' .peruglr-overlay.peruglr-overlay-' + overlayID), 0.5, { delay: 0, autoAlpha: 0, ease: Power4.easeOut, onComplete: function() {
                $('#peruglr ' + holder + ' .peruglr-overlay.peruglr-overlay-' + overlayID).remove();
            }});
        });

	},

	// METHOD AFTER CONTENT LOAD ----------------------------------------------------------------
	// Method for page/content
	getCallbackMethod: function() {

		return peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCallbackMethod;

	},

	// Sintax example: peruglr.contentPage({ holder:'.menu' });
	generateIndexMenu: function(parameter) {

		var holder = '';

		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}
		
		$('#peruglr section.page ' + holder).append('<nav class="index"><ul class="chapters"></ul></nav>');
		
		for (var i=0; i<peruglrVars.totalChapters; i++) {
			$('#peruglr section.page ' + holder + ' nav.index ul.chapters').append('<li chapter="' + i + '" chapter-page="0"><div class="btn"><p>' + peruglrCourseContent.chapters[i].chapterTitle + '</p></div><ul class="pages"></ul></li>');
			var totalPages = peruglrCourseContent.chapters[i].chapterPages.length;
			for (var j=0; j<totalPages; j++) {
				$('#peruglr section.page ' + holder + ' nav.index ul.chapters li:eq(' + i + ') ul.pages').append('<li chapter="' + i + '" chapter-page="' + j + '" class="blocked"><div class="btn"><p>' + peruglrCourseContent.chapters[i].chapterPages[j].pageTitle + '</p></div></li>');
			}
		}

		$('#peruglr section.page ' + holder + ' nav.index ul.chapters li ul.pages li').each(function() {
			var indexThis = $(this).index();
			var statusPage = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[indexThis].status;
			if (statusPage == 'active') {
				$(this).removeClass('blocked').addClass('active');
				$(this).next().removeClass('blocked').addClass('active');
			}
		});

		$('#peruglr section.page nav.index ul.chapters li:eq(' + peruglrVars.currentChapter + ') ul.pages li:eq(' + peruglrVars.currentChapterPage + ')').removeClass('blocked').addClass('current');

	},

	// Sintax example: peruglr.contentPage({ holder:'nav' });
	generateNavigation: function(parameter) {

		var holder = '';

		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}
		
		$('#peruglr ' + holder).append('<div class="peruglr-navigation"><div class="btn btn-prev-page"><i></i><p>Voltar</p></div><div class="btn btn-next-page"><i></i><p>Avançar</p></div></div>');

	},

	// Sintax example: peruglr.contentPage({ holder:'.div' });
	generatePagination: function(parameter) {

		var holder = '';
		
		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		$('#peruglr section.page ' + holder).append('<div class="pagination"><p>' + (peruglrVars.currentChapterPage + 1) + ' de ' + totalChapterPages + '</p></div>');

	},

	// Sintax example: peruglr.contentPage({ holder:'.div' });
	generateProgress: function(parameter) {

		var holder = '';

		if (parameter != undefined && parameter != '') {
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
		}

		var percent = parseInt(((peruglrVars.currentChapterPage + 1) / totalChapterPages) * 100);

		$('#peruglr section.page ' + holder).append('<div class="progress"><div class="bar"><span style="width:' + (percent + '%') + '"></span></div><p>' + (percent + '%') + '</p></div>');

	},

	generateCarousel: function(parameter) {

		var carouselIndex = 0;
		var holder = '';
		var control = false;

		if (parameter != undefined && parameter != '') {
			if (parameter.carouselIndex != undefined && parameter.carouselIndex != '') carouselIndex = parameter.index;
			if (parameter.holder != undefined && parameter.holder != '') holder = parameter.holder;
			if (parameter.control != undefined && parameter.control != '') control = parameter.control;
		}

		var carouselID = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselID;
		var carouselCustomClass = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselCustomClass;
		var totalItens = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselItens.length;

		$('#peruglr ' + holder).append('<div class="peruglr-carousel peruglr-carousel-' + carouselID + ' ' + carouselCustomClass + '"><div class="carousel-itens"><ul></ul></div><div class="carousel-navigation"><ul></ul></div></div>');

		for (var i=0; i<totalItens; i++) {
			var itemID = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselItens[i].itemID;
			var itemCustomClass = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselItens[i].itemCustomClass;
			var itemContent = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselItens[i].itemContent;
			var navCustomClass = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselItens[i].itemNavigation.navCustomClass;
			var navContent = peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageCarousels[carouselIndex].carouselItens[i].itemNavigation.navContent;
			
			$('#peruglr ' + holder + ' .peruglr-carousel.peruglr-carousel-' + carouselID + ' .carousel-itens ul').append('<li class="carousel-item carousel-item-' + itemID + ' ' + itemCustomClass + '">' + itemContent + '</li>');

			$('#peruglr ' + holder + ' .peruglr-carousel.peruglr-carousel-' + carouselID + ' .carousel-navigation ul').append('<li class="btn btn-carousel-nav ' + navCustomClass + '" target=".carousel-item-' + itemID + '">' + navContent + '</li>');
		}

		$('.carousel-item').fadeOut(0);
		$('.btn-carousel-nav').on('click', (e) => 
		{ 
			//console.log(e.currentTarget); 
			$('.btn-carousel-nav').removeClass('clicked');
			$(e.currentTarget).addClass('clicked');
			
			if(control){
				$('.carousel-item').fadeOut( () => 
				{ 
					$($(e.currentTarget).attr('target')).fadeIn(); 
				}); 
			}else{
				$('.carousel-item').hide();
				$($(e.currentTarget).attr('target')).show(); 
			}
		});

		if(control){
			$($('.btn-carousel-nav').first().addClass('clicked').attr('target')).fadeIn();
		}else{
			$('.btn-carousel-nav').first().addClass('clicked');
			$($('.btn-carousel-nav').first().addClass('clicked').attr('target')).show();
		}

	},

	enableNextPage: function() {

		if (peruglrVars.currentChapterPage < (totalChapterPages-1)) {
			$('#peruglr nav.index ul.chapters li:eq(' + peruglrVars.currentChapter + ') ul.pages li:eq(' + (peruglrVars.currentChapterPage + 1) + ')').removeClass('blocked').addClass('active');
			$('#peruglr .peruglr-navigation .btn-next-page').removeClass('blocked');
			peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].status = 'active';
		}

	},

	nextPage: function() {

		peruglrVars.currentChapterPage++;

		if (peruglrVars.currentChapterPage == peruglrVars.totalChapterPages) {
			if (peruglrVars.currentChapter < peruglrVars.totalChapters - 1) {
				peruglrVars.currentChapter++;
				peruglrVars.currentChapterPage = 0;
				location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
			}
			else {
				peruglrVars.currentChapterPage = peruglrVars.totalChapterPages - 1;
			}
		}
		else {
			location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
		}

	},

	prevPage: function() {

		peruglrVars.currentChapterPage--;

		if (peruglrVars.currentChapterPage < 0) {
			if (peruglrVars.currentChapter > 0) {
				peruglrVars.currentChapter--;
				peruglrVars.currentChapterPage = peruglrVars.totalChapterPages - 1;
				location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
			}
			else if (peruglrVars.currentChapterPage < 0 && peruglrVars.currentChapter == 0) {
				peruglrVars.currentChapterPage = 0;
			}
		}
		else {
			location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;
		}

	},

	goToPage: function(chapterIndex, pageIndex) {

		peruglrVars.currentChapter = chapterIndex;
		peruglrVars.currentChapterPage = pageIndex;

		location.hash = '#' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterID + '/' + peruglrCourseContent.chapters[peruglrVars.currentChapter].chapterPages[peruglrVars.currentChapterPage].pageID;

	}

}

// On ready document
$(document).ready(function() {
	peruglr.start();
});