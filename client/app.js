
'use strict';


angular.module('appMain',[])

    .controller('HomeCtrl',function ($scope,$http) {
        $http.post("/api/orderData")
        .then(function (result) {
            $scope.orderData = result.data.response;
        });


        $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.orderData.length; i++){
        var product = $scope.orderData[i];
        total += (product.Amount);
    }
    return total;
}


  $scope.stats = function() {
    $scope.results = {};
    $scope.Names = {};
    for (var i = 0; i < $scope.orderData.length; i++) {
      var Phone = $scope.orderData[i].Phone;
      var onceName=$scope.orderData[i].Name;
      if(Phone) {
        if ($scope.results.hasOwnProperty(Phone)) {
          $scope.results[Phone]++;

        } else {
             $scope.Names[Phone] = $scope.orderData[i].Name;
          $scope.results[Phone] = 1;

        }
      }
    }
   


    $scope.OnceOrderNameArray = [];
    $scope.mainRes = {};
    for (var i in $scope.results) {
        if($scope.results[i] < 5){
            if ($scope.mainRes.hasOwnProperty($scope.results[i])) {
                 $scope.mainRes[$scope.results[i]] = $scope.mainRes[$scope.results[i]] + 1;
            }else{
                 $scope.mainRes[$scope.results[i]] = 1;
            }
        }else{
            if(!$scope.mainRes['5']){
                $scope.mainRes['5'] = 0;
            }
            $scope.mainRes['5'] = $scope.mainRes['5'] + 1;
        }
        if($scope.results[i+''] === 1){
           $scope.OnceOrderNameArray.push($scope.Names[i+'']);
           
        }
       
    };
     
   
   
 };

});



 
        

