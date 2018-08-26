jQuery(document).ready(function($) {

	//Slider
	$(window).on('load', function(){  
	    $('#slider').nivoSlider(); 
	});

	//Menu
	$('.menu > li').click(function(event) {
		event.preventDefault;
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active');
		$(this).find('ul').slideToggle();
		$(this).siblings().find('ul').slideUp();
	});

	//Scroll Top
	$('.top a').click(function(event) {
	    event.preventDefault;
	    $('html,body').animate({
	      scrollTop: 0
	      },2000);
 	});

 	//Lightbox
 	lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });

});

