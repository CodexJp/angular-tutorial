/*
 * @autor: Jairo Polo
 *
 * Decorator del servicio tipo Provider: PlaylistServ, encargado de interceptar 
 * y agregar funcionalidad adicional a PlaylistServ sin necesidad de cambiar la 
 * lógica definida en el servicio
 */
 angular.module("MyApp")
	 .config(["$provide", function($provide){
	 	$provide.decorator("PlaylistServ", ["$delegate", function($delegate){
	 		$delegate.texto = function(){
	 			return $delegate.listar().join(', ');
	 		};
	 		return $delegate;
	 	}]);
	 }]);