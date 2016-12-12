/*
 * Controlador usado para generar una petición al servidor por medio del servicio $http de Angular,
 * no haremos un llamado a un servicio expuesto en un backend inicialmente, lo que haremos será un llamado
 * a un archivo Json (JavaScript Object Notation), en el cual tenemos la información personal de 3 usuarios
 */
 angular.module("MyApp")
  .controller("UsersJsonCtrl", ['$scope','$http', function($scope, $http){

    //Procedemos a declarar la variable que se encargará de realizar la petición HTTP
    var obtenerUsuarios = $http({
      method: 'GET',
      url: 'usuarios.json' //Ruta del servicio a consumir
    }).success(function(data, status){
      $scope.usuarios = data; //En caso de respuesta afirmativa, cargamos el scope usuarios
      console.log($scope.usuarios);
    }).error(function(data, status){
      console.log(data, status); //En caso de respuesta negativa, reportamos el error
    });
  }])
