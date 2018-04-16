// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $.get('/date', function(date) {
      if(date.date === {}) {
        date = {}
        console.log()
      } else {
       console.log(date)
       $("#output").text("Check console")
      }
  })
  
  $("button").on("click", () => {
    location.reload()
  })
  
  $('form').submit(function(event) {
    event.preventDefault()
    var date = $('input').val()
    $.post('/date?' + $.param({date: date}), function() {
      
    })
  })
  
  setTimeout(() => {$(".loader").fadeOut(300)}, 700);

})
