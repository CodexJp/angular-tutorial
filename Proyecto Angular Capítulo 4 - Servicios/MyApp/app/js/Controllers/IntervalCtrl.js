/*
 * Controlador usado para implementar el uso del servicio $interval, usado para generar repeticiones con intervalos de tiempo 
 * $interval básicamente realizará una tarea en una cantidad específicas de ocasiones, muy útil para manejar intervalos del lado del cliente,
 * cabe destacar que el servicio $interval también está basado en promesas, por lo que podemos tener control de ellos mediante then...
 */
 angular.module("MyApp")
 	.controller('IntervalCtrl', IntervalCtrl)

 	//Realizamos la inyección de las dependencias necesarias para implementar $interval
 	IntervalCtrl.$inject = ['$interval', '$scope', '$log'];
 	function IntervalCtrl($interval, $scope, $log){
 		$scope.$log = $log;
 		var vm = this; //ViewModel del controlador

		vm.empezarConteo = function(){
	 		/*
	 		 * Creamos nuestro intérvalo, params: función a la que le aplicaremos el intérvalo, 
	 		 * duración de cada intervalo, número de veces que se va a repetir
	 		 */
	 		var conteo = $interval(imprimirConteo, 1000, 5);
	 		var i = 4;

	 		//Función a la que le aplicaremos el intervalo
	 		function imprimirConteo(){
	 			if(i > 0){
	 				$log.log('Quedan ' + i + ' segundos...');
	 				i--;
	 			}else{
	 				$log.info('Conteo finalizado!')
	 			}
	 		}

	 		//Acción a realizar después que la promesa del $interval retorne resultado 
	 		conteo.then(function(){
	 			alert('Ya han pasado 5 segundos!');
				$interval.cancel(conteo); //Cancelamos el intervalo manualmente ya que $interval no lo hace por si solo		
	 		});

	 		//Tomaremos como precaución, cancelar el intervalo manualmente antes de la destrucción del $scope
	 		$scope.$on('$destroy', function(){
	 			$interval.cancel(conteo);	 			
	 		})
 		}
 	}