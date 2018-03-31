! function(e) {
    "use strict";
    e('a.js-scroll-trigger').click(function() {
		//var clicker = $(this).attr('toggle');
		//var curr = document.getElementById(clicker);
		//var lastOpen = document.getElementById('lastOpen');
		//var last = $(lastOpen).attr('page');
		
		document.getElementById('intro').style.display = "none";
		//$(lastOpen).attr('page', clicker);
		//curr.style.display = "block";
		
    });
	// Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
}(jQuery);
