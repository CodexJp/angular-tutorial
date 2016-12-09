/*
 * Controlador usado para administrar el $anchorScroll
 */
 angular.module("MyApp")

 	.run(["$anchorScroll", function($anchorScroll){
 		$anchorScroll.yOffset = 100;
 	}])

 	.controller("AnchorScrollCtrl", function($scope, $anchorScroll, $location){
 		
 		$scope.irA = function(id){
 			var nuevaId = "contenido" + id;
 			$location.hash(nuevaId);
 			$anchorScroll();
 		};
 	})