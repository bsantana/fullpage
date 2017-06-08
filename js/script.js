$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollHorizontally: true,
		navigation: true,
		showActiveTooltip: true,
		scrollOverflow: true,

		/*onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			console.log(index + 'index');
			console.log(slideIndex + 'slideIndex');
			console.log(direction + 'direction');
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
		$('#modalToSection').pagepiling({
			direction: 'vertical',
			sectionSelector: '.modal1',
		});
	}



	//$($section2).appendTo('#fullpage');
	/*var $modalOne = 
		'<div class="pagepiling">'+
			'<div class="section2">Some section</div>'+
			'<div class="section2">Some section</div>'+
			'<div class="section2">Some section</div>'+
			'<div class="section2">Some section</div>'+
			'<button class="buttonOff modal-close">X</button>'+
		'</div>';*/

	var $modalOne = 
		'<div id="modal1" class="section">'+
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

	var $modal_administrativo = 
		'<div id="modal_administrativo" class="section">'+
	    	'<div class="content pp-scrollable">'+
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Administrativo</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">&ensp;&ensp;Com a disputa no mercado cada vez mais acirrada, clientes mais exigentes e necessidade de melhoria contínuas em seus processos, empresas de diversos segmentos encontram desafios constantes em suas atividades e um dos seus principais problemas é a escassez de mão de obra qualificada. Neste panorama, organizações do mundo inteiro estão buscando a terceirização como forma de aumentar a competitividade e eficiência.</p>'+
	    					
	    					'<img src="images/modal/administrativo.png" class="bg-modal">'+

	    					'<p class="modal-text">&emsp;&ensp;Ao optar por realizar parceria com empresas fornecedoras de mão de obra, o gestor estará economizando tempo, dinheiro e evitando dores de cabeça futuras. Dessa forma, deixa-se a cargo da empresa fornecedora de mão de obra funções como seleção e recrutamento de candidatos, treinamento e capacitação, supervisão de tarefas e envolvimento com encargos trabalhistas. Afinal, como o gestor conseguiria dar conta de suas tarefas e ainda realizar todos esses procedimentos? E se ele conseguir se dedicar à contratação do funcionário para depois perceber que o mesmo não se encaixa ao perfil da empresa?</p>'+

							'<p class="modal-text">&emsp;&ensp;A Russel Serviços, empresa que fornece mão de obra capacitada há mais de 12 anos, assegura que todos esses procedimentos sejam feitos em até 48 horas, implantando o profissional com extrema rapidez. E se o mesmo não se encaixar ao perfil solicitado pela empresa, a Russel Serviços garante a reposição/substituição em até 24 horas e sem custos adicionais. Menos tempo, mais lucro e nenhuma dor de cabeça com contratações.</p>'+
							'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Auxiliar de Serviços Gerais</a></li>'+
	    						'<li><a>Copeira</a></li>'+
	    						'<li><a>Auxiliar Administrativo</a></li>'+
	    						'<li><a>Auxiliar de Escritório</a></li>'+
	    						'<li><a>Recepcionista</a></li>'+
	    						'<li><a>Operador de Telemarketing</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Chefe de Departamento ou Seção</a></li>'+
	    						'<li><a>Contínuo</a></li>'+
	    						'<li><a>Digitador</a></li>'+
	    						'<li><a>Inspetor de Serviços</a></li>'+
	    						'<li><a>Mensageiro</a></li>'+
	    						'<li><a>Operador de Copiadora</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/administrativo/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

		var $modal_const_civil =
			'<div id="modal_const_civil" class="section">'+
		    	'<div class="content pp-scrollable">'+
		    		'<div class="container-fluid">'+
		    			'<div class="row sectionUp">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<p class="page-title modal-title">Construção Civil</p>'+
		    				'</div>'+
		    			'</div>'+
		    			'<div class="row">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<p class="modal-text">&ensp;&ensp;A construção civil é um dos segmentos que mais terceirizam mão de obra para otimizar tempo e recursos em seus empreendimentos. Com a terceirização, ganha-se produtividade e além disso, o gestor pode se ver livre de todos os encargos trabalhistas, pois a empresa contratada se responsabiliza por todas as obrigações legais, trabalhistas e fiscais. No caso da construção civil, existe ainda um agravante: o tempo de contratação para a seleção e legalização de um profissional para a obra leva cerca de 40 dias. Com a terceirização correta, esse processo demora pouquíssimos dias.</p>'+
		    					
		    					'<img src="images/modal/construcao-civil.png" class="bg-modal">'+

								'<p class="modal-text">&emsp;&ensp;Na Russel Serviços o profissional é entregue com toda essa documentação resolvida em até 48 horas, além de realizar a substituição/reposição em até 24 horas e sem custos adicionais, se o trabalhador não se encaixar ao perfil da empresa. Sem perder tempo, sem burocracias, sem precisar fazer seleções e recrutamentos. Não existem dúvidas, terceirizar mão de obra para o segmento de construção civil é a melhor opção. Empresas como Gafisa, Brookfield, EVEN, Odebretcht, Calper, RJZCyrela já entenderam isso e escolheram terceirizar com a Russel Serviços.</p>'+
								'<hr>'+
		    				'</div>'+
		    			'</div>'+
		    			'<div class="row sectionUp">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
		    				'</div>'+
		    				'<div class="col-sm-5 col-sm-offset-1">'+
		    					'<ul>'+
		    						'<li><a>Pedreiro</a></li>'+
		    						'<li><a>Servente</a></li>'+
		    						'<li><a>Carpinteiro</a></li>'+
		    						'<li><a>Operadores de Máquinas</a></li>'+
		    						'<li><a>Técnico de Segurança do Trabalho</a></li>'+
		    						'<li><a>Apontador</a></li>'+
		    						'<li><a>Armador</a></li>'+
		    					'</ul>'+
		    				'</div>'+
		    				'<div class="col-sm-5 col-sm-offset-1">'+
		    					'<ul>'+
		    						'<li><a>Bombeiro Hidráulico</a></li>'+
		    						'<li><a>Calceteiro</a></li>'+
		    						'<li><a>Carpinteiro de Forma</a></li>'+
		    						'<li><a>Encarregado Administrativo de Obra</a></li>'+
		    						'<li><a>Guincheiro</a></li>'+
		    						'<li><a>Mestre de Obra</a></li>'+
		    						'<li><a>Gesseiro</a></li>'+
		    					'</ul>'+
		    				'</div>'+
		    			'</div>'+
		    			'<div class="row">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<button class="saiba-mais saiba-mais-modal"><a href="http://www.russelservicos.com.br/categoria-produto/construcao-civil/" target="_blank">veja mais no site</a></button><br>'+
		    				'</div>'+
		    			'</div>'+
		    		'</div>'+
		    	'</div>'+
		    '</div>';

		var $modal_consultores_espec =
			'<div id="modal_consultores_espec" class="section">'+
		    	'<div class="content pp-scrollable">'+
		    		'<div class="container-fluid">'+
		    			'<div class="row sectionUp">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<p class="page-title modal-title">Consultores Especializados</p>'+
		    				'</div>'+
		    			'</div>'+
		    			'<div class="row">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<p class="modal-text">&ensp;&ensp;Possuímos uma equipe de consultores especializados que realizam o atendimento aos clientes, auxiliando na resolução de seus problemas e sugerindo soluções para suas empresas otimizarem tempo e dinheiro em suas contratações de mão de obra.</p>'+
		    					
		    					'<img src="images/modal/consultor-especializado.png" class="bg-modal">'+

								'<p class="modal-text">&emsp;&ensp;Nossos colaboradores estão sempre comprometidos com a eficiência no atendimento, qualidade de nossos serviços e na criação de relações comerciais éticas e transparentes.</p>'+
								'<hr>'+
		    				'</div>'+
		    			'</div>'+
		    			'<div class="row sectionUp">'+
		    				'<div class="col-sm-10 col-sm-offset-1">'+
		    					'<p class="page-title modal-title">Estamos sempre presente onde nossos clientes estão com atenção total às suas demandas.</p>'+
		    				'</div>'+
		    				'<div class="col-sm-5 col-sm-offset-1">'+
		    					'<ul>'+
		    						'<li><a>Reuniões Presenciais e Online</a></li>'+
		    						'<li><a>Telefone</a></li>'+
		    						'<li><a>Email</a></li>'+
		    						'<li><a>Redes Sociais</a></li>'+
		    						'<li><a>Whatsapp</a></li>'+
		    						'<li><a>Chat</a></li>'+
		    					'</ul>'+
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
		$('#modalToSection').append($modalOne);
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

	document.getElementsByClassName('btn-home')[0].onclick = function() {
		$.fn.fullpage.moveSectionDown();
	}

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