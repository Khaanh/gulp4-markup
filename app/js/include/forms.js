  $('.quantity-plus').on('click', function() {
    const field = $(this).siblings('.quantity-holder').find('.quantity-count'),
    maxValue = field.attr('max'),
    minValue = field.attr('min'),
    value = parseInt(field.val());
    if (value < maxValue) {
      field.attr('value', `${value + 1}`);
    } else {
      return false;
    }
  })

  $('.quantity-minus').on('click', function() {
    const field = $(this).siblings('.quantity-holder').find('.quantity-count'),
    maxValue = field.attr('max'),
    minValue = field.attr('min'),
    value = parseInt(field.val());
    if (value >= minValue) {
      field.attr('value', `${value - 1}`);
    } else {
      return false;
    }
  })

  $('.quantity-count').on('keydown', function(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
         // Allow: Ctrl+A
         (e.keyCode == 65 && e.ctrlKey === true) || 
         // Allow: home, end, left, right
         (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
           return;
         }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  })
