/**
 * Created by pure coder on 2/18/14.
 */
angular.module('rck_app')

    .controller('scheduleController',['$scope','SchService',function($scope,SchService){

      $scope.schedules = SchService;

    }]);
