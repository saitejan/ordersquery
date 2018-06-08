angular.module('appUser',['appUserCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.userData', {
            url: "/userData",
            controller: 'UserCtrl',
            templateUrl: "modules/user/template/usertemp.html"
        })
});