/*
 * controlador usado para aprender el correcto uso de las excepciones en Angular, haremos uso del servicio 
 * $exceptionHandler para crear un servicio propio que emplee un manejo específico de las excepciones de la 
 * aplicación en tiempo de ejecución 
 */
 angular.module("MyApp")
 	//Servicio de tipo factory usado para el manejo de las excepciones (inyectamos en el el servicio $exceptionHandler)
 	.factory("$exceptionHandler", ExceptionHandler) 
 	.controller("ExceptionCtrl", ExceptionCtrl);

 	//Procedemos a configurar nuestro servicio (factory) encargado de emplear el manejo de las excepciones en nuestra app
 	ExceptionHandler.$inject = ['$log'];
 	function ExceptionHandler($log){
 		return function(exception, cause){
 			$log.debug.apply($log, arguments);	
 		} 		
 	}

 	//Configuración del controlador
 	ExceptionCtrl.$inject = ['$scope'];
 	function ExceptionCtrl($scope){

 		var vm = this; //Definimos el ViewModel como contexto de nuestro controlador para hacer uso del scope sin necesidad de escribir this o $

 		//Función accedida desde la presentación que será la encargada de generar la excepción
 		vm.generarError = function(){
 			throw new Error("Error grave!");
 		};
 	}

