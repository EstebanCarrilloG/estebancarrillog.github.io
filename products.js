const baseDeDatos = [
    {
        id: 1,
        titulo: 'Cable OTG',
        precio: 1.00,
        imagen: 'assets/PRODUCTOS/adaptador otg.jpg',
        descripcion: '* otg a micro usb<br/>* otg a tipo c <br/> * otg a tablet',
        dir_url:'#'
    },
    {
        id: 2,
        titulo: 'Pistola de calor',
        precio: 10.00,
        imagen: 'assets/PRODUCTOS/pistola calor.jpg',
        descripcion:'* 100watt SG-109 220v<br/>* Pistola de soldadura de alta velocidad y eficiencia SG109-100<br/>* Voltaje 110 / 120V AC o 220 / 240V AC<br/>* Tiempo de precalentamiento 12 segundos<br/>* Temperatura utilizada 300 Centígrados',
        dir_url:'#'
    },
    {
        id: 3,
        titulo: 'fuentes conmutadas',
        precio: 25.00,
        imagen: 'assets/PRODUCTOS/fuentes conmutadas.jpg',
        descripcion:'* 5V/5A 24V/5A<br> * 12V/2A 24V/10A<br> * 12V/5A<br> * 12V/10A<br> * 12V/20A<br> * 12V/30A',
        dir_url:'#'
    },
    {
        id: 4,
        titulo: 'Repetidor wifi',
        precio: 25.30,
        imagen: 'assets/PRODUCTOS/repetidor wifi.jpg',
        descripcion:' * Velocidad de transmisión: 300 Mbps<br> * Mejora la cobertura inalámbrica en todas las redes WLAN.<br> * Modo: Modo AP/Repetidor',
        dir_url: '#',
    }

];

const DOMitems = document.querySelector('.slidebar-right__content');
function renderizarProductos() {
          baseDeDatos.map((info) => {


            const miNodo = document.createElement('div');
            miNodo.classList.add('content-product');
            /* miNodo.classList.add('content-product__mod');*/

            
           
            
          

           const texto_divs = '<div class = "img-price"><img src="'+info.imagen+'" alt=""><span class= "product-price">$'+info.precio+'</span></div><div class ="prouct-info"><h3 class = "section-title product-info__title">Caracteristicas</h3><p class = "product-info__info">'+ info.descripcion +'</p></div><div class ="btn-products"><a class = "cta btn-products__more" href="#"><i class="fas fa-info-circle"></i>Info</a><a class = "cta btn-products__buy" href="https://www.edeptec.com"><i class="fas fa-shopping-cart"></i>Comprar</a></div></div>'
            miNodo.innerHTML = texto_divs;

            
            

            DOMitems.appendChild(miNodo);

           

          });
      }

renderizarProductos();


var modal = document.getElementById("myModal");
var more = document.querySelectorAll(".content-product");
var products_zoom = document.getElementById("products-zoom"); 

more.forEach(more_content => {
    more_content.onclick = function(){
        modal.style.display = "block";        
        products_zoom.innerHTML = more_content.innerHTML;
        products_zoom.innerHTML +='<span id="close"><i class="fas fa-window-close"></i></span>';
        close_x();
    }
});

function close_x(){
var span = document.getElementById("close");
span.onclick = function() { 
    modal.style.display = "none";
}
}

/* Menu hamburguesa */
$(document).ready(main);

var contador1 = 1;


function main () {
	$('#slidebarl_more').click(function(){
		
		if (contador1 == 1) {
			$('#list_1').animate({
				top: '4.7em'
			});
			contador1 = 0;
		} else {
			contador1 = 1;
			$('#list_1').animate({
                top: '-1000%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
  














