/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')
    .controller('schCtrl',['$scope','SchService','$firebaseSimpleLogin',"$location",

              function($scope,schService,$firebaseSimpleLogin,$location){

        $scope.revents = schService;

        var dataRef = new Firebase("https://rcks.firebaseio.com/schedule");

                  $scope.loginObj = $firebaseSimpleLogin(dataRef);

                  var users = $scope.loginObj;


                  console.log(users);

                  if(!users){
                       console.log("Checked loginObj"+users);
                      $location.path('/');

                  }



        $scope.data = "Admin Only";








        //add fire base push function

                  $scope.checkUser = function(checkA){
                          console.log("im working "+checkA);
                         if(checkA == null){
                             $location.path('/');
                         }

                  }
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
