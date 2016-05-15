'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'angularSpinner']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
