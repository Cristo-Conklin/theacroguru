document.addEventListener("DOMContentLoaded", function() {
        // Function to check if the link is related to the current page
        function isLinkActive(link) {
            const currentUrl = window.location.href;
            const currentPath = window.location.pathname;
            const linkUrl = new URL(link.href);

            // Check if link is an anchor and matches the current URL (for same-page anchors)
            if (linkUrl.hash && currentUrl.includes(linkUrl.hash)) {
                return true;
            }

            // Check if link matches the current path (for internal and external links)
            if (linkUrl.pathname === currentPath) {
                return true;
            }

            return false;
        }

        // Select all navigation links
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Loop through links and add 'active' class to the one that matches current URL
        navLinks.forEach(link => {
            if (isLinkActive(link)) {
                link.classList.add('active');
            }
        });
    });
        

(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()
