$('.open').click(function(e) {
  $('.menu').addClass('active');
  $('.menu__bar').addClass('active');
  $('.global').addClass('menu-active');
});
$('.close').click(function(e) {
  $('.menu').removeClass('active');
  $('.menu__bar').removeClass('active');
  $('.global').removeClass('menu-active');
});
$('.menu').click(function(e) {
  if ($(e.target).closest('.menu__bar').length == 0) {
    $('.menu').removeClass('active');
    $('.menu__bar').removeClass('active');
    $('.global').removeClass('menu-active');
  }
});
