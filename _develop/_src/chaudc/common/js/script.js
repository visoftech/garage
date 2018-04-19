window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
window.cancelAnimFrame = (function() {
  return window.cancelAnimationFrame ||
    window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    function(id) { window.clearTimeout(id); };
})();

function closest(el, selector) {
  // type el -> Object
  // type select -> String
  var matchesFn;
  // find vendor prefix
  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }
    return false;
  })
  var parent;
  // traverse parents
  while (el) {
    parent = el.parentElement;
    if (parent && parent[matchesFn](selector)) {
      return parent;
    }
    el = parent;
  }
  return null;
}

function getCssProperty(elem, property) {
  return window.getComputedStyle(elem, null).getPropertyValue(property);
}
var easingEquations = {
  easeOutSine: function(pos) {
    return Math.sin(pos * (Math.PI / 2));
  },
  easeInOutSine: function(pos) {
    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
  },
  easeInOutQuint: function(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow((pos - 2), 5) + 2);
  }
};

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
}
window.addEventListener('DOMContentLoaded', function() {
  new menuSP();
  new scrollChangeBg();
});
var menuSP = function() {
  m = this;
  m.logo = document.getElementById('logo');
  m.nav = document.getElementById('menu');
  m.body = document.querySelector('body');
  m.flag = true;
  if (!m.logo) return;
  m.init();
}
menuSP.prototype = {
  init: function() {
    window.addEventListener('load', function() { m.Handl() }, true);
    window.addEventListener('resize', function() { m.resize() }, true);
  },
  Handl: function() {
    m.reset();
    m.logo.querySelector('#trigger').addEventListener('click', function() { m.onClick() }, false);
  },
  onClick: function() {
    if (m.flag) {
      m.nav.classList.add('active');
      m.logo.classList.add('active');
      m.body.style.overflow = 'hidden';
      m.flag = false;
    } else {
      m.close();
    }
  },
  close: function() {
    m.body.style.overflow = '';
    m.nav.classList.remove('active');
    m.logo.classList.remove('active');
    m.flag = true;
  },
  reset: function() {
    m.logo.classList.remove('active');
    m.nav.classList.remove('active');
    m.body.style.overflow = '';
    m.flag = true;
  },
  resize: function() {
    if (window.innerWidth > 768) {
      m.body.style.overflow = '';
      m.logo.classList.remove('active');
      m.nav.classList.remove('active');
      m.flag = true;
    }
  }
}
var scrollChangeBg = function() {
  sc = this;
  sc.bg = document.getElementById('logo');
  sc.osMain = 0;
  sc.scrollTop = 0;
  if (sc.logo) return;
  sc.init();
}
scrollChangeBg.prototype = {
  init: function() {
    window.addEventListener('load', function() { sc.load() }, true);
    window.addEventListener('scroll', function() { sc.handle() }, true);
    window.addEventListener('resize', function() { sc.resize() }, true);
  },
  handle: function() {
    sc.scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (sc.scrollTop >= sc.osMain) {
      document.querySelector('.logo').classList.add('bg');
    } else {
      document.querySelector('.logo').classList.remove('bg');
    }
  },
  resize: function() {
    sc.osMain = document.querySelector('.js_changebg').offsetTop;
  },
  load: function() {
    sc.osMain = document.querySelector('.js_changebg').getBoundingClientRect().top;
  }
}

$(document).ready(function() {
  // anchor link
  $(function() {
    $('a[href*=\\#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600, 'linear');
    });
  });

  // open video
  var videoID = '#video';
  var videoURL = $('#video').attr('src');
  $('#img_thumb').on('click', function(e) {
      videoURL += '?autoplay=1&playsinline=1';
      $(videoID).attr('src', videoURL);
      $(this).fadeOut(1000);
  });

  //slick js 
  $('.model_slider').slick({
      autoplay:false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      slidesToScroll:1,
      focusOnSelect: false,
      centerMode: false,
      asNavFor: '.slider-nav'
      // });
    });

    $('.slider-nav').slick({
        slidesToShow:  6,
        asNavFor: '.model_slider',
        centerMode: false,
        focusOnSelect: true,
        vertical: false,
        arrows:  false,
        accessibility: true,
        slickPause: false,
    });
});


