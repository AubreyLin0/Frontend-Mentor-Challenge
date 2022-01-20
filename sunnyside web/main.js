var prepend = true
// var display = true
$('.navbarToggler').click(function () {
  const triangle = "<div id='triangle-bottomright'></div>"
  if (prepend) {
    $('.navbarContent').prepend(triangle)
    prepend = false
  }
  $('.navbarContent').slideToggle('100')
  // if (display) {
  //   $('.navbarContent').css({ display: 'none' })
  //   display = false
  // }
  // $('.navbarContent').toggle(function () {
  //   $(this).css({ display: 'none' })
  // })
  $('.navbarContent').toggleClass('show-links')
})
