app.directive('tagsBar',  function() {
  return {
    restrict: 'EA',
    scope: false,
    template: '\
    <table>\
      <tr>\
      <th ng-repeat="tag in baseData.tags">\
        {{tag.tag}}\
      </th>\
      <tr\>\
      <tr>\
      <td ng-repeat="tagCount in profileData.tagCount">\
        {{tagCount}}\
      </td>\
      <tr\>\
    </table>'
  };
});

// app.directive('listContainer',  function() {
//   return {
//     restrict: 'EA',
//     scope: false,
//     template: '\
//     <table>\
//       <tr>\
//       <th ng-repeat="tag in baseData.tags">\
//         {{tag.tag}}\
//       </th>\
//       <tr\>\
//       <tr>\
//       <td ng-repeat="tagCount in profileData.tagCount">\
//         {{tagCount}}\
//       </td>\
//       <tr\>\
//     </table>'
//   };
// });
