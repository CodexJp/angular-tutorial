/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('MyApp')
.run(['$rootScope', '$anchorScroll', function ($rootScope, $anchorScroll) {

    /**
     * Do something here when the app start
     */
    $anchorScroll.yOffset = 500;
}]);