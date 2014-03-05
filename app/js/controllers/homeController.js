/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')

      //build home controller
        .controller('homeController',['$scope',function($scope){

        $scope.title = "RC Kinetics";

        $scope.racing = "RCK offers a 15,000 square foot facility with an asphalt and dirt track.";

        $scope.pro = "New RC Cars and Trucks, Parts, Accessories, Repairs, and rentals.";

        var events = $scope.event = "Our lounge area has arcades and we offer Hosting Events for your Birthday Parties and Businesses.";
        //console.log(events.length);
        $scope.toggle = true;
        $scope.toggle2 = true;
        $scope.toggle3 = true;






    }]);