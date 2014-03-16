/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')
    .controller('schCtrl',['$scope','SchService','$location','LoginService',

              function($scope,schService,$location,LoginService){

        $scope.revents = schService;

                  $scope.loginObj = LoginService;

                  //console.log(pageAuth+"testing log");


        $scope.data = "Admin Only";


                  $scope.getUser = function(){
                         //console.log("function called");
                      $scope.loginObj.$getCurrentUser()

                          .then(function(user){
                             // console.log("promise");

                              if(user){
                                  //console.log("Authenticated "+ user.email);
                              }else{
                                  //console.log("Not Authenticated");
                                  $location.path('/');
                              }
                          },function(error){
                             // console.log("not logged in "+ error);
                          });

                  };

                  $scope.getUser();









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
