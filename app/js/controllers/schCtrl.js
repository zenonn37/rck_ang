/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')
    .controller('schCtrl',['$scope','SchService','$firebaseSimpleLogin',"$location",

              function($scope,schService,$firebaseSimpleLogin,$location){

        $scope.revents = schService;

        var authRef = new Firebase("https://rcks.firebaseio.com/schedule");

        $scope.authCheck = $firebaseSimpleLogin(authRef);

           if($scope.authCheck == null){
              $location.path("/admin/login");
           }

        $scope.data = "Admin Only";



        var checkA = $scope.authCheck.$getCurrentUser();



        //add fire base push function
        $scope.addEvent = function(){

            $scope.revents.$add({


                day:$scope.day,
                month:$scope.month,
                start:$scope.start,
                end:$scope.end,
                events:$scope.events

            });
            $scope.event="";

        };





    }]);
