/*
 * Controlador usado para implementar el uso de varias promesas
 * a la vez, las peticiones serán resueltas al tiempo de manera 
 * asíncrona y no tomaremos desiciones hasta que todas queden resueltas 
 */
 angular.module("MyApp")
 	.controller("PromiseAllCtrl", function($q, $scope){
 		var promesa1 = $q.defer();
 		var promesa2 = $q.defer();
 		var promesa3 = $q.defer();

 		// Configuramos la acción de cada promesa al ser finalizada
 		promesa1.promise.then(completado);
 		promesa2.promise.then(completado);
 		promesa3.promise.then(completado);

 		// Método usado para imprimir el resultado del estado de las promesas
 		function completado(data){
 			console.log(data);
 			$scope.resultado = data;
 		}

 		// Configuramos un retardo para la primera promesa
 		setTimeout(function(){
 			promesa1.resolve("Promesa #1 resuelta!");
 		}, Math.random() * 1000);

 		// Configuramos un retardo para la segunda promesa
 		setTimeout(function(){
 			promesa2.resolve("Promesa #2 resuelta!");
 		}, Math.random() * 1000);	

 		// Configuramos un retardo para la tercera promesa
 		setTimeout(function(){
 			promesa3.resolve("Promesa #3 resuelta!")
 		}, Math.random() * 1000);

 		var todas = $q.all([promesa1.promise, promesa2.promise, promesa3.promise]);
 		todas.then(function(data){
 			console.log(data);
 			$scope.resultadoFinal = "Se ejecutaron todas las promesas, las promesas son: " + data;
 		})
 	})