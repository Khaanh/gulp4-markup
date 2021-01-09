$(window).on('scroll', function() {
  // Active header
  if( $(this).scrollTop() > 150) {
    $('.header').addClass('is-fixed')
  } else {
    $('.header').removeClass('is-fixed')
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


// Following Scroll
$('.nav > ul > li > a').on( 'click', function(){ 
  let link = $(this);
  let dest = link.attr('href'); 
  if(dest !== undefined && dest !== '') {
    $('html').animate({ 
      scrollTop: $(dest).offset().top - 86
    }, 1000);
  }
  return false;
});

// Start from top
// $(window).on('beforeunload', function() {
//   $(window).scrollTop(0);
// })