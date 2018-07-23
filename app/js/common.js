$(function() {

	$(document).ready(function(){
		var touch = $('#touch_menu');
			var menu = $('.menu');
	 
			$(touch).on('click', function(e) {
					e.preventDefault();
					menu.slideToggle();
			});
			$(window).resize(function(){
					var wid = $(window).width();
					if(wid > 995 && menu.is(':hidden')) {
							menu.removeAttr('style');
					}
			});
	});
		$('.top-line__login').click(function(){
				$('.login__inner').toggleClass('active');
		});
		$('.drop_item').click(function(){
			$('.menu-inner').toggleClass('active');
	});
		
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
 
})();
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('active');
    });
  });
})(jQuery);

$(document).ready(function(){
  $('.slick-slider').slick({
		infinite: true,
		dots: true,
		speed: 600,
		fade: true,
		nav: false,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
  });
});

$(document).ready(function(){
  $('.slick-logo').slick({
		infinite: true,
		dots: false,
		nav: true,
		speed: 600,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
  });
});

});
