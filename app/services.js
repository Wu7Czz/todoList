app.factory('getDataService', function($http) {
  // //由服务获取基础数据的第一种方法from
  // return {
  //   from: function(url) {
  //       return $http.get("/angular/json/"+url+".json");
  //     },
  // }

  //由服务获取基础数据的第二种方法getData
  return {
    getData: function(){
      return $http.get('/angular/json/profile.json').then(function(res){
        return res.data;
      });
    }
  };


});