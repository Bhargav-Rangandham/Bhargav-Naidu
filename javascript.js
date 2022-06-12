
let menu = document.queryselector('menu-bars');
let header = document.queryselector('header');


menu.onclick = ()=> {
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');

}

window.onScroll = ()=> {
	window.classList.remove('fa-times');
	window.classList.remove('active');

}


$(document).ready(function(){

	$('#menu-abrs').click(function() {
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
