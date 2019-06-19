'use strict';

$(document).ready(function() {
    $(".to_top").click(function () {
    let elementClick = $((this).getAttribute("href"));
    let destination = $(elementClick).offset().top;
    event.preventDefault();
    $("body,html").animate({scrollTop: destination }, 600);
    });
  });
