angular.module('MyCV', [
    'ui.router',
    'ngRoute',
    'chart.js',
    'ngAnimate'
    ])
  .config([ '$urlRouterProvider', '$stateProvider' , function( $urlRouterProvider ,$stateProvider ) {



  $urlRouterProvider.otherwise('/home');


  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/personal.html',
        controller: 'MasterCtrl',
      })
      .state('education', {
        url: '/education',
        templateUrl: 'views/education.html',
        controller: 'MasterCtrl',
      })
      .state('experience', {
        url: '/experience',
        templateUrl: 'views/experience.html',
        controller: 'MasterCtrl',
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        controller: 'MasterCtrl',
      })
      .state('skills', {
        url: '/skills',
        templateUrl: 'views/skills.html',
        controller: 'MasterCtrl',
      })
      .state('certifications', {
        url: '/certifications',
        templateUrl: 'views/certifications.html',
        controller: 'MasterCtrl',
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'MasterCtrl',
      })
      ;









  }]);