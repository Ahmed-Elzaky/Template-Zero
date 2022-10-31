/* Global $ */


'use strict';

$('.info-list li').click(function () {
  $(this).addClass('selected').siblings('li').removeClass('selected');
  $('.info-content > div').hide();
  $('.' + $(this).data('class')).fadeIn();
})

$('.nav-list li').click(function () {
  $(this).addClass('selected').siblings('li').removeClass('selected')
  // $('.' + $(this).data('class')).addClass('bg-d').siblings('div').removeClass('bg-d');
  let offsetSec = $('.' + $(this).data('class')).offset().top - 20
  $('body, html').animate ({
    scrollTop: offsetSec,
  }, 1000)


})

/* $('body').click(function () {
  $('.nav-list').removeClass('show');
}) */

$('.burger').click(function () {
  $(this).toggleClass('bgi');
  $('.nav-list').toggleClass('show');
  // $('.burger .').toggleClass('show');
})

$(window).scroll(function () {
  let scrolly = $(window).scrollTop();
  // window.console.log(scrolly);

  /* if(scrolly >= 554.5555419921875) 
  if (scrolly >= $('.features').offset().top - 50) 
  if (scrolly >= $('.header').height() / 3) */

  if (scrolly >= $('.header').height() / 3) {
    // window.console.log('ahmed');
    $('.navbar').addClass('navbar-scroll');
  }
  else {
    $('.navbar').removeClass('navbar-scroll');
  }

  $('.nav-list').removeClass('show'); // hide .nav-list if open while scroll

})
