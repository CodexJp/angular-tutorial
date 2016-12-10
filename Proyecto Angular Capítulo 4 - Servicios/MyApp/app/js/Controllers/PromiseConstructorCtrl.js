/*
 * Controlador que implementará el uso de promesas con
 * constructor dentro de su ejecución, lo harémos de la
 * forma tradicional y también como lo especifica ECMAScript 6 (ES6),
 * (especificación para el desarrollo de aplicaciones bajo JavaScript)
 */
 angular.module("MyApp")
 	.controller("PromiseConstructorCtrl", function($scope, $q){

 		// Ejecución de la promesa, retorna el estado dependiendo de la respuesta del método
 		// ******FORMA ANTIGUA*******
 	/*	function tarea(comprobar){
 			var def = $q.defer();

 			setTimeout(function(){
 				if(!comprobar){
 					def.resolve("Promesa resuelta!");
 				}else{
 					def.reject("Promesa rechazada!");
 				}
 			}, 1000);

 			return def.promise;
 		} */

 		//********	NUEVA FORMA DE CREAR PROMESAS ECMAScript 6  ************
 		function tarea(comprobar){
 			return $q(function (reject, resolve){
 				setTimeout(function(){
 					if(!comprobar){
 						resolve("Promesa Resuelta!");
 					}else{
 						reject("Promesa Rechazada!")
 					}
 				}, 1000);
 			});
 		}

 		// Llamada al método encargado de llamar a la promesa
 		$scope.accion = function(comprobar){
 			ejecutar(comprobar);
 		}

 		function ejecutar(comprobar){
 			tarea(comprobar).then(function(data){
 				$scope.resuelta = data;
 			}, function(error){
 				$scope.rechazada = error;
 			})
 		}
 	});
