/**
 * Created by Ruby on 2/17/14.
 */

app.controller('PagesController',function($scope){

 $scope.header = "Welcome to RC Kinectics";

    $scope.racing = "RCK offers a 15,000 square foot facility with an asphalt and dirt track.";

    $scope.pro = "New RC Cars and Trucks, Parts, Accessories, Repairs, and rentals.";

    $scope.event = "Let Us Host Your Birthday Parties, and Business Events.";



    //console.log($scope.event.length);


   $scope.onViewLoad = function(){

      console.log("view changed");

   }

});


