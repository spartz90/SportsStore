angular.module("sportsStore")
.constant("dataUrl", "../data/merchandise.json")
.controller("sportsStoreCtrl", function($scope, $http, dataUrl){

  $scope.data = {};

  $http.get(dataUrl).success(function(data){
    $scope.data.products = data;
  }).error(function(error, status){
    $scope.data.error = { message: error, status: status};
  });
});
