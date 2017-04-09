app.controller("todoController", ['$scope', '$rootScope', '$http' ,'$interval' ,'$filter' ,'$timeout' ,'getDataService' ,function($scope, $rootScope, $http ,$interval ,$filter ,$timeout, getDataService) {
  
  // //依靠其服务 from 获取基础数据
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

  // //依靠服务 getData 获取基础数据
  // getDataService.getData().then(function(res){
  //   $scope.profileData = res;
  // });

  //直接获取基础数据
  $rootScope.listData0={};
  $http.get("/angular/json/profile.json").then(function(res) {
    $rootScope.profileData = res.data;
  });
  $http.get("/angular/json/base.json").then(function(res) {
    $rootScope.baseData = res.data;
  });
  $http.get("/angular/json/todoLists.json").then(function(res) {
    $rootScope.listData = res.data;
    $rootScope.listData0 = _.cloneDeep($rootScope.listData);
  });
  $http.get("/angular/json/detiles.json").then(function(res) {
    $rootScope.detiles = res.data;
  });



  this.hi = function() {
    // console.log($scope.profileData);
    // console.log($scope.baseData);
    console.log($scope.listDataa);
    // console.log($scope.baseData);
    // console.log($scope.baseData['tags']);

  };

  this.search = function(){
    $rootScope.listData =_.cloneDeep($rootScope.listData0);
    if (!$scope.searchText) {
    }else{
      angular.forEach($rootScope.listData, function(data,index,array){
        angular.forEach(data, function(d,i,a){
          if (!(d.title.indexOf($scope.searchText)+1)) {
            console.log(d.title);
            _.remove(data, d);
            
          }
        });
      });
    };
    //bug
    if (!$scope.searchText) {
    }else{
      angular.forEach($rootScope.listData, function(data,index,array){
        angular.forEach(data, function(d,i,a){
          if (!(d.title.indexOf($scope.searchText)+1)) {
            console.log(d.title);
            _.remove(data, d);
            
          }
        });
      });
    }
    // console.log(index);

  };









}]);
