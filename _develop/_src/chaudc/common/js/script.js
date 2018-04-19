// window.requestAnimFrame = (function() {
//   return window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback, 1000 / 60);
//     };
// })();
// window.cancelAnimFrame = (function() {
//   return window.cancelAnimationFrame ||
//     window.cancelRequestAnimationFrame ||
//     window.webkitCancelAnimationFrame ||
//     window.webkitCancelRequestAnimationFrame ||
//     window.mozCancelAnimationFrame ||
//     window.mozCancelRequestAnimationFrame ||
//     window.msCancelAnimationFrame ||
//     window.msCancelRequestAnimationFrame ||
//     window.oCancelAnimationFrame ||
//     window.oCancelRequestAnimationFrame ||
//     function(id) { window.clearTimeout(id); };
// })();

// function closest(el, selector) {
//   // type el -> Object
//   // type select -> String
//   var matchesFn;
//   // find vendor prefix
//   ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
//     if (typeof document.body[fn] == 'function') {
//       matchesFn = fn;
//       return true;
//     }
//     return false;
//   })
//   var parent;
//   // traverse parents
//   while (el) {
//     parent = el.parentElement;
//     if (parent && parent[matchesFn](selector)) {
//       return parent;
//     }
//     el = parent;
//   }
//   return null;
// }

// function getCssProperty(elem, property) {
//   return window.getComputedStyle(elem, null).getPropertyValue(property);
// }
// var easingEquations = {
//   easeOutSine: function(pos) {
//     return Math.sin(pos * (Math.PI / 2));
//   },
//   easeInOutSine: function(pos) {
//     return (-0.5 * (Math.cos(Math.PI * pos) - 1));
//   },
//   easeInOutQuint: function(pos) {
//     if ((pos /= 0.5) < 1) {
//       return 0.5 * Math.pow(pos, 5);
//     }
//     return 0.5 * (Math.pow((pos - 2), 5) + 2);
//   }
// };

// function isPartiallyVisible(el) {
//   var elementBoundary = el.getBoundingClientRect();
//   var top = elementBoundary.top;
//   var bottom = elementBoundary.bottom;
//   var height = elementBoundary.height;
//   return ((top + height >= 0) && (height + window.innerHeight >= bottom));
// }

// function isFullyVisible(el) {
//   var elementBoundary = el.getBoundingClientRect();
//   var top = elementBoundary.top;
//   var bottom = elementBoundary.bottom;
//   return ((top >= 0) && (bottom <= window.innerHeight));
// }
// window.addEventListener('DOMContentLoaded', function() {
//   new ExtraNav();
//   new MenuSp();
//   new Sticky();
// });
// var ExtraNav = (function() {
//   function ExtraNav() {
//     var e = this;
//     this.subNavi = document.getElementById('subNavi');
//     this.clone = document.getElementById('btn_mail').cloneNode(true);
//     this.clone.removeAttribute('id');
//     this.nav = document.getElementById('nav').querySelector('ul');
//     var li = document.createElement('li');
//     li.classList.add('show_sp');
//     Array.prototype.forEach.call(e.clone.children, function(child, k) {
//       li.appendChild(child);
//     })
//     this.nav.appendChild(li);
//     // for seach
//     var sub_menu = document.createElement('li');
//     sub_menu.id = 'sub_menu';
//     var a = document.createElement('a');
//     a.textContent = 'Search Cars';
//     sub_menu.appendChild(a);
//     sub_menu.appendChild(this.subNavi);
//     this.nav.insertBefore(sub_menu, this.nav.childNodes[0]);
//     // end for search
//   }
//   return ExtraNav;
// })()

// var MenuSp = (function(){
//   function MenuSp(){
//     var m = this;
//     this._target = document.getElementById('icon_nav');
//     this._mobile = document.getElementById('nav');
//     this.obj = document.getElementById('sub_menu');
//     this._target.addEventListener('click',function(){
//       if(this.classList.contains('open')){
//         this.classList.remove('open');
//         m._mobile.classList.remove('open');
//         m._mobile.style.height = 0;
//         document.body.style.overflow = 'inherit';
//       } else {
//         this.classList.add('open');
//         m._mobile.classList.add('open');
//         document.body.style.overflow = 'hidden';
//         m._mobile.style.height = window.innerHeight-closest(m._target,'header').clientHeight+'px';
//       }
//     })
//     this.obj.addEventListener('click',function(){
//       if(window.innerWidth < 769) {
//         if(this.classList.contains('active')){
//           this.classList.remove('active');
//           this.querySelector('.subNavi').style.height = 0;
//         }else{
//           this.classList.add('active');
//           var h = 0;
//           Array.prototype.forEach.call(this.querySelector('.subNavi').children,function(child,k) {
//             h+=  child.offsetHeight;
//           })
//           this.querySelector('.subNavi').style.height = h+'px';
//         }
//       } else {
//         return;
//       }
//     })
//     this._reset = function(){
//       if(m._target.classList.contains('open')){
//         if(window.innerWidth > 769) {
//           m._target.classList.remove('open');
//           m._mobile.classList.remove('open');
//           document.body.removeAttribute('style');
//           m._mobile.style.height = 'auto';
//           m._mobile.style.top = 0;
//           m.obj.style.height = 'inherit';
//         }
//       } else {
//         if(window.innerWidth < 769) {
//           m._mobile.style.height = 0;
//         } else {
//           m._mobile.style.height = 'auto';
//         }
//       }
//       if(m.obj.classList.contains('active')){
//         if(window.innerWidth > 769) {
//           m.obj.classList.remove('active');
//           m.obj.querySelector('.subNavi').removeAttribute('style');
//         } else {
//           var h = 0;
//           Array.prototype.forEach.call(m.obj.querySelector('.subNavi').children,function(child,k) {
//             h+=  child.clientHeight;
//           })
//           m.obj.querySelector('.subNavi').style.height = h+'px';
//         }
//       }
//     }
//     m._reset();
//     window.addEventListener('resize',m._reset,false);
//   }
//   return MenuSp;
// })()

// var Sticky = (function(){
//   function Sticky(){
//     var s = this;
//     this._target = document.getElementById('header');
//     this._mobile = document.getElementById('nav');
//     this.fg_pc = document.getElementById('top_header').clientHeight;
//     this._for_sp = function(top){
//       s._mobile.style.top = s._target.clientHeight+'px';
//       s._target.style.left = 0;
//       if(top > 0) {
//         document.body.style.paddingTop = s._target.clientHeight+'px';
//         s._target.classList.add('fixed');
//       } else {
//         document.body.style.paddingTop = 0;
//         s._target.classList.remove('fixed');
//       }
//     }
//     this._for_pc = function(top,left){
//       s._mobile.style.top = 0;
//       if(top >= s.fg_pc) {
//         document.body.style.paddingTop = s._target.clientHeight+'px';
//         s._target.classList.add('fixed');
//         s._target.style.left = -left+'px';
//         s._target.style.top = -s.fg_pc+'px';
//       } else {
//         document.body.style.paddingTop = 0;
//         s._target.classList.remove('fixed');
//         s._target.style.left = 0;
//         s._target.style.top = 0;
//       }
//     }
//     this.handling = function(){
//       var _top  = document.documentElement.scrollTop || document.body.scrollTop;
//       var _left  = document.documentElement.scrollLeft || document.body.scrollLeft;
//       if(window.innerWidth < 769) {
//         s._for_sp(_top);
//       } else {
//         s._for_pc(_top,_left);
//       }
//     }
//     window.addEventListener('scroll',s.handling,false);
//     window.addEventListener('resize',s.handling,false);
//     window.addEventListener('load',s.handling,false);
//     this.handling();
//   }
//   return Sticky;
// })()

$(document).ready(function() {
  // anchor link
  $(function() {
    $('a[href*=\\#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600, 'linear');
    });
  });

  //slick js 
  $('.model_slider').slick({
      autoplay:true,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      slidesToScroll:1,
      focusOnSelect: false,
      centerMode: false,
      // vertical: false,
      //   asNavFor: '.thumb-item-nav'
      // });
    });

    // $('.thumb-item-nav').slick({
    //     slidesToShow:  6,
    //     asNavFor: '.slider',
    //     centerMode: false,
    //     focusOnSelect: true,
    //     vertical: false,
    //     arrows:  false,
    //     accessibility: true,
    //     slickPause: false,
    // });
});


