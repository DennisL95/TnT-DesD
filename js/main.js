jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // CSS benutzen (?)

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });

  $(document).ready(function() {
        // Smooth Scrolling für alle links
        $(".navbar a, .service-content a, .primary-button a").on('click', function(event) {

          // Sicherstellen dass dieser Hash einen Wert hat, bevor der Standardwert überschrieben wird
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Hash largern
            var hash = this.hash;

            // JQuery's animate() benutzen um Smooth Page Scroll hinzuzufügen
            // Die optionale Zahl 800 ist die Zeit in Millisekunden, dies dauert das Ziel zu erreichen
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function() {

              // Hash (#) hinzufügen, wenn das scrolling vollendet ist (Standardverhalten)
              window.location.hash = hash;
            });
          } // End if
        });
      });
