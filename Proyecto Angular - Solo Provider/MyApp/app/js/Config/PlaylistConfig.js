/*
 * @autor: Jairo Polo
 *
 * Archivo de configuración para mi provider	
 */
 angular.module("MyApp")
 	.config(["PlaylistServProvider", function(PlaylistServProvider){
 		var canciones = [
 			"Cedarwood Road",
		    "California (There Is No End To Love)",
		    "Sleep Like a Baby Tonight",
		    "Song for Someone",
		    "This Is Where You Can Reach Me Now",
		    "Iris (Hold Me Close)",
		    "The Troubles",
		    "Volcano",
		    "Jairo desde el config!"
 		];

 		PlaylistServProvider.agregar(canciones);
 	}])