/**
 * @autor Jairo Polo
 *
 * Controlador usado para adminsitrar el borrado
 * de las canciones de mi Playlist
 */
angular.module("MyApp")
  .controller("PlaylistMetodosCtrl", ["$scope", "Playlist",
    function($scope, Playlist){
      $scope.playlist = Playlist.listar();
      $scope.borrar = function(id){
        Playlist.borrar(id);
      };
  }])
