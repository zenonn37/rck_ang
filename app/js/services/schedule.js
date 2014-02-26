/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')

    .factory('SchService',["$firebase",function($firebase){

        var ref = new Firebase("https://rcks.firebaseio.com/schedule");

        return $firebase(ref);


    }]);
