// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $.get('/date', function(dreams) {
    
  })

  $('form').submit(function(event) {
    event.preventDefault()
    var date = $('input').val()
    $.post('/date?' + $.param({date: date}), function() {
      console.log('Sent!!')
    })
  })

})
