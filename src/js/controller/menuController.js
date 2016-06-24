// Control menu.
app.controller('menuController', ['$scope', 'matchFactory',
    function($scope, matchFactory){
        $scope.appName = 'EB 2016 szavazás';
      
        $scope.currentPage = location.href.replace(
            location.protocol+'//'+location.host,
            ''
        );
}]);