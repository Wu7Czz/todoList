app.filter('tagsFilter', function($rootScope) {
  return function(text) {
    var tagVal ="";
    _.forEach(text, function(i){
      _.forEach($rootScope.baseData.tags, function(val) {
        if (val.id == i) {
          tagVal += val.tag;
          tagVal += "、";
        }
      })
    });
    
    return tagVal;
  }
});

app.filter('usersFilter', function($rootScope) {
  return function(text) {
    var userVal ="";
    _.forEach(text, function(i){
      _.forEach($rootScope.baseData.users, function(val) {
        if (val.id == i) {
          userVal = val.name;
        }
      })
    });
    
    return userVal;
  }
});

app.filter('priorityFilter', function($rootScope) {
  return function(text) {
    var priVal ="";
    _.forEach(text, function(i){
      _.forEach($rootScope.baseData.priority, function(val) {
        if (val.id == i) {
          priVal = val.val;

        }
      })
    });
    
    return priVal;
  }
});
