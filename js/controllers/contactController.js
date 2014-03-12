/**
 * Created by pure coder on 2/18/14.
 */

angular.module('rck_app')

    .controller('contactController',['$scope','ContactService',function($scope,ContactService){

        $scope.contacts = ContactService;


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

    }]);
