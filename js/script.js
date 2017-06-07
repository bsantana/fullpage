$(document).ready(function() {

	var slideIndex  = 1,
		sliding     = false;
	$('#fullpage').fullpage({
	  scrollHorizontally: true,
	  navigation: true,
	  showActiveTooltip: true,
	  scrollOverflow: true
	  /*onLeave: function(index, nextIndex, direction) {
	  	 console.log(index);
	  	console.log(nextIndex);
	  	console.log(direction);
    if(index == 2 && !sliding) {

    		// if(direction == 'down' && slideIndex < 2)
        if(direction == 'down' && slideIndex < 2) {

            sliding = true;
            $.fn.fullpage.moveSlideRight();
            //slideIndex++;
            return false;

            // else if(direction == 'up' && slideIndex > 1)
        } else if(direction == 'up' && slideIndex >= 1) {

            sliding = true;
            $.fn.fullpage.moveSlideLeft();
            //slideIndex--;
            return false;

        }

    } else if(sliding) {

        return false;

    }

},

afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

    sliding = false;

}*/

	});


//$(document).ready(function() {

//});

	//var $section2 = $('.section:eq(1)').detach();
	//var $section3 = $('.section:eq(2)').detach();
	function init() {
		/*$('.pagepiling').pagepiling({
			direction: 'vertical',
			sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
			sectionSelector: '.section2',
		});*/
		$('#page8').pagepiling({
			direction: 'vertical',
			sectionSelector: '.modal1',
		});
	}



	//$($section2).appendTo('#fullpage');
	var $modalOne = 
		'<div class="pagepiling">'+
			'<div class="section2">Some section</div>'+
			'<div class="section2">Some section</div>'+
			'<div class="section2">Some section</div>'+
			'<div class="section2">Some section</div>'+
			'<button class="buttonOff modal-close">X</button>'+
		'</div>';

	var $modalTwo = 
		'<div id="page8" class="section">'+
	      	'<div class="content">'+
		    	'<div class="modalClose">'+
			    	'<div class="cross buttonOff">'+
						'<svg viewBox="0 0 800 600">'+
							'<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>'+
							'<path d="M300,320 L540,320" id="middle"></path>'+
							'<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>'+
						'</svg>'+
					'</div>'+
			    	'<p>Fechar</p>'+
		    	'</div>'+
		    	'<div class="slide1 modal1">'+
		    		'<div class="container-fluid">'+
		    			'<div class="row">'+
		    				'<div class="col-sm-6" style="">'+
		    				'</div>'+
		    				'<div class="col-sm-5" style="">'+
		    					'<p class="page-title textRight">Diária</p>'+
		    					'<p class="page-title textRight sub-title">Mão de obra rápida para serviços rápidos</p>'+
		    				'</div>'+
		    			'</div>'+
		    		'</div>'+
		    	'</div>'+
				'<div class="slide2 modal1">'+
		    		'<div class="container-fluid">'+
		    			'<div class="row">'+
		    				'<div class="col-sm-6">'+
		    				'</div>'+
		    				'<div class="col-sm-5">'+
		    					'<p class="page-title textRight">Mensal</p>'+
		    					'<p class="page-title textRight sub-title">Simplifique sua administração e ganhe produtividade</p>'+
		    				'</div>'+
		    			'</div>'+
		    		'</div>'+
		    	'</div>'+
				'<div class="slide3 modal1">'+
		    		'<div class="container-fluid">'+
		    			'<div class="row">'+
		    				'<div class="col-sm-6">'+
		    				'</div>'+
		    				'<div class="col-sm-5">'+
		    					'<p class="page-title">Planos Russel Hora Mais. E ganhe</p>'+
		    					'<p class="page-title sub-title">'+
		    						'+ Diárias Gratuitas<br>'+
		    						'+ Horas Extras Grátis<br>'+
		    						'+ Pagamento facilitado'+
		    					'</p>'+
		    				'</div>'+
		    			'</div>'+
		    		'</div>'+
		    	'</div>'+
		    	'<div class="slide4 modal1">'+
		    		'<div class="container-fluid">'+
		    			'<div class="row">'+
		    				'<div class="col-sm-6">'+
		    				'</div>'+
		    				'<div class="col-sm-5">'+
		    					'<p class="page-title textRight">Recrutamento e seleção</p>'+
		    					'<p class="page-title textRight sub-title">Nossas modalidades de contratação</p>'+
		    				'</div>'+
		    			'</div>'+
		    		'</div>'+
		    	'</div>'+
			'</div>'+
	    '</div>';

	//adding the actions to the buttons
	$(document).on('click', '.buttonOn', function() {
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
		//$(this).parents('.section').addClass('fix').find('.content').hide().next().addClass('modalOn');
		$('#modalToSection').removeClass('hidden').addClass('animated bounceInRight').removeClass('bounceOutRight');
		$('#modalToSection').append($modalTwo);
		init();
		$('#fp-nav').hide();
	});

	$(document).on('click', '.buttonOff', function() {
	  $.fn.fullpage.setAllowScrolling(true);
	  $.fn.fullpage.setKeyboardScrolling(true);
	  $('#modalToSection').addClass('animated bounceOutRight').removeClass('bounceInRight');
	  $('#fp-nav').show();
	  $('#pp-nav').remove();
	  //$(this).parents('.section').removeClass('fix').find('.content').show().next().removeClass('modalOn');
	  	setTimeout(function() {
			$('#modalToSection').html('');
		}, duration)
	});

	// Efeito do Modal com SVG
	var modalTriggerBts = $('button[data-type="cd-modal-trigger"]'),
	coverLayer = $('.cd-cover-layer');
	
	/*
		convert a cubic bezier value to a custom mina easing
		http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
	*/
	var duration = 600,
		epsilon = (1000 / 60 / duration) / 4,
		firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

	modalTriggerBts.each(function(){
		initModal($(this));
	});

	function initModal(modalTrigger) {
		var modalTriggerId =  modalTrigger.attr('id'),
			modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
			svgCoverLayer = modal.children('.cd-svg-bg'),
			paths = svgCoverLayer.find('path'),
			pathsArray = [];
		//store Snap objects
		pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
		pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
		pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

		//store path 'd' attribute values	
		var pathSteps = [];
		pathSteps[0] = svgCoverLayer.data('step1');
		pathSteps[1] = svgCoverLayer.data('step2');
		pathSteps[2] = svgCoverLayer.data('step3');
		pathSteps[3] = svgCoverLayer.data('step4');
		pathSteps[4] = svgCoverLayer.data('step5');
		pathSteps[5] = svgCoverLayer.data('step6');
		
		//open modal window
		modalTrigger.on('click', function(event){
			event.preventDefault();
			modal.addClass('modal-is-visible');
			coverLayer.addClass('modal-is-visible');
			animateModal(pathsArray, pathSteps, duration, 'open');
		});

		//close modal window
		modal.on('click', '.modal-close', function(event){
			event.preventDefault();
			modal.removeClass('modal-is-visible');
			coverLayer.removeClass('modal-is-visible');
			animateModal(pathsArray, pathSteps, duration, 'close');
		});
	}

	function animateModal(paths, pathSteps, duration, animationType) {
		var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
			path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
			path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
		paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
		paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
		paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
	}

	function bezier(x1, y1, x2, y2, epsilon){
		//https://github.com/arian/cubic-bezier
		var curveX = function(t){
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};

		var curveY = function(t){
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};

		var derivativeCurveX = function(t){
			var v = 1 - t;
			return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
		};

		return function(t){

			var x = t, t0, t1, t2, x2, d2, i;

			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++){
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}

			t0 = 0, t1 = 1, t2 = x;

			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);

			// Fallback to the bisection method for reliability.
			while (t0 < t1){
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;
				else t1 = t2;
				t2 = (t1 - t0) * .5 + t0;
			}

			// Failure
			return curveY(t2);

		};
	};
});