$(window).on('scroll', function() {
  // Active header
  if( $(this).scrollTop() > 150) {
    $('.header').addClass('active')
  } else {
    $('.header').removeClass('active')
  }
  
  // Active btn to top
  if( $(this).scrollTop() > 300) {
    $('.back-to-top').addClass('show')
  } else {
    $('.back-to-top').removeClass('show')
  }
})

// Scroll next section
$('.js-scroll-next').click(function(e) {
  let next = $(this).closest('.hero').next('#next-section').offset().top;
  $('html, body').animate({scrollTop: next}, 'slow');
  e.preventDefault();
})

// Acttion btn to top
$('.back-to-top').on('click', function() {
  $('html, body').animate({scrollTop:0}, 500)
  return false;
})

// Init Malihu plugin
$('.scroll-text').mCustomScrollbar();