/**
 * Created by pure coder on 2/18/14.
 */

angular.module('rck_app')

    .controller('contactController',['$scope','ContactService','LoginService','$location'
        ,function($scope,ContactService,LoginService,$location){

        $scope.contacts = ContactService;
        $scope.loginObj = LoginService;


        //contstruct contact submit function
        $scope.addContact = function(){

            $scope.contacts.$add({name:$scope.name,
                email:$scope.email,
                message:$scope.message});

            $scope.name = "";
            $scope.email = "";
            $scope.message = "";
        };



        $scope.data = "Contact us";

        $scope.getUser = function(){
            //console.log("function called");
            $scope.loginObj.$getCurrentUser()

                .then(function(user){
                    //console.log("promise");

                    if(user){
                        //console.log("Authenticated "+ user.email);
                    }else{
                        //console.log("Not Authenticated");
                        $location.path('/');
                    }
                },function(error){
                    //console.log("not logged in "+ error);
                });

        };

        $scope.getUser();

    }]);
