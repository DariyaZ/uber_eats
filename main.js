'use strict';

$(document).ready(function() {
  $('.to_top').click(function() {
    const elementClick = $((this).getAttribute('href'));
    const destination = $(elementClick).offset().top;
    event.preventDefault();
    $('body,html').animate({ scrollTop: destination }, 600);
  });
});
