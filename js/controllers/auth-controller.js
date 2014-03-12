/**
 * Created by pure coder on 3/5/14.
 */

angular.module("rck_app")

    .controller("authController",["$scope","$location","$firebaseSimpleLogin","SchService",
        function($scope,$location,
                 $firebaseSimpleLogin,SchService){

                 $scope.revents = SchService;

                 var dataRef =  new Firebase("https://rcks.firebaseio.com/schedule");

                $scope.loginObj = $firebaseSimpleLogin(dataRef);

                $scope.data="Admin Login";







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



            $scope.login = function(){

            $scope.loginObj.$login('password',{

              email:$scope.email,
              password:$scope.password



            }).then(function(user){
                  console.log('logged in as:' + user.uid);
                    //$location.path('/admin/dashboard/event');
                    if(user){
                       console.log("logged in");
                        $location.path("/admin/dashboard");
                       // $scope.loginChange(paths);
                    }



                },function(error){

                console.log('log in fail:' + error);
            });











        }//end login function




         }

    ]);
