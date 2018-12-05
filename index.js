window.addEventListener('load',cargar, true);

		function cargar(){
			if (localStorage.getItem('station')) {
				ruta = document.getElementById('station');
				ruta.innerHTML = localStorage.getItem('station');
			}
				
			navigator.geolocation.getCurrentPosition(ubicacion);
			
			}
function ubicar(){
	 stacion = navigator.geolocation.getCurrentPosition(ubicacion);
	}
	function ubicacion(datos){
		latitud = datos.coords.latitude;
		longitud = datos.coords.longitude;
		dibujarMapa();

			}
	function dibujarMapa(){
		 divMapa= document.getElementById('mapa');
		 lugar = {lat:latitud, lng:longitud};
		 mapa = new google.maps.Map(divMapa,{
		 	center: lugar,
		 	zoom:18
		 });
	}
	var dos=document.getElementById('station');
	function estacionar(){

		var uno = document.getElementById('station');
				 
		  if(uno.innerHTML == 'Estacionar'){ 
		  	marcador = new google.maps.Marker({position:lugar, map:mapa});
		   	var hereLat = latitud;
		   	var hereLon= longitud;
		    localStorage.setItem('latitud',hereLat);
		   	localStorage.setItem('longitud',hereLon);  
		   	uno.innerHTML = 'Buscar';
		   	localStorage.setItem('station',uno.innerHTML);
		}
		  else{
		  	
		  	latFind= localStorage.getItem('latitud',hereLat);
		  	lonFind= localStorage.getItem('longitud',hereLon);
		  	nor=parseFloat(latFind);
		  	sur=parseFloat(lonFind);
		  	carStation= {lat:nor, lng:sur};
		  	marker2 = new google.maps.Marker({
		  		position: carStation, 
		   		icon: "auto.ico", 
		   		map:mapa,
		   		draggable: false});
			marcador3 = new google.maps.Marker({position:lugar, map:mapa});
		  	uno.innerHTML = 'Estacionar';
		  	localStorage.setItem('station',uno.innerHTML);
		  } 
	}

var map;
  	 function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: 43.5293, lng: -5.6773},
          zoom: 13,
        });
        var marker = new google.maps.Marker({
          position: {lat: 43.542194, lng: -5.676875},
          map: map,
	  title: 'Acuario de Gijón'
        });
      }