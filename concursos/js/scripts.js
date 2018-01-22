$(document).ready(function () {

  var x = $('.smartlink')
  
  $.each(x, function(i, val) {
    var ref = $(this);
    var ref_top = ref.offset().top;
    var ref_id = ref.attr('class').slice(-3); // this needs to be more robust

    var content_top = $('.prose__content').offset().top;

    var text_ref = $('.smartlink-content--' + ref_id );
    text_ref.css({top: ref_top - content_top });
  });

  $('.smartlink').click(function(){
    var ref_id = $(this).attr('class').slice(-3);
    $('.smartlink-content--' + ref_id ).toggleClass('js-active');
  });

  // Smooth Scrolling Function
  $('a[href*=#]:not([href=#])').click(function () {
      var $targ = $(this.hash),
          host1 = this.hostname,
          host2 = location.hostname,
          path1 = this.pathname.replace(/^\//, ''),
          path2 = location.pathname.replace(/^\//, '');

      if (!$targ.length) {
          $targ = $('[name=' + this.hash.slice(1) + ']');
      }

      if ($targ.length && (host1 === host2 || path1 === path2)) {
          $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

          return false;
      }

      return true;
  });


  $('.js-slider').slick({
    speed: 300,
    slidesToShow: 1,
    accessibility: true,
    adaptiveHeight: true,
    infinite: false,
    prevArrow: $('.controls--prev'), 
    nextArrow: $('.controls--next')  
  });


  // FIX ME: not working properly.
  // Progressbar for the questionnaire. This is plugged to the slick slider.

  $('.js-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slides = $('.slick-slide');
    var slides_length = parseInt(slides.last()[0].getAttribute('data-slick-index'));
    var slide_current = parseInt($('.slick-current').attr('data-slick-index')) + 1;

    var progress = Math.round(slide_current / slides_length * 100);

    $(".js-progress").width(progress + '%');
  });

  
  $('.js-close-comment').click(function() {
    $('.js-comment').removeClass('js-active');
    $('.js-overlay').removeClass('js-active');
  });

  $('.js-open-comment').click(function() {
    $('.js-comment').addClass('js-active');
    $('.js-overlay').addClass('js-active');
  });
  
  $('.js-answer').click(function() {
    $(this).toggleClass('js-active');
  });
  
  $('.js-overlay').click(function() {
    $(this).removeClass('js-active');
    $('.js-comment').removeClass('js-active');

  });


}); // doc.ready
