//Scroll to about page when explore button is clicked.
$('.btn').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('.about').offset().top - 87,
    },
    1000
  );
});

//Scroll to an individual section when a navbar link is clicked.
$('.nav-link').click(function () {
  var pageClass = $(this).attr('data-page');
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('.' + pageClass).offset().top - 87,
    },
    1000
  );
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 62) {
    $('.return-to-top').fadeIn(200);
  } else {
    $('.return-to-top').fadeOut(200);
  }
});

$('.return-to-top').click(function () {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    500
  );
});
