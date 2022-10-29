/* Global $ */

$(function () {
  'use strict';
  $('.info-list li').click(function () {
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.info-content > div').hide();
    $('.' + $(this).data('class')).fadeIn();
  });

  $('.nav-list li').click(function () {
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.' + $(this).data('class')).addClass('bg-d').siblings('div').removeClass('bg-d');


  });

  $('.burger').click(function () {
    $(this).toggleClass('bgi');
    $('.nav-list').toggleClass('show');
    $('.burger .').toggleClass('show');
  });

});


