const scrollWidth = window.innerWidth - document.body.clientWidth + 'px';

$('.js-modal-open').on('click', function(e) {
  let targetMod = $(this).data('target'),
      openMod = $(`.modal[data-open=${targetMod}]`);

  openMod.addClass('active');
  $('body').css({
    'padding-right': `${scrollWidth}`
  }).addClass('modal-open');
  e.preventDefault();
})

$('.js-modal-close').on('click', function() {
  $(this).closest('.modal').removeClass('active');
  $('body').css({
    'padding-right': ''
  }).removeClass('modal-open');
})
