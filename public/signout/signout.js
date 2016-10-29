angular.module('bakpak.signout', [])
.controller('signoutCtrl', function($http, information, $rootScope){
  $http({
    method: 'GET',
    url: '/signout'
  }).then((res) => {
    information.currentUser = "";
    $rootScope.map_display = false;
  });
});
