/*
 * @autor: Jairo Polo
 *
 * Archivo de configuración encargado de preconfigurar el provider PlaylistProvider 
 * para cargar algunas canciones al momento de ser cargada la aplicación	
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
