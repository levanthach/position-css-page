;(function () {

    'use strict';

    
   
    var googleTranslateFormStyling = function() {
        $(window).on('load', function () {
            $('.goog-te-combo').addClass('form-control');
        });
    };



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: 0
			}, 500, 'swing');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	
	$(function(){
		goToTop();
		googleTranslateFormStyling();
	});

}());
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}