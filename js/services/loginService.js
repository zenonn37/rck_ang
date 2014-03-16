/**
 * Created by pure coder on 3/16/14.
 */

angular.module('rck_app')
          .factory('LoginService',['$firebaseSimpleLogin',function($firebaseSimpleLogin){

          var dataRef = new Firebase('https://rcks.firebaseio.com');

          return $firebaseSimpleLogin(dataRef);






    }]);