/**
 * @autor Jairo Polo
 *
 * Servicio de tipo factory de prueba
 */
 angular.module("MyApp")
 	.factory("TestFactory", [function(){
 		var family = [
 			'Leidy',
 			'Magaly',
 			'Jairo'
 		];

 		var listar = function(){
 			return family;
 		};

 		return {
 			listar: listar
 		};
 	}])
