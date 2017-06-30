$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).ready(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

// Анимации

$(document).ready(function() {
	$(".header__logo-wrapper").animated("fadeInDown");
	$(".navigation").animated("slideInRight");
	$("h1, h2").animated("fadeInDown");
	$("p").animated("fadeInUp");
	$(".service__img").animated("fadeInUp");
	$(".gallery__img").animated("fadeInRightBig");
	$(".gallery__link").animated("slideInUp");
	$(".price-block").animated("zoomIn");
	
	 // Код для перехода по якорямм
	$('a[href^="#"]').on("click", function() {
		var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 1000);
	});
});