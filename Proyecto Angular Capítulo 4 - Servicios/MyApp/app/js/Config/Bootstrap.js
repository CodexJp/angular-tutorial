/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('MyApp')

 	// Por medio de esta configuración le decimos a Angular que todos los logs de tipo debug no deben ser mostrados en tiempo de ejecución!
 	.config(['$logProvider', function($logProvider){
 		$logProvider.debugEnabled(true);
 	}])

 	//Por medio de esta configuración le decimos a Angular que no agregue anotaciones al DOM ya que no nos interesa saberlas
 	.config(['$compileProvider', function($compileProvider){
 		$compileProvider.debugInfoEnabled(false);
 	}])

	.run(['$rootScope', function ($rootScope) {
	    /**
	     * Do something here when the app start
	     */
	}]);