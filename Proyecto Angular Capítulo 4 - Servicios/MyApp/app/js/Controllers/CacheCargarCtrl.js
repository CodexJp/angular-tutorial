/*
 * Controlador usado para cargar los datos de la caché del navegador
 * almacenados por medio del controlador CacheGuardarCtrl
 */
 angular.module("MyApp")
 	.controller("CacheCargarCtrl", CacheCargarCtrl);

 		CacheCargarCtrl.$inject = ['$cacheFactory'];
 		function CacheCargarCtrl($cacheFactory){
 			var vm = this;
 			var cachePrincipal = $cacheFactory.get('cachePrincipal');

 			vm.imprimir = function(){
 				console.log(cachePrincipal.get('mensaje'));
 			}

 			vm.borrarCache = function(){
 				cachePrincipal.removeAll();
 				console.log('Cache borrada con éxito! --> ');
 				console.log($cacheFactory.info());
 			}
 		}
 