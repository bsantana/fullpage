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

	var $modal_modalidade_contratacao = 
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
		    					'<p class="page-title">Planos Russel Hora Mais. Ganhe:</p>'+
		    					'<p class="page-title sub-title">'+
		    						'+ Diárias Gratuitas<br>'+
		    						'+ Horas Extras Grátis<br>'+
		    						'+ Pagamento facilitado<br>'+
		    						'+ 150% de Garantia'+
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
		    					'<p class="page-title textRight sub-title">Selecionamos campeões para sua empresa</p>'+
		    				'</div>'+
		    			'</div>'+
		    		'</div>'+
		    	'</div>'+
			'</div>'+
	    '</div>';

	var $modal_administrativo = 
		'<div id="modal_administrativo" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Administrativo</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Com a disputa no mercado cada vez mais acirrada, clientes mais exigentes e necessidade de melhoria contínuas em seus processos, empresas de diversos segmentos encontram desafios constantes em suas atividades e um dos seus principais problemas é a escassez de mão de obra qualificada. Neste panorama, organizações do mundo inteiro estão buscando a terceirização como forma de aumentar a competitividade e eficiência.</p>'+
	    					
	    					'<img src="images/modal/administrativo.png" class="bg-modal">'+

	    					'<p class="modal-text">Ao optar por realizar parceria com empresas fornecedoras de mão de obra, o gestor estará economizando tempo, dinheiro e evitando dores de cabeça futuras. Dessa forma, deixa-se a cargo da empresa fornecedora de mão de obra funções como seleção e recrutamento de candidatos, treinamento e capacitação, supervisão de tarefas e envolvimento com encargos trabalhistas. Afinal, como o gestor conseguiria dar conta de suas tarefas e ainda realizar todos esses procedimentos? E se ele conseguir se dedicar à contratação do funcionário para depois perceber que o mesmo não se encaixa ao perfil da empresa?</p>'+

							'<p class="modal-text">A Russel Serviços, empresa que fornece mão de obra capacitada há mais de 12 anos, assegura que todos esses procedimentos sejam feitos em até 48 horas, implantando o profissional com extrema rapidez. E se o mesmo não se encaixar ao perfil solicitado pela empresa, a Russel Serviços garante a reposição/substituição em até 24 horas e sem custos adicionais. Menos tempo, mais lucro e nenhuma dor de cabeça com contratações.</p>'+
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
		'<div id="modal_const_civil" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Construção Civil</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">A construção civil é um dos segmentos que mais terceirizam mão de obra para otimizar tempo e recursos em seus empreendimentos. Com a terceirização, ganha-se produtividade e além disso, o gestor pode se ver livre de todos os encargos trabalhistas, pois a empresa contratada se responsabiliza por todas as obrigações legais, trabalhistas e fiscais. No caso da construção civil, existe ainda um agravante: o tempo de contratação para a seleção e legalização de um profissional para a obra leva cerca de 40 dias. Com a terceirização correta, esse processo demora pouquíssimos dias.</p>'+
	    					
	    					'<img src="images/modal/construcao-civil.png" class="bg-modal">'+

							'<p class="modal-text">Na Russel Serviços o profissional é entregue com toda essa documentação resolvida em até 48 horas, além de realizar a substituição/reposição em até 24 horas e sem custos adicionais, se o trabalhador não se encaixar ao perfil da empresa. Sem perder tempo, sem burocracias, sem precisar fazer seleções e recrutamentos. Não existem dúvidas, terceirizar mão de obra para o segmento de construção civil é a melhor opção. Empresas como Gafisa, Brookfield, EVEN, Odebretcht, Calper, RJZCyrela já entenderam isso e escolheram terceirizar com a Russel Serviços.</p>'+
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
		'<div id="modal_consultores_espec" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Consultores Especializados</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Possuímos uma equipe de consultores especializados que realizam o atendimento aos clientes, auxiliando na resolução de seus problemas e sugerindo soluções para suas empresas otimizarem tempo e dinheiro em suas contratações de mão de obra.</p>'+
	    					
	    					'<img src="images/modal/consultor-especializado.png" class="bg-modal">'+

							'<p class="modal-text">Nossos colaboradores estão sempre comprometidos com a eficiência no atendimento, qualidade de nossos serviços e na criação de relações comerciais éticas e transparentes.</p>'+
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

	var $modal_plataforma_on = 
		'<div id="modal_plataforma_on" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Plataforma Online</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-3 col-sm-offset-1">'+
	    					'<img src="images/modal/Modal-13.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-7">'+
	    					'<p class="modal-text">Para agilizar a contratação de profissionais qualificados e facilitar o trabalho dos gestores, fomos pioneiro no mercado e lançamos a 1ª plataforma de contratação de mão de obra online do Brasil. '+
							'Através do site é possível o cliente escolher o profissional que deseja contratar e após a confirmação do pagamento, implantamos em até 48 horas  o profissional com toda a documentação necessária e apto para a realização do trabalho. '+
							'</p>'+
	    				'</div>'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<br><br>'+

	    					'<div style="position: relative;"><div class="play-button" style="top: 43%;"><img src="images/modal/play-33.svg" class="bg-modal"></div>'+

	    					'<video width="100%" height="100%" poster="images/modal/Modal-14.png">'+
								'<source src="videos/plataforma_online.mp4" type="video/mp4">'+
								'Your browser does not support the video tag.'+
								'<img data-src="image.png">'+
							'</video></div>'+

	    					'<p class="modal-text">Acompanhando as tendências tecnológicas, nosso site possui design responsivo para facilitar o acesso do usuário no celular e tablet, o que permite realizar compras pelos mesmos, além de um chat online para sanar todas as dúvidas do cliente. O objetivo do projeto é facilitar a vida do gestor que tem o dia a dia corrido e pouco tempo para perder em pesquisas e contratações de mão de obra.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Em 2017 recebemos o Prêmio Quality Brasil 2017 pelo desenvolvimento da 1ª plataforma de contratação de mão de obra online do país.'+
							'</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Velocidade</a></li>'+
	    						'<li><a>Segurança</a></li>'+
	    						'<li><a>Comodidade</a></li>'+
	    						'<li><a>Facilidade de Pagamento</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_premios =
		'<div id="modal_premios" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Prêmios</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Sempre em busca de axcelência e através de um trabalho em conjunto de toda equipe interna, a Russel Serviços adquiriu o Certificado de Qualidade ISO 9001, o que trouxe ainda mais credibilidade à empresa, além da conquista de prêmios pelos diferenciais que apresentamos ao mercado.</p>'+
							'<img src="images/modal/premios.png" class="bg-modal">'+
	    				'</div>'+

	    			'</div>'+
	    			'<div class="row bg1">'+
	    				'<div class="col-sm-2 col-sm-offset-1">'+
	    					'<img src="images/modal/selo-35.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-8">'+
	    					'<p class="title">Prêmio Quality Brasil 2017</p>'+
	    					'<p>Homenagem pelo desenvolvimento da primeira plataforma de contratação de mão de obra online do Brasil.</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row bg2">'+
	    				'<div class="col-sm-2 col-sm-offset-1">'+
	    					'<img src="images/modal/selo-36.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-8">'+
	    					'<p class="title">Prêmio Empresa Referência Nacional & Qualidade Empresarial</p>'+
	    					'<p>Homenagem da Agência Nacional de Cultura Empreendedorismo e Comunicação por ser a única empresa do Brasil a fornecer mão de obra operacional em até 48 horas.</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row bg3">'+
	    				'<div class="col-sm-2 col-sm-offset-1">'+
	    					'<img src="images/modal/iso-34.svg" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-8">'+
	    					'<p class="title">Certificado ISO 9001</p>'+
	    					'<p>Garante qualidade em todos nossos processos internos.</p>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

    var $modal_logistica =
    	'<div id="modal_logistica" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Logística</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-7 col-sm-offset-1">'+
	    					'<p class="modal-text">Sempre em busca de axcelência e através de um trabalho em conjunto de toda equipe interna, a Russel Serviços adquiriu o Certificado de Qualidade ISO 9001, o que trouxe ainda mais credibilidade à empresa, além da conquista de prêmios pelos diferenciais que apresentamos ao mercado.</p>'+
	    				'</div>'+
	    				'<div class="col-sm-3">'+
							'<img src="images/modal/Modal_v2-25.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Com a terceirização feita da forma correta, a empresa de logística pode resolver a dificuldade em encontrar profissionais de diversos níveis de forma bem rápida. É importante lembrar que a contratação de profissionais capacitados resolve não só a ausência de mão de obra qualificada disponível, mas também problemas com controle de estoque e implantação de novas tecnologias. Um profissional capacitado conseguirá realizar as contas da demanda da melhor maneira, para que não haja dinheiro parado ou falta de estoque, por exemplo. Além disso, com a terceirização a empresa economiza tempo, dinheiro e evita dores de cabeça.</p>'+
	    					
	    					'<img src="images/modal/Modal_v2-24.png" class="bg-modal">'+
	    					
	    					'<p class="modal-text">A Russel Serviços assegura a entrega do profissional em até 48 horas com todas as documentações resolvidas, além de se responsabilizar por todas as obrigações trabalhistas, legais e civis, livrando a empresa de possíveis encargos trabalhistas. A Russel Serviços ainda garante um plano B: muitos gestores do segmento de logística tiveram experiências ruins com fornecedores que não apresentavam uma alternativa, quando o funcionário contratado não se encaixa ao perfil da empresa. Porém, na Russel Serviços a substituição/reposição é feita em até 24 horas e sem custos adicionais.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Ajudante de Armazém</a></li>'+
	    						'<li><a>Ajudante de Carga e Descarga</a></li>'+
	    						'<li><a>Ajudante de Logística</a></li>'+
	    						'<li><a>Auxiliar de Expedição</a></li>'+
	    						'<li><a>Motorista de Bi Trem</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Motorista de Caminhão</a></li>'+
	    						'<li><a>Motorista de Carreta</a></li>'+
	    						'<li><a>Motorista de Munck</a></li>'+
	    						'<li><a>Motorista de Operador de Guincho</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/logistica/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_petroleo_gas =
		'<div id="modal_petroleo_gas" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Petróleo e Gás</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">São muitas as preocupações que circundam o segmento de Petróleo e Gás, seus investidores e gestores. Desafios com pesquisa e desenvolvimento, conteúdo local, segurança jurídica e tributária e contratação de mão de obra são muito comuns. Então, porque não optar por uma alternativa que diminui as dores de cabeça e aumenta os lucros?</p>'+

	    					'<img src="images/modal/Modal_v2-23.png" class="bg-modal">'+

	    					'<p class="modal-text">Por meio da terceirização de mão de obra, a empresa de petróleo e gás estará resolvendo alguns de seus maiores problemas. Com a terceirização, essas empresas podem ter segurança pelo menos no que tange à contratação de profissionais qualificados que, por sua vez, estão em falta no mercado. Ao realizar essa contratação de forma rápida e segura, o problema de precariedade da logística também é resolvido.</p>'+

	    					'<p class="modal-text">Com a Russel Serviços, os benefícios só aumentam. O profissional é entregue em até 48 horas com toda a documentação resolvida e exames médicos realizados, podendo haver a substituição/reposição do profissional que não se encaixar ao perfil da empresa em até 24 horas e sem custos adicionais. Além disso, é preciso que a empresa tenha condições de competir não apenas no mercado interno, mas dentro de cadeias globais de valor. A divisão das etapas produtivas para prestadoras de serviços terceirizados é instrumento essencial para o acesso a melhores técnicas, tecnologias e eficiência.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Soldador</a></li>'+
	    						'<li><a>Moço de Convés</a></li>'+
	    						'<li><a>Bombeador - Embarcação de Apoio</a></li>'+
	    						'<li><a>Mergulhador</a></li>'+
	    						'<li><a>Alpinista</a></li>'+
	    						'<li><a>Capitão - Embarcação de Apoio</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Chefe de Máquinas - Embarcação de Apoio</a></li>'+
	    						'<li><a>Comandante</a></li>'+
	    						'<li><a>Eletricista</a></li>'+
	    						'<li><a>Esmerilhador</a></li>'+
	    						'<li><a>Imediato</a></li>'+
	    						'<li><a>Marinheiro de Convés</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/terceirizacao-de-mao-de-obra-petroleo-e-gas-e-offshore/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_varejo =
		'<div id="modal_varejo" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Varejo</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-7 col-sm-offset-1">'+
	    					'<p class="modal-text">O varejo é considerado um dos maiores setores da economia mundial, sendo responsável pela disponibilização do produto para o consumidor de forma rápida e eficaz. Sua importância é tão grande que podemos considerá-lo como o novo “chefe” da cadeia de distribuição, já que atacadistas e fabricantes estabeleceram uma relação de dependência com o segmento. Existe, porém, um grande obstáculo no caminho do varejo brasileiro: mão de obra. A dificuldade em encontrar profissionais capacitados é tão grande que as empresas têm dificuldades de continuar seus planos de expansão. Além disso, a falta de investimento e profissionalização fez do varejo uma opção de primeiro emprego ou subemprego para muitas pessoas. Então, como encontrar pessoal realmente qualificado e apto para o trabalho?</p>'+
	    				'</div>'+
	    				'<div class="col-sm-3">'+
							'<img src="images/modal/Modal_v2-28.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Por meio da terceirização, os gestores podem conseguir isso de forma bem rápida e segura. Empresas fornecedoras de mão de obra implantam o profissional em pouco tempo e resolvem também as documentações e exames médicos necessários. Antes da implantação, a empresa fornecedora realiza a seleção, recrutamento, treinamento e capacitação do candidato e depois fica responsável por todos os encargos trabalhistas. Fica a cargo do gestor apenas as orientações diárias sobre a melhor forma de realizar as tarefas para a empresa.</p>'+
	    					
	    					'<img src="images/modal/Modal_v2-26.png" class="bg-modal">'+
	    					
	    					'<p class="modal-text">Na Russel Serviços todo esse processo dura apenas 48 horas, ou seja, o profissional é implantado com toda documentação resolvida em até 2 dias. Em casos de necessidade de substituição/reposição do profissional, a Russel Serviços realiza o procedimento sem custos adicionais em até 24 horas. O que você está esperando para contratar sua mão de obra de varejo da forma mais rápida e segura possível? Terceirize com a Russel Serviços.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Repositor</a></li>'+
	    						'<li><a>Vendedor</a></li>'+
	    						'<li><a>Auxiliar de Depósito</a></li>'+
	    						'<li><a>Promotor de Venda</a></li>'+
	    						'<li><a>Auxiliar de Escritório</a></li>'+
	    						'<li><a>Auxiliar de Serviços Gerais</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Balconista</a></li>'+
	    						'<li><a>Empacotador</a></li>'+
	    						'<li><a>Estoquista</a></li>'+
	    						'<li><a>Etiquetador</a></li>'+
	    						'<li><a>Operador de Caixa</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/varejo/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

    var $modal_energia =
    	'<div id="modal_energia" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Energia</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">O segmento de energia é de extrema importância para as empresas em geral, que necessitam de profissionais capacitados para exercer diversas funções da área. Por serem serviços perigosos, específicos e complexos, encontrá-los é uma difícil missão. Encontrar mão de obra capacitada e qualificada é mais raro ainda. Então, o que fazer?</p>'+

	    					'<img src="images/modal/Modal_v2-27.png" class="bg-modal">'+

	    					'<p class="modal-text">Ao optar pela terceirização, o gestor de uma empresa que precise de serviços elétricos pode confiar na implantação rápida e segura de profissional qualificado. Além disso, a empresa fornecedora fica responsável por resolver toda documentação e por lidar com os encargos trabalhistas. Ou seja, o gestor não precisa se preocupar com as obrigações trabalhistas, fiscais e legais, já que fica a cargo da empresa contratada.</p>'+

	    					'<p class="modal-text">É preciso saber escolher de forma correta a fornecedora de mão de obra. Na Russel Serviços, o profissional é implantado em até 48 horas junto à toda documentação resolvida. Além disso, se o mesmo não se encaixar ao perfil da empresa, a Russel Serviços garante a sua reposição/substituição em até 24 horas e sem custos adicionais.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Cabista</a></li>'+
	    						'<li><a>Eletricista de inspeção e ligação</a></li>'+
	    						'<li><a>Eletricista de linha viva</a></li>'+
	    						'<li><a>Eletricista enrolador de transformadores</a></li>'+
	    						'<li><a>Eletricista podador</a></li>'+
	    						'<li><a>Emendador</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Encarregado de Inspeção e Normalização</a></li>'+
	    						'<li><a>Encarregado de Turma de Linha Morta</a></li>'+
	    						'<li><a>Montador de Transformadores</a></li>'+
	    						'<li><a>Operador de Guindauto</a></li>'+
	    						'<li><a>Supervisor de Manutenção Elétrica</a></li>'+
	    						'<li><a>Técnico de Inspeção e Normalização</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/energia/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

    var $modal_inspecao_end =
    	'<div id="modal_inspecao_end" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Inspeção e Ends</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-7 col-sm-offset-1">'+
	    					'<p class="modal-text">No atual mercado cada vez mais competitivo, é essencial que as empresas realizem o controle de qualidade de seus materiais e produtos. Neste sentido, entram os Ensaios Não Destrutivos, principal forma de manter a qualidade de bens e serviços, preservação do ambiente e redução dos custos. Esses ensaios são amplamente utilizados nos setores siderúrgico, naval, petróleo e gás, eletromecânico e outros, e representam um conjunto de técnicas de análise utilizadas na indústria e na ciência para avaliar as propriedades de um material, componente ou sistema, sem causar danos. Porém, por ser um segmento muito específico e complexo, são poucos os profissionais capacitados disponíveis. Então, como encontrá-los?</p>'+
	    				'</div>'+
	    				'<div class="col-sm-3">'+
							'<img src="images/modal/Modal_v2-29.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Empresas especializadas em fornecer mão de obra fazem esse serviço de forma rápida, fácil e segura. Ao optar pela terceirização, as empresas não precisam se preocupar com a seleção e recrutamento de candidatos, muito menos com seu treinamento e capacitação. Além disso, todos os encargos trabalhistas ficam por conta da empresa fornecedora, evitando possíveis dores de cabeça futuras.</p>'+
	    					
	    					'<img src="images/modal/Modal_v2-30.png" class="bg-modal">'+
	    					
	    					'<p class="modal-text">Com a Russel Serviços, esses e outros benefícios estão mais do que garantidos. Além de implantar o profissional escolhido em até 48 horas com toda a documentação resolvida, a empresa assegura a substituição/reposição desse profissional, se o mesmo não se enquadrar ao perfil solicitado. Esse processo acontece sem custos adicionais e em 24 horas. Ao escolher a Russel Serviços para fornecer mão de obra, a empresa elimina os problemas de contratação e pode focar no que realmente importa, sua atividade-fim.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Assistente de Inspeção de Ultrassom</a></li>'+
	    						'<li><a>Inspetor de Estanqueidade</a></li>'+
	    						'<li><a>Inspetor de Dutos</a></li>'+
	    						'<li><a>Inspetor de Equipamentos</a></li>'+
	    						'<li><a>Inspetor de Fabricação</a></li>'+
	    						'<li><a>Inspetor de Partículas Magnéticas</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Inspetor de Pintura</a></li>'+
	    						'<li><a>Inspetor de Solda</a></li>'+
	    						'<li><a>Inspetor de Ultrassom</a></li>'+
	    						'<li><a>Inspetor Dimensional</a></li>'+
	    						'<li><a>Inspetor Visual de Solda</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/inspecao-e-ends/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_captacao_selecao = 
		'<div id="modal_captacao_selecao" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Russel Vagas</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Possuímos um extenso banco de profissionais que é alimentado desde a fundação de nossa empresa. Para digitalizar o processo de recebimento de currículos e ajudar a quem está na busca de emprego, lançamos o Russel Vagas, uma plataforma gratuita de oportunidades de empregos que têm como função promover a integração entre os melhores talentos do mercado e empresas que buscam por novos profissionais em seus processos seletivos.</p>'+

	    					'<div class="play-button"><img src="images/modal/play-33.svg" class="bg-modal"></div>'+

	    					'<video width="100%" height="100%" poster="images/modal/Modal_v3-27.png">'+
								'<source src="videos/russel_vagas.mp4" type="video/mp4">'+
								'Your browser does not support the video tag.'+
								'<img data-src="image.png">'+
							'</video>'+

	    					'<p class="modal-text">Criamos um site leve, com design responsivo para celulares e tablets, sempre com o objetivo de ser o mais simples possível para o usuário. Há vagas para níveis operacionais e gerenciais de segmentos como construção civil, hotelaria, varejo, petróleo e gás, indústria, administração, comercial e logística, entre outros.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Outras empresas também podem cadastrar suas vagas gratuitamente para selecionarem currículos de candidatos.</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="http://russelvagas.com.br/" target="_blank">Conheça o Russel Vagas</a></button><br><br><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_eventos =
		'<div id="modal_eventos" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Eventos</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">As empresas produtoras de eventos, bem como as empresas que desejam realizar festividades internas para seus colaboradores encontram um grande dilema: onde conseguir mão de obra qualificada e de forma rápida para a realização de seus projetos?</p>'+

	    					'<img src="images/modal/Modal_v3-2.png" class="bg-modal">'+

	    					'<p class="modal-text">Para encontrar profissionais capacitados uma boa alternativa é optar por contratar profissionais através de uma empresa especializada em fornecimento de mão de obra. Com a terceirização, o gestor não precisa se preocupar com seleção, recrutamento, treinamento e capacitação, já que a empresa contratada assegura a realização dessas etapas. Além disso, também é de responsabilidade da empresa fornecedora os encargos trabalhistas, ou seja, o gestor não precisará lidar com as obrigações trabalhistas, fiscais e legais.</p>'+
	    					
	    					'<p class="modal-text">Na Russel Serviços os profissionais são implantados em até 48 horas com toda a  documentação resolvida, além de serem treinados e instruídos da melhor forma de como devem se portar ao cliente. Caso o profissional não se adeque às normas estabelecidas pela empresa, a Russel Serviços realiza a substituição/reposição em até 24 horas e sem custos adicionais. Não demore mais, tempo é dinheiro no área de eventos!</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Agente de Segurança</a></li>'+
	    						'<li><a>Ajudante de Montagem</a></li>'+
	    						'<li><a>Auxiliar de Carga e Descarga</a></li>'+
	    						'<li><a>Auxiliar de Limpeza</a></li>'+
	    						'<li><a>Barman</a></li>'+
	    						'<li><a>Bilheteiro</a></li>'+
	    						'<li><a>Controlador de Acesso</a></li>'+
	    						'<li><a>Copeira</a></li>'+
	    						'<li><a>Cozinheiro</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Eletricista</a></li>'+
	    						'<li><a>Garçom</a></li>'+
	    						'<li><a>Manobrista</a></li>'+
	    						'<li><a>Operador de Áudio</a></li>'+
	    						'<li><a>Promotor de Eventos</a></li>'+
	    						'<li><a>Recepcionista</a></li>'+
	    						'<li><a>Segurança</a></li>'+
	    						'<li><a>Técnico de Iluminação</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/eventos/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_operador_maquina =
		'<div id="modal_operador_maquina" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Operador de Máquinas</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Os gestores de obras na construção civil, demolição, mineração e outros empreendimentos em geral possuem muitos desafios na contratação de mão de obra e dentro deste panorama se encontram os operadores de máquinas pesadas. Os cuidados para contratar um operador de máquina pesada devem ser redobrados, pois colocar um profissional em um equipamento sem os cuidados básicos e sem que o mesmo não possua qualificação necessária é um grande risco.</p>'+

	    					'<img src="images/modal/Modal_v3-28.png" class="bg-modal">'+

	    					'<p class="modal-text">A operação de algumas máquinas exige, ainda, que os profissionais tenham Carteira Nacional de Habilitação (CNH) tipos D e E, que permitem conduzir veículos pesados, como ônibus e caminhões. Porém, muitas das vezes o contratante não tem tempo hábil nem ferramentas para realizar a contratação adequada de um profissional que possua características como concentração, habilidades matemáticas, atenção, memória auditiva e visual e outros.</p>'+
	    					
	    					'<p class="modal-text">Nesse sentido, entram as empresas fornecedoras de mão de obra que além de implantarem o profissional desejado em pouco tempo, resolvem toda a documentação. Além disso, o gestor pode ficar livre de todos os encargos trabalhistas, pois a empresa fornecedora se responsabiliza por todas as obrigações trabalhistas, legais e fiscais.</p>'+

	    					'<img src="images/modal/Modal_v3-29.png" class="bg-modal">'+

	    					'<p class="modal-text">Com a Russel Serviços, existem ainda mais benefícios, pois o profissional é implantado em apenas 48 horas e se o mesmo não se encaixar ao perfil desejado pela empresa, a Russel Serviços realiza a substituição/reposição em até 24 horas e sem custos adicionais.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Operador de Bate Estaca</a></li>'+
	    						'<li><a>Operador de Cremalheira</a></li>'+
	    						'<li><a>Operador de Empilhadeira</a></li>'+
	    						'<li><a>Operador de Escavadeira</a></li>'+
	    						'<li><a>Operador de Grua</a></li>'+
	    						'<li><a>Operador de Guindaste</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Operador de Micro Trator</a></li>'+
	    						'<li><a>Operador de Mini Escavadeira</a></li>'+
	    						'<li><a>Operador de Munck</a></li>'+
	    						'<li><a>Operador de Pá Carregadeira</a></li>'+
	    						'<li><a>Operador de Retroescavadeira</a></li>'+
	    						'<li><a>Operador de Rolo Compactado</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="http://www.russelservicos.com.br/categoria-produto/operador-de-maquina/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_hotelaria =
		'<div id="modal_hotelaria" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Hotelaria</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">A cada ano o turismo brasileiro vem crescendo e com isso já somos a sexta economia mundial no setor. Devido a esse crescimento o desenvolvimento da atividade turística demanda um investimento cada vez maior para garantir a oferta de leitos na rede hoteleira. Esse crescimento faz com que cresça também a procura por mão de obra qualificada, um fator preocupante para o setor, já que não se encontra com facilidade profissionais devidamente qualificados.</p>'+

	    					'<img src="images/modal/Modal_v3-34.png" class="bg-modal">'+

	    					'<p class="modal-text">Não ter mão de obra qualificada pode acarretar uma série de problemas para o hotel e assim como em qualquer outra empresa é preciso garantir a produtividade. Um péssimo atendimento ou serviço prestado abaixo do esperado resulta muitas vezes na insatisfação do cliente, que com certeza não procurará mais o estabelecimento em uma próxima ocasião. Uma das formas de driblar a falta de mão de obra qualificada no mercado é buscar por empresas de terceirização que trabalhem com hotelaria.</p>'+
	    					
	    					'<p class="modal-text">A terceirização permite que a empresa escolha com mais cautela profissionais mais aptos e treinados para o cargo desejado. Além disso, é possível realizar reposição e substituição do funcionário de forma mais rápida, caso o cliente tenha algum problema. Um outro bom motivo para terceirizar serviços é que o hotel fica livre da folha de pagamento do colaborador, assim como encargos e documentações. Tudo isso evita que o estabelecimento aumente seus custos com programas estruturados de treinamentos. A única responsabilidade que o hotel tem é passar as tarefas diárias para o profissional contratado.</p>'+

	    					'<img src="images/modal/Modal_v3-33.png" class="bg-modal">'+

	    					'<p class="modal-text">A Russel Serviços, empresa especializada no fornecimento de mão de obra operacional com experiência de 12 anos no mercado, implanta o profissional pronto para o trabalho em até 48 horas com toda documentação. Uma excelente opção para o setor hoteleiro que busca por mão de obra qualificada e agilidade.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Atendente</a></li>'+
	    						'<li><a>Auxiliar de Serviços Gerais</a></li>'+
	    						'<li><a>Barman</a></li>'+
	    						'<li><a>Barman Bilíngue</a></li>'+
	    						'<li><a>Camareira</a></li>'+
	    						'<li><a>Cozinheiro</a></li>'+
	    						'<li><a>Cumin</a></li>'+
	    						'<li><a>Estoquista</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Fiscal de Patrimônio</a></li>'+
	    						'<li><a>Garçom</a></li>'+
	    						'<li><a>Governanta</a></li>'+
	    						'<li><a>Jardineiro</a></li>'+
	    						'<li><a>Lavadeira</a></li>'+
	    						'<li><a>Motorista</a></li>'+
	    						'<li><a>Recepcionista</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/hotelaria/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_aeroporto =
		'<div id="modal_aeroporto" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Aeroporto</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-7 col-sm-offset-1">'+
	    					'<p class="modal-text">Com o advento da globalização e dos avanços tecnológicos, a movimentação de pessoas e de cargas nos aeroportos é cada dia maior. Por isso, é preciso muita organização para que todas as funções estejam bem definidas e o cliente fique satisfeito. Além disso, o segmento de aeroportos é caracterizado por possuir muita demanda, logo ao procurar mão de obra, o gestor precisa encontrá-la de forma rápida e eficaz. Mas como fazer isso tendo tantas outras tarefas?</p>'+
	    				'</div>'+
	    				'<div class="col-sm-3">'+
							'<img src="images/modal/Modal_v3-30.png" class="bg-modal">'+
	    				'</div>'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">A resposta é simples: terceirização. Ao optar por parcerias com empresas fornecedoras de mão de obra capacitada, o gestor pode se concentrar em sua atividade-fim e deixar que a empresa contratada resolva todos os processos da contratação de funcionários capacitados. Dessa forma, o profissional é implantado de forma rápida e fácil, as documentações são todas resolvidas e os encargos trabalhistas ficam por conta da empresa fornecedora.</p>'+
	    					
	    					'<img src="images/modal/Modal_v3-32.png" class="bg-modal">'+
	    					
	    					'<p class="modal-text">Na Russel Serviços o serviço extremamente rápido e seguro. O profissional é implantado em até 48 horas e se não conseguir se encaixar ao perfil desejado pela empresa, a Russel Serviços garante a substituição/reposição em até 24 horas, sem custos adicionais. Documentação resolvida, profissionais de qualidade e rapidez no processo.</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Agente de Aeroporto</a></li>'+
	    						'<li><a>Atendente de Estacionamento</a></li>'+
	    						'<li><a>Auxiliar de Enfermagem</a></li>'+
	    						'<li><a>Auxiliar de Rampa</a></li>'+
	    						'<li><a>Emissor de Passagem Aérea</a></li>'+
	    						'<li><a>Fiscal de Pátio</a></li>'+
	    						'<li><a>Mecânico de Aeronaves</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Operador de Aparelho Raio X</a></li>'+
	    						'<li><a>Operador de Docas com Plataformas Niveladoras</a></li>'+
	    						'<li><a>Operador de Loader</a></li>'+
	    						'<li><a>Operador de Pushback</a></li>'+
	    						'<li><a>Operador de Rampa</a></li>'+
	    						'<li><a>Operador de Transelevadores</a></li>'+
	    						'<li><a>Separador de Carga Aérea</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/aeroporto/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	var $modal_restaurantes =
		'<div id="modal_restaurantes" class="section pp-scrollable">'+
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
	    		'<div class="container-fluid">'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Restaurantes</p>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="modal-text">Administrar um bar ou restaurante não é tarefa fácil. O gestor precisa ter habilidades complexas com relação ao gerenciamento de custos, planejamento, acompanhamento de indicadores comerciais, zelo pelo atendimento ao cliente e outras. Em um cenário cada vez mais competitivo, um grande problema enfrentado pelo segmento é a escassez de mão de obra qualificada, cujo alto índice de rotatividade prejudica ainda mais o andamento do negócio.</p>'+

	    					'<img src="images/modal/Modal_v3-31.png" class="bg-modal">'+

	    					'<p class="modal-text">Ao optar pela terceirização, o gestor pode contratar o profissional desejado de forma rápida, fácil e segura. Os processos de seleção, recrutamento, treinamento e capacitação ficam a cargo da empresa fornecedora, além da responsabilidade com as documentações e exames médicos. O gestor não precisará se preocupar com os encargos trabalhistas, pois a empresa contratada é quem lida com as obrigações trabalhistas, legais e fiscais de cada profissional contratado.</p>'+
	    					
	    					'<p class="modal-text">Optando por terceirizar com a Russel Serviços, a empresa ganha também outros benefícios. A implantação do profissional contratado é feita em até 48 horas, assim como a documentação e exames médicos. Se o profissional não estiver de acordo com o perfil desejado da empresa, a Russel Serviços apresenta uma ótima alternativa: substituição/reposição do mesmo em até 24 horas e sem custos adicionais. Valorize seu tempo!</p>'+
	    					'<hr>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row sectionUp">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<p class="page-title modal-title">Confira alguns profissionais do segmento que são disponibilizados pela Russel Serviços:</p>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Ajudante de carga e descarga</a></li>'+
	    						'<li><a>Ajudante de cozinha</a></li>'+
	    						'<li><a>Atendente</a></li>'+
	    						'<li><a>Auxiliar de serviços gerais</a></li>'+
	    						'<li><a>Barman</a></li>'+
	    						'<li><a>Caixa</a></li>'+
	    						'<li><a>Chefe de cozinha</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    				'<div class="col-sm-5 col-sm-offset-1">'+
	    					'<ul>'+
	    						'<li><a>Churrasqueiro</a></li>'+
	    						'<li><a>Confeiteiro</a></li>'+
	    						'<li><a>Garçom</a></li>'+
	    						'<li><a>Padeiro</a></li>'+
	    						'<li><a>Pizzaiolo</a></li>'+
	    						'<li><a>Sushiman</a></li>'+
	    					'</ul>'+
	    				'</div>'+
	    			'</div>'+
	    			'<div class="row">'+
	    				'<div class="col-sm-10 col-sm-offset-1">'+
	    					'<button class="saiba-mais saiba-mais-modal"><a href="https://www.russelservicos.com.br/categoria-produto/eventos/" target="_blank">veja mais no site</a></button><br>'+
	    				'</div>'+
	    			'</div>'+
	    		'</div>'+
	    	'</div>'+
	    '</div>';

	//adding the actions to the buttons
	$(document).on('click', '.modalOn', function() {
		var modal,
			data = $(this).data('model');

		if (data == "administrativo") {
			modal = $modal_administrativo;
		} else if (data == "construcao_civil") {
			modal = $modal_const_civil;
		} else if (data == "consultores_especializados") {
			modal = $modal_consultores_espec;
		} else if (data == "modalidade_contratacao") {
			modal = $modal_modalidade_contratacao;
		} else if (data == "plataforma_online") {
			modal = $modal_plataforma_on;
		} else if (data == "premios") {
			modal = $modal_premios;
		} else if (data == "logistica") {
			modal = $modal_logistica;
		} else if (data == "petroleo_gas") {
			modal = $modal_petroleo_gas;
		} else if (data == "varejo") {
			modal = $modal_varejo;
		} else if (data == "energia") {
			modal = $modal_energia;
		} else if (data == "inspecao_end") {
			modal = $modal_inspecao_end;
		} else if (data == "captacao_selecao") {
			modal = $modal_captacao_selecao;
		} else if (data == "eventos") {
			modal = $modal_eventos;
		} else if (data == "operador_maquina") {
			modal = $modal_operador_maquina
		} else if (data == "restaurantes") {
			modal = $modal_restaurantes;
		} else if (data == "hotelaria") {
			modal = $modal_hotelaria;
		} else if (data == "aeroporto") {
			modal = $modal_aeroporto;
		}

		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
		//$(this).parents('.section').addClass('fix').find('.content').hide().next().addClass('modalOn');
		$('#modalToSection').removeClass('hidden').addClass('animated bounceInRight').removeClass('bounceOutRight');
		$('#modalToSection').append(modal);
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
	document.getElementsByClassName('btn-home')[1].onclick = function() {
		$.fn.fullpage.moveSectionDown();
	}

	$(document).on('click', '.oque-somos li a', function() {
		var number_section = $(this).data('section'),
			model = $(this).data('model');
		if (number_section) {
			$('.modal-menu').addClass('animated bounceOutRight').removeClass('bounceInRight');
			$('.modal-menu').hide();
			$('#menu').removeClass('cross')
			if (!model) {
				$('#fp-nav').show();
			}
			$.fn.fullpage.moveTo(number_section);
		}
	});

	$(document).on('click', 'video', '.play-button', function() {
		$('.play-button').hide();
		document.getElementsByTagName('video')[0].setAttributeNode(document.createAttribute("controls"));
		document.getElementsByTagName('video')[0].play();
	});

	$('.sliderx').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
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