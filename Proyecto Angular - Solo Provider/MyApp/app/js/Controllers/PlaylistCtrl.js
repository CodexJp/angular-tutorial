/*
 * @autor: Jairo Polo
 *
 * Controlador del provider	
 */
 angular.module("MyApp")
 	.controller("PlaylistCtrl", ["$scope", "PlaylistServ", 
 		function($scope, PlaylistServ){
 			$scope.playlist = PlaylistServ.listar();
 	}])