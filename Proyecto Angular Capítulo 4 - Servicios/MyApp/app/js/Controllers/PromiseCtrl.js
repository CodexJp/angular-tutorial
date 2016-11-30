/*
 * Este controlador será un mog service del lado de la presentación de 
 * mi aplicación, este controlador hará las veces de un servidor 
 * que proveerá al cliente de ciertas rutinas o comportamientos,
 * esto con el fin de verificar en tiempo real la utilidad del 
 * servicio $q (promise) en Java
 *
 * $q 				--> Promise
 * $q.defer() 		--> Usado para crear una tarea, acción o actividad
 * defer.resolve 	--> Respuesta exitosa de la petición al servidor o al servicio deseado
 * defer.reject 	--> Respuesta negativa de la petición al servidor o al servicio deseado 
 * defer.notify		--> usado para notificar sobre un proceso o estado de la actividad de la promesa 
 */
 angular.module("MyApp")
 	.controller("PromiseCtrl", ["$scope", "$q", 
 		function($scope, $q){
 			/*
			 * función que simulará una respuesta tardía
			 * del servidor
 			 */
 			var checkServer = function(){
 				var def = $q.defer(); // Atributo usado para simular una tarea
 				
 				// Retrasamos 2 segundos, luego de eso activamos la "conexión con el servidor"
 				setTimeout(function(){
 					def.resolve("Server Online!")
 				}, 2000);

 				return def.promise; // Retornamos la promesa de la tarea creada
 			};
 			/*
			 * Función que simulará una respuesta a la
			 * petición HTTP generada
 			 */
 			 var checkHTTP = function(){
 			 	var def = $q.defer(); // Atributo usado para simular una tarea

 			 	// Simulamos un retraso aleatorio de tiempo (dentro de 5 segundos) como respuesta a la petición HTTP
 			 	setTimeout(function(){
 			 		if(Math.floor(Math.random() * 100) > 50){
 			 			def.resolve("HTTP Online!")
 			 		}else{
 			 			def.reject("El servicio no está disponible, petición HTTP rechazada");
 			 		};
 			 	}, 5000)

 			 	return def.promise; // Retornamos la promesa de la tarea con su estado 			 	
 			 };
 			 /*
			  * Función que simulará la respuesta por parte
			  * del servidor de base de datos 
 			  */
 			  var checkBD = function(){
 			  	var def = $q.defer(); // Atributo usado para simular una tarea

 			  	// Simulamos un retraso aleatorio de tiempo (dentro de 3 segundos) como respuesta a la petición al servidor de BD
 			  	setTimeout(function(){	
 			  		if(Math.floor(Math.random() * 100) > 50){
 			  			def.resolve("DB Server Online!")
 			  		}else{
 			  			def.reject("El servidor de BD no se encuentra disponible")
 			  		}
 			  	}, 3000)

 			  	return def.promise; // Retornamos la promesa de la tarea con su estado 
 			  };
 			   /*
			  * Función que simulará la respuesta por parte
			  * del acceso a una conexión segura SSL  
 			  */
 			  var checkSSL = function(){
 			  	var def = $q.defer(); // Atributo usado para simular una tarea

 			  	// Simulamos un retraso aleatorio de tiempo (dentro de 4 segundos) como respuesta a la petición de conexión segura
 			  	setTimeout(function(){
 			  		def.notify("Comprobación de conexión segura iniciada...");

 			  		if(Math.floor(Math.random() * 100) > 50){
 			  			def.notify("Las conecciones seguras están habilitadas!");
 			  			def.resolve("SSL");
 			  		}else{
 			  			def.notify("Las conexiones seguras están desactivadas...");
 			  			def.reject("Desactivadas!");
 			  		}
 			  	}, 4000)

 			  	return def.promise; // Retornamos la promesa de la tarea con su estado 
 			  };

 			  // Simulamos la llamada al servicio que mira si el servidor está arriba
 			  checkServer().then(function(result){
 			  	$scope.status = result;
 			  });

 			  // Simulamos la llamada al servicio que mira si la petición HTTP fue ejecutada con éxito
 			  checkHTTP().then(function(result){
 			  	$scope.http = result;
 			  
 			  }, function(err){
 			  	$scope.http = err
 			  });

 			  // Simulamos la llamada al servicio que mira si el servidor de BD está arriba
 			  checkBD().then(function(result){
 			  	$scope.db = result;
 			  
 			  }, function(err){
 			  	$scope.db = err;
 			  });

 			  // Simulamos la llamada al servicio que mira si la conexión segura SSL está activa
 			  checkSSL().then(function(result){
 			  	$scope.ssl = result;
 			  
 			  }, function(err){
 			  	$scope.ssl = err;
 			  
 			  }, function(notif){
 			  	console.log(notif);
 			  });
 		}])