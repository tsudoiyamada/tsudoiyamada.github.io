$(function() {
  $('.faq-list-item').click(function() {
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')) {
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      } else {
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');
      }
    });

  $('.index-btn').click(function() {
    $('.active').removeClass('active');

    var clickPicture = $('.index-btn').index($(this));
    $('.slide').eq(clickPicture).addClass('active');
  });

  $('.index-btn-second').click(function() {
    $('.active').removeClass('active');

    var clickIndex = $('.index-btn-second').index($(this));
    $('.slide-second').eq(clickIndex).addClass('active');
  });
});
