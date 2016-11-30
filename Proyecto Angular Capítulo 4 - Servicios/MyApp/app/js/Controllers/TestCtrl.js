/**
 * @autor Jairo Polo
 *
 * Controlador para el factory de prueba
 */
 angular.module("MyApp")
 	.controller("TestCtrl", ["$scope", "TestFactory", 
 		function($scope, TestFactory){
 			$scope.family = TestFactory.listar();
 	}])