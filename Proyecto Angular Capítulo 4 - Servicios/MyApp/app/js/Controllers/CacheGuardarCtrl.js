/*
 * Controlador encargado de adminsitrar la caerrga en la caché
 * del navegador, por medio de este controlador administraremos
 * la carga y lectura de datos en la caché del navegador
 */
angular.module("MyApp")
	.controller("CacheGuardarCtrl", CacheGuardarCtrl);

		// Injectamos la dependencia del servicio cacheFactory para trabajar con la cache
		CacheGuardarCtrl.$inject = ['$cacheFactory'];
		function CacheGuardarCtrl($cacheFactory){
			
			// Variable de contexto
			var vm = this; 
			// Objeto de cache con nombre 'cachePrincipal'
			var cachePrincipal = $cacheFactory('cachePrincipal');
			console.log($cacheFactory.info());	
			
			vm.guardar = function(){
				cachePrincipal.put('mensaje', vm.texto);
				console.log('Objeto guardado en la cache con éxito!');
				// Imprimimos los objetos de caché que tenemos creados
				console.log($cacheFactory.info());	
			}	
		}
