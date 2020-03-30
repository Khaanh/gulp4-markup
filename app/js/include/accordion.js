$('.acc-header').on('click', function(e) {
  e.preventDefault();
  let $this = $(this);

  if (!$this.hasClass('header-active')) {
    $('.acc-body').slideUp(500);
    $('.acc-header').removeClass('header-active');
    $('.acc-icon').removeClass('icon-active');
  }

  $this.toggleClass('header-active');
  $this.next().slideToggle(300);
  $('.acc-icon',this).toggleClass('icon-active');
})