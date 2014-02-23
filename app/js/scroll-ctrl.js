/**
 * Created by pure coder on 2/23/14.
 */



         app.controller("ScrollCrtl",["$scope","$location","$anchorScroll",
                     function($scope,$location,$anchorScroll){


                         $scope.ScrollCrtl = function(){

                             $location.hash('top');
                             console.log("top plz")


                             $anchorScroll();


                         };



                     }]);