$(document).ready(function(){
	
	$(window).on('scroll', function() {
		if( $(this).scrollTop() > 150) {
			$('.header').addClass('active')
		} else {
			$('.header').removeClass('active')
		}
	})



    $('#up').click(function() {
    	$('html, body').animate({scrollTop: 0},500);
    	console.log('sadas')
    	return false;
    })

});


