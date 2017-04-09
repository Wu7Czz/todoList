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
  $http.get("/angular/json/profile.json").then(function(res) {
    $rootScope.profileData = res.data;
  });
  $http.get("/angular/json/base.json").then(function(res) {
    $rootScope.baseData = res.data;
  });
  $http.get("/angular/json/todoLists.json").then(function(res) {
    $rootScope.listData = res.data;
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
    $rootScope.baseData0 =_.cloneDeep($rootScope.baseData);
    _.forEach($rootScope.listData, function(v ,k){
      _.forEach(v, function(val ,key){
        console.log($scope.searchText);
        if (!(val.title.indexOf($scope.searchText)+1)&&(!!$scope.searchText)) {
          v.splice(_.findIndex(v ,val),1);
        }
      })
    })

  };



  // $socpe. = 
  // var getTagsBaseDate = function(){
  //   var 
  //   _.forEach($scope.listData, function(val){
  //     if (val.tags.indexOf('1') +1) {
  //       console.log("1");
  //     }
  //   });
  // };



  // $timeout(getTagsBaseDate, 0);






}]);
