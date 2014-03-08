/**
 * Created by pure coder on 3/7/14.
 */

angular.module("rck_app")
    .factory('ContactService',["$firebase",function($firebase){

   var ref = new Firebase("https://rcks.firebaseio.com/contacts");

        return $firebase(ref);







    }]);
