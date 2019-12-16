var window_width = $(window).width() - $(".smooth_scroll").width();

var document_height = $(document).height() - $(window).height();

$(function () {
  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    var object_position_top = window_width * (scroll_position / document_height) * .2;
    $(".smooth_scroll").css({
      'top': object_position_top
    });
  });
});
