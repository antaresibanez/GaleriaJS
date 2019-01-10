//no puedo utilizar los mismos nombres de variables que el fichero slide.js
/*=============================================
OBJETO CON LAS PROPIEDADES DE LA GALERIA
=============================================*/

var pg = {
	//propiedad para capturar las imágenes
	imgGaleria: document.querySelectorAll("#galeria ul li img"),
	//para almacenar la ruta del img que irá en el lightbox
	rutaImagen: null,
	//propiedad que captura el body para luego oscurecerlo en el lightbox
	cuerpoDom: document.querySelector("body"),
	//captura el id del div creado en el método "lightbox"
	lightbox: null,
	//capturamos el div #modal dentro del lightbox
	modal: null,
	//propiedad que selecciona el tipo de animacioń de aparición de la ventana modal
	animacionGaleria: "fade"
}


/*=============================================
OBJETO CON LAS MÉTODOS DE LA GALERIA
=============================================*/

var mg = {
	//funcion inicial para selecionar todas las imágenes
	inicioGaleria: function(){
		//ciclo para buscar todas las imagenes de la galería ".length"
		for (var i = 0; i < pg.imgGaleria.length; i++) {
			//llamo al método mg.capturaImagen para seleccionar una imagen cuando haga click
			pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)

		}
		
	},
	//método con parámetro "img" que captura la imagen a la cual haga click
	capturaImagen: function(img){

		pg.rutaImagen = img.target;
		//le paso la rutaImagen como parámetro al método lightbox
		mg.lightbox(pg.rutaImagen);

	},

	// el método lightbox toma img como parámetro y utiliza el método de JS appendChild como función para
	// crear un nuevo elemento "div", y setAttibute para darle un ID
	lightbox: function(img){

		pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
		//capturo finalmente la caja con id #lightbox
		pg.lightbox = document.querySelector("#lightbox");
		//le damos estilo
		pg.lightbox.style.width = "100%";
		pg.lightbox.style.height = "100%";
		pg.lightbox.style.position = "fixed";
		pg.lightbox.style.zIndex = "10";
		pg.lightbox.style.background = "rgba(0,0,0,.8)";
		pg.lightbox.style.top = "0";
		pg.lightbox.style.left = "0";
		
		//creamos un nuevo div, pero dentro de #lightbox con el id modal
		pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
	
		// alimentamos pg.modal con el div #modal
		pg.modal = document.querySelector("#modal");
	
		//con innerHTML creamos la imagen tomando el CONTENIDO HTML de img (.outerHTML)
		//Agrego un div con una "X" para cerrar la imagen
		pg.modal.innerHTML = img.outerHTML+ "<div>x</div>";

		pg.modal.style.display = "block";
		pg.modal.style.position = "relative";

		//para que la imagen se adapte al 100% de la caga modal, antes capturar y de ajustar los márgenes de pg.modal
		pg.modal.childNodes[0].style.width = "100%";
	    pg.modal.childNodes[0].style.border = '15px solid white'

		//condicional que llama a la propiedad window.matchMedia para verificar si la resolucion del dispositivo
		// es de mas de 1000px, en caso menor aplicamos un width del 90%, en caso mayor, lo dejamos en 60%
		if (window.matchMedia("(max-width:1000px)").matches){
			pg.modal.style.width = "90%";
		}else{

			pg.modal.style.width = "60%";
		}
		
		//Estilizo pg.modal con animación, va metido en un condicional por si quiero elegir distintos efectos
		// slideLeft, slideTop o fade
		if (pg.animacionGaleria == "slideLeft") {

			pg.modal.style.top = "50%";
			pg.modal.style.left = 0;
			pg.modal.style.opacity = 0;

			setTimeout(function(){

				pg.modal.style.transition = ".5s left ease";
				pg.modal.style.left = "50%";
				pg.modal.style.opacity = 1;
				//.childeNodes pregunta por los hijos de pgmodal, le dice que hay una imagen
				// como es un array, le pregunto por el índice  "0" "[0]"
				//tomo el with de la imagen y lo divido por dos para poder centrar la imagen (- negativo para que se corra izq)
	    		pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px";
	    		//lo miso pero para el alto
	   			 pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px";


			},50)

		}

		if (pg.animacionGaleria == "slideTop") {

			pg.modal.style.top = "-100%";
			pg.modal.style.left = "50%";
			pg.modal.style.opacity = 0;

			setTimeout(function(){

				pg.modal.style.transition = ".5s top ease";
				pg.modal.style.top = "50%";
				pg.modal.style.opacity = 1;
				//.childeNodes pregunta por los hijos de pgmodal, le dice que hay una imagen
				// como es un array, le pregunto por el índice  "0" "[0]"
				//tomo el with de la imagen y lo divido por dos para poder centrar la imagen (- negativo para que se corra izq)
	    		pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px";
	    		//lo miso pero para el alto
	   			 pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px";


			},50)

		}

		if (pg.animacionGaleria == "fade") {

			pg.modal.style.top = "-50%";
			pg.modal.style.left = "50%";
			pg.modal.style.opacity = 0;

			setTimeout(function(){

				pg.modal.style.transition = ".5s opacity ease";
				pg.modal.style.top = "50%";
				pg.modal.style.opacity = 1;
				//.childeNodes pregunta por los hijos de pgmodal, le dice que hay una imagen
				// como es un array, le pregunto por el índice  "0" "[0]"
				//tomo el with de la imagen y lo divido por dos para poder centrar la imagen (- negativo para que se corra izq)
	    		pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px";
	    		//lo miso pero para el alto
	   			 pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px";


			},50)

		}
		
	
		
	
		

	    
	    //el segundo hijo de pg.modal es el div de la "X" [1]
	    pg.modal.childNodes[1].style.position = "absolute";
	    pg.modal.childNodes[1].style.right = "5px";
	    pg.modal.childNodes[1].style.top = "5px";
	    pg.modal.childNodes[1].style.color = "silver";
   	    pg.modal.childNodes[1].style.cursor = 'pointer';
   	    pg.modal.childNodes[1].style.fontSize = '30px';
   	    pg.modal.childNodes[1].style.width = '40px';
   	    pg.modal.childNodes[1].style.height = '40px';
   	    pg.modal.childNodes[1].style.textAlign = 'center'
   	    pg.modal.childNodes[1].style.background = 'white';
   	    pg.modal.childNodes[1].style.borderRadius = '0px 0px 0px 5px';

   	    //selecciono la X para llamar al método mg.salir galeria
   	    pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria);

	},
	//método para hacer desaparecer el lightbox
	salirGaleria: function(){
		// aqui llamamos al body "parentNode", y le decimos que remueva un hijo que está ubicado en pg.lightbox
		pg.lightbox.parentNode.removeChild(pg.lightbox);

	}




}
mg.inicioGaleria()