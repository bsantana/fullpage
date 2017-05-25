$(document).ready(function() {

	var slideIndex  = 1,
		sliding     = false;
	$('#fullpage').fullpage({

	  sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
	  scrollHorizontally: true,
	  navigation: true,
	  showActiveTooltip: true
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
	$('.pagepiling').pagepiling({
		direction: 'vertical',
		sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
		sectionSelector: '.section2',
	});
//});

	//var $section2 = $('.section:eq(1)').detach();
	//var $section3 = $('.section:eq(2)').detach();

	//$($section2).appendTo('#fullpage');

	//adding the actions to the buttons
	$(document).on('click', '.buttonOn', function() {
	  $.fn.fullpage.setAllowScrolling(false);
	  $.fn.fullpage.setKeyboardScrolling(false);
	  $(this).parents('.section').addClass('fix').find('.content').hide().next().addClass('modalOn');
	});

	$(document).on('click', '.buttonOff', function() {
	  $.fn.fullpage.setAllowScrolling(true);
	  $.fn.fullpage.setKeyboardScrolling(true);
	  $(this).parents('.section').removeClass('fix').find('.content').show().next().removeClass('modalOn');
	});
});