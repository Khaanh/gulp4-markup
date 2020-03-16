$('.tabslink').on('click', function(e) {
  let id = $(this).attr('href')
  $(this).closest('.tabs').siblings('.holder-content').find('.tabcontent').removeClass('active')
  $(this).addClass('active').siblings('.tabslink').removeClass('active')
  $('#' + id).addClass('active')
  e.preventDefault();
})
