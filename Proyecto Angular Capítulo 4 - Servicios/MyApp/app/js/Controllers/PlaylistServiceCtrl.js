/**
 * @autor Jairo Polo
 *
 * Controlador usado para adminsitrar la lista de
 * las canciones de mi aplicación por medio de un service
 */
 angular.module("MyApp")
	.controller("PlaylistServiceCtrl", ["$scope", "PlaylistServiceClass", 
		function($scope, PlaylistServiceClass){
			$scope.playlist = PlaylistServiceClass.listar();
			//console.log(PlaylistServiceClass.playlist);
	}])