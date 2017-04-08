var app = angular.module('myApp', ['ngRoute']);

app.factory('getDataService', function($http) {

  // return {
  //   from: function(url) {
  //       return $http.get("/angular/json/"+url+".json");
  //     },
  // }

  return {
    getData: function(){
      return $http.get('/angular/json/profile.json').then(function(res){
        return res.heads;
      });
    }
  };


});


// app.config(function($routeProvider) {
//   $routeProvider
//   .when('/', {
//     controller: 'todoController',
//     resolve: {
//       getBaseData: function (getDataService) {
//         return getDataService();
//       }
//     }
//   })
// });





app.controller("todoController", ['$scope', '$rootScope', '$http', 'getDataService' ,function($scope, $rootScope, $http, getDataService) {
    // var profile = "profile";
    // var base = "base";
    // var todoLists = "todoLists";
    // var detiles = "detiles";

    // getDataService.from(profile).then(function(res) {
    //   $scope.profileData = res.data;
    // },function(error) {
    //   console.log("profile未接收")
    // });
    // getDataService.from(base).then(function(res) {
    //   $scope.baseData = res.data;
    // },function(error) {
    //   console.log("base未接收")
    // });
    // getDataService.from(todoLists).then(function(res) {
    //   $scope.listData = res.data;
    // },function(error) {
    //   console.log("todoLists未接收")
    // });
    // getDataService.from(detiles).then(function(res) {
    //   $scope.detiles = res.data;
    // },function(error) {
    //   console.log("detiles未接收")
    // });

    getDataService.getData().then(function(res){
        $scope.profileData = res;
    });
}]);
