/**
 * Created by pure coder on 2/26/14.
 */

angular.module('rck_app')

      //build home controller
        .controller('homeController',['$scope',function($scope){

        $scope.title = "RC Kinetics";

        $scope.racing = "RCK offers a 15,000 square foot indoor facility with an asphalt on-road and off-road clay track.";

        $scope.pro = "New RC Cars and Trucks, Parts, Accessories, Repairs, and rentals.";

        var events = $scope.event = "Our lounge area features  arcades as well as vending machine and concession stands. We offer Hosting Events for your Birthday Parties and Businesses.";
        //console.log(events.length);
        $scope.toggle = true;
        $scope.toggle2 = true;
        $scope.toggle3 = true;






    }]);