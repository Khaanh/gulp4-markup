$('.js-toggleAcc').on('click', function(e) {
  e.preventDefault();
  let $this = $(this);

  if (!$this.hasClass('is-active')) {
    $('.acc-body').slideUp(500);
    $('.js-toggleAcc').removeClass('is-active');
    $('.acc-icon').removeClass('is-rotated');
  }

  $this.toggleClass('is-active');
  $this.next().slideToggle(300);
  $('.acc-icon',this).toggleClass('is-rotated');
})