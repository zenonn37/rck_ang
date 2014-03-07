/**
 * Created by pure coder on 2/18/14.
 */

angular.module('rck_app')

    .controller('contactController',['$scope,ContactService',function($scope,ContactService){

        $scope.contacts = ContactService;

        $scope.data = "Contact us";

    }]);
