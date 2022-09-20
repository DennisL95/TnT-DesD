jQuery(document).ready(function($) {

  'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // CSS benutzen (?)

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });

  })
  