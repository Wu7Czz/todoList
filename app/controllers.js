app.controller("todoController", ['$scope', '$rootScope', 'getData', '$http', function($scope, $rootScope, $http, getData) {

    $http.get("/angular/json/profile.json").then(function(res) {
        $scope.profleData = res.data;
    });
    $http.get("/angular/json/base.json").then(function(res) {
        $scope.baseData = res.data;
    });
    $http.get("/angular/json/todoLists.json").then(function(res) {
        $scope.listData = res.data;
    });
    $http.get("/angular/json/detiles.json").then(function(res) {
        $scope.detiles = res.data;
    });

    _.forEach(["2", "3"], function(val, key) {
        if (_.indexOf(val, "1") + 1) {
            console.log("1");
        };

    });

}]);
