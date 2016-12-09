/*
 * Controlador usado para aprender el uso del servicoi $log
 */
 angular.module("MyApp") 
 	.controller("LogCtrl", ["$scope","$log", function($scope, $log){
 		$scope.log = $log; // Variable necesaria para hacer uso del servicio $log
 		$scope.mensaje = 'Hola Mundo!';
 	}])