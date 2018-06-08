
/*app.controller('ctrl', function($scope, $http) {
    $http.post("/api/githubData")
    .then(function (result) {
        $scope.githubData = result.data.response;
    });


    $scope.userData = function(oneUserData){
    	console.log('userData : '+JSON.stringify(oneUserData))
    };

   
}); */
'use strict';

var App = angular.module('github',['ui.router','appHome','appUser']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/home");
				
				$stateProvider
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })



			}]);


//






