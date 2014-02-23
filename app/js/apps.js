/**
 * Created by Ruby on 2/17/14.
 */

var app = angular.module('Rck',['ngRoute','ngAnimate','firebase']);


 app.config(function($routeProvider){

     $routeProvider.

         when('/',


         {
             templateUrl:"views/home.html",
             controller: "PagesController"
         }

         )

         . when('/racing',


         {
             templateUrl:"views/racing.html",
             controller: "PagesController"
         }

     )  . when('/shop',


         {
             templateUrl:"views/shop.html",
             controller: "PagesController"
         }

     )  . when('/competitions',


         {
             templateUrl:"views/comp.html",
             controller: "PagesController"
         }

     )

         . when('/events',


         {
             templateUrl:"views/events.html",
             controller: "PagesController"
         }

     )
         . when('/about_rck',


         {
             templateUrl:"views/about.html",
             controller: "CompanyController"
         }

     )

         . when('/gallery',


         {
             templateUrl:"views/gallery.html",
             controller: "CompanyController"
         }

     )
         . when('/schedule',


         {
             templateUrl:"views/schedule.html",
             controller: "ScheduleController"
         }

     )





         .otherwise({

             redirectTo:'/'
         })


 });