/**
 * Created by pure coder on 2/26/14.
 */


angular
    .module('rck_app',['ui.router','ngAnimate','firebase','ui.bootstrap'])

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

                                    .state('trophy',{

                                        url:'/trophy',
                                        templateUrl:'views/competition.html',
                                        controller: 'compController'

                                    })



                                    .state('about',{

                                        url:'/about',
                                        templateUrl:'views/about.html',
                                        controller: 'aboutController'

                                    })

                                  
                                    .state('schedule',{

                                        url:'/schedule',
                                        templateUrl:'views/schedule.html',
                                        controller: 'scheduleController'

                                    })

                                    .state('contact',{

                                        url:'/contact',
                                        templateUrl:'views/contact.html',
                                        controller: 'contactController'

                                    })

                                    .state('admin',{

                                        url:'/admin/dashboard',
                                        templateUrl:'admin/dashboard.html',
                                        controller: 'schCtrl'

                                    })

                                    .state('event',{

                                        url:'/admin/dashboard/event',
                                        templateUrl:'admin/events.html',
                                        controller: 'schCtrl'

                                    })

                                    .state('messages',{

                                        url:'/admin/dashboard/messages',
                                        templateUrl:'admin/message.html',
                                        controller: 'schCtrl'

                                    })

                                    .state('login',{

                                        url:'/admin/login',
                                        templateUrl:'admin/login.html',
                                        controller: 'authController'


                                    })




    }]);
