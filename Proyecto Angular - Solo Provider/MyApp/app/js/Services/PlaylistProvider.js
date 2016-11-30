/*
 * @autor: Jairo Polo
 *
 * Servicio de tipo Provider usado para suministrar la lista de canciones de 
 * mi aplicación, este tipo de servicio es un provider	
 */
 angular.module("MyApp")
 	.provider("PlaylistServ", [function(){
 		var playlist = [
 			"The Miracle (Of Joey Ramone)",
		    "Raised By Wolves",
		    "Every Breaking Wave",
		    "Jairo desde el provider!"
 		];

 		var listar = function(){
 			return playlist;
 		};

 		var borrar = function(id){
 			playlist.splice(id, 1);
 		};

 		return {
 			agregar: function(data){
 				playlist = playlist.concat(data);
 			},

 			$get: function(){
 				return {
 					listar: listar,
 					borrar: borrar
 				};
 			}
 		};
 	}]);