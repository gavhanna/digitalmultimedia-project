document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");

  particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
  particlesJS.load('particles-js2', 'assets/particles2.json', function () {
    console.log('callback - particles.js config loaded');
  });

  // Initialise materliaze mobile nav
  $('.sidenav').sidenav();

  // Smooth scrolling
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  function isScrolledIntoView(elem) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function () {
    let timer = 0;
    $('.action').each(function () {
      if (isScrolledIntoView(this) === true) {
        setTimeout(() => {

          $(this).addClass('in-view');
        }, timer);
      }
      timer += 1000;
    });
  });

  // Add class to nav after 100vh scroll
  const $nav = $('nav');
  const $win = $(window);
  const winH = $win.height(); // Get the window height.

  $win.on("scroll", function () {
    if ($(this).scrollTop() > winH) {
      console.log("scrolling");
      $nav.addClass("bg");
    } else {
      $nav.removeClass("bg");
    }
  }).on("resize", function () { // If the user resizes the window
    winH = $(this).height(); // you'll need the new height value
  });
});


