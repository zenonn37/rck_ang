/**
 * Created by pure coder on 3/5/14.
 */

angular.module("rck_app")

    .controller("authController",["$scope","$location","LoginService","SchService",
        function($scope,$location,
                 LoginService,SchService){

                 //var logged  = LoginService;
                 $scope.loginObj = LoginService;

                 //$scope.revents = SchService;


                 //var dataRef =  new Firebase("https://rcks.firebaseio.com/schedule");

                //$scope.loginObj = $firebaseSimpleLogin(dataRef);
           // var logged =  $scope.loginObj;

                $scope.data="Admin Dashboard for RCK";

              //console.log(logged);








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
                 // console.log('logged);

                    if(user){
                       //console.log("logged in");
                        $location.path("/admin/dashboard");
                       // $scope.loginChange(paths);
                    }



                },function(error){

              //  console.log('log in fail:' + error);
            });











        }//end login function




         }

    ]);
