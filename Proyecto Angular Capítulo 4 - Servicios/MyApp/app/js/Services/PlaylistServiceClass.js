/*
 * @autor: Jairo Polo
 *
 * Servicio de tipo Service usado para suministrar la lista de canciones de 
 * mi aplicación, este tipo de servicio a diferencia de los Factory, no es singleton,
 * eso quiere decir que instancia una nueva clase cada vez que es usado (ESTE SERVICIO SERÁ USADO COMO UNA CLASE JavaScript)	
 */
var PlaylistServiceClass = function(){

	var playlist = [
	  "The Miracle (Of Joey Ramone)",
	  "Raised By Wolves",
	  "Every Breaking Wave",
	  "Cedarwood Road",
	  "California (There Is No End To Love)",
	  "Sleep Like a Baby Tonight",
	  "Song for Someone",
	  "This Is Where You Can Reach Me Now",
	  "Iris (Hold Me Close)",
	  "The Troubles",
	  "Volcano"
	];

	this.listar = function (){
		return playlist;
	};

	this.borrar = function (id){
		playlist.splice(id, 1);
	};
}

angular.module("MyApp")
	.service("PlaylistServiceClass", PlaylistServiceClass);
	
	