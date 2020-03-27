$('.js-close-menu').on('click', function() {
  $(this).next().toggleClass('inactive')

  if ($('.html-list').hasClass('inactive')) {
    $(this).find('span').text('Open list')
  } else {
    $(this).find('span').text('Close list')
  }
})