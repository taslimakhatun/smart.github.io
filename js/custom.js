$(document).ready(function() {

$('.progress-bar').waypoint(function() {
$('.progress-bar').css({
animation: "animate-positive 2s",
opacity: "1"
});
}, { offset: '75%'}); 

 // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.width2'
      }
    });

var $gallery = $('.gallery').isotope({
      // options
    });
    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });









});
   