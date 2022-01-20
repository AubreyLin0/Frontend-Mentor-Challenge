var prepend = true
$('.navbarToggler').click(function () {
  const triangle = "<div id='triangle-bottomright'></div>"
  if (prepend) {
    $('.navbarContent').prepend(triangle)
    prepend = false
  }
  $('.navbarContent').slideToggle('100')
  $('.navbarContent').toggleClass('show-links')
})
