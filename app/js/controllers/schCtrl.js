/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')
    .controller('schCtrl',['$scope','SchService',function($scope,schService){

        $scope.revents = schService;

        $scope.data = "Admin Only";


        //add fire base push function
        $scope.addEvent = function(){

            $scope.event.$add({

                schNumber: $scope.scheduleNumber,
                day:$scope.day,
                time:$scope.time,
                events:$scope.events

            });
            $scope.event="";

        };



    }]);
