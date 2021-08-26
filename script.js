 
 /* Menu hamburguesa */
 $(document).ready(main);

var contador = 1;
const hamburger = document.querySelector(".hamburger");

function main () {
	$('.hamburger').click(function(){
		hamburger.classList.toggle("active");
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}






