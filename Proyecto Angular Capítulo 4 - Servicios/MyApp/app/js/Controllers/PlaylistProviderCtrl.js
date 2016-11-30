/**
 * @autor Jairo Polo
 *
 * Controlador usado para adminsitrar la lista de
 * las canciones de mi aplicación a partir de un 
 * servicio de tipo provider configurado desde la 
 * carga de la aplicación
 */
 angular.module("MyApp")
 	.controller("PlaylistProviderCtrl", ["$scope", "API_TOKEN", "CSRF_TOKEN", "PlaylistServ",  
 		function($scope, API_TOKEN, CSRF_TOKEN, PlaylistServ){
 		
 			$scope.playlist = PlaylistServ.listar();
 			$scope.borrar = function(id){
 				PlaylistServ.borrar(id);
 			};

 			// Este es un método agregado al provider por medio de $decorator del servicio provider 
 			$scope.playlistDecorate = PlaylistServ.texto();

 			$scope.TOKEN = CSRF_TOKEN; // Notar como hago inyección de la constante al definir el controlador
 			$scope.API_TOKEN_PUBLIC = API_TOKEN._public;
 			$scope.API_TOKEN_PRIVATE = API_TOKEN._secret;
 	}])