/*
 * Controlador encargado de implementar el uso del servicio $timeout de Angular, es una variante del servicio nativo 
 * de JavaScript pero con mayores y mejores funcionalidades, implementa manejo de excepciones y está basado en promesas 
 */
 angular.module("MyApp")
 	.controller('TimeoutCtrl', TimeoutCtrl)

 	//Hacemos la inyección del servicio $timeout para usarlo dentro de nuesrtro controlador
 	TimeoutCtrl.$inject = ['$timeout', '$log', '$scope'];
 	function TimeoutCtrl($timeout, $log, $scope){
 		var vm = this; //ViewModel del controlador
 		$scope.$log = $log; //Variable usada para hacer uso del servicio $log
 		/*
		 * Función que necesitamos retrasar, Tiempo que será retrasada la función, 
		 * (Define si ignora el chequeo de los modelos o si aplica $applay para verificarlos),
		 * A partir del cuarto parámetro, se definirán los parámetros de la función del primer
		 * parámetro
 		 */
 		var retraso = $timeout(accion, 3000, true, 'Uno', 'Dos');

 		//Función a retrasar 
 		function accion(param1, param2){
 			$log.log('Ejecutado después de dos segundos!');
 			$log.info('Parámetros: ', param1, param2);

 			return 'Mensaje devuelto por el temporizador!';
 		}

 		//Respuesta de la promesa $timeout una vez ha terminado 
 		retraso.then(function(msg){
 			$log.log(msg);
 			$log.info('Retraso finalizado!');
 		});

 		retraso.catch(function(){
 			$log.warn('Retraso cancelado');
 		})

 		//Función usada para cancelar el retraso de la función accion
 		vm.cancelar = function(){
 			$timeout.cancel(retraso);
 		}
 	}



