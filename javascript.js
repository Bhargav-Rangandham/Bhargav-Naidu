
let menu = document.queryselector('menu');
let header = document.queryselector('header');


menu.onclick = ()=> {
	menu.classList.toggleClass('fa-times');
	header.classList.toggleClass('active');

}

window.onScroll = ()=> {
	window.classList.removeClass('fa-times');
	window.classList.removeClass('active');

}


$(document).ready(function(){

	$('#menu').click(function() {
	$(this).toggleclass('fa-times');
	$('header').toggleclass('toggle'); 

});


$('window').on('scroll load', function() {

	$('#menu').removeclass('fa-times');
	$('header').removeclass('toggle');

	if($(window).scrollTop()>0) {
			$('.top').show();

		} else {
			$('.top').show();
		}

});


//smooth scrolling 


$('a[href*="#"]').on('click',function(e) {

	e.preventDefault();

	$('html, body').animate({

		scrollTop : $($(this).attr('href')).top,
		},
		500,
		'linear',
		);

	});

});
