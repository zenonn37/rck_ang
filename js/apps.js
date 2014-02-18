/**
 * Created by Ruby on 2/17/14.
 */

var app = angular.module('Rck',['ngRoute','ngAnimate','firebase']);


 app.config(function($routeProvider){

     $routeProvider.

         when('/',


         {
             templateUrl:"views/home.html",
             controller: "HomeController"
         }

         )

         . when('/racing',


         {
             templateUrl:"views/racing.html",
             controller: "HomeController"
         }

     )



         .otherwise({

             redirectTo:'/'
         })


 });