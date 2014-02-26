/**
 * Created by pure coder on 2/26/14.
 */


angular
    .module('rck_app',['ui.router','ngAnimate','firebase'])

       .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){

                         $urlRouterProvider.otherwise('/');


                                $stateProvider
                                    .state('home',{

                                        url:'/',
                                        templateUrl:'views/home.html',
                                        controller: 'homeController'

                                    })

                                    .state('racing',{

                                        url:'/racing',
                                        templateUrl:'views/racing.html',
                                        controller: 'racingController'
                                    })

                                    .state('shop',{

                                        url:'/shop',
                                        templateUrl:'views/shop.html',
                                        controller: 'shopController'

                                    })

                                    .state('competition',{

                                        url:'/competition',
                                        templateUrl:'competition/shop.html',
                                        controller: 'compController'

                                    })




    }]);
