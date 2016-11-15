/**
 * @autor Jairo Polo
 *
 * Controlador usado para adminsitrar la lista de
 * las canciones de mi aplicación
 */
 angular.module("MyApp")
  .controller("PlaylistCtrl", ["$scope", "Playlist",
    function($scope, Playlist){
      $scope.playlist = Playlist.listar();
  }])
