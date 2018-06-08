angular.module('appUserCtrl',[])
    .controller('UserCtrl',function ($scope,$http,$state,UserService) {
    $scope.oneuserData	= UserService.getUserData();
    	console.log('userData : '+JSON.stringify($scope.oneuserData))
    	
    

})