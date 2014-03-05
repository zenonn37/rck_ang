/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')
    .controller('schCtrl',['$scope','SchService',function($scope,schService){

        $scope.revents = schService;

        $scope.data = "Admin Only";


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
