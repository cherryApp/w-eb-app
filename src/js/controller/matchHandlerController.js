// Meccsek kezelése.
app.controller('matchHandlerController', [
    '$scope',
    'matchFactory',
    '$timeout',
    function($scope, matchFactory, $timeout) {
      
        // Meccsek listája.
        $scope.getMatches = function() {
          matchFactory.getMatchList()
              .then(function(matchList){
                  $scope.matchList = matchList;
              });          
        };
        
        // Új meccs létrehozása.
        $scope.createMatch = function(match){
            matchFactory.createMatch(match)
                .then(function(result){
                    $scope.matchCreated = true;
                    $timeout(function(){
                        $scope.matchCreated = false;
                    }, 3000);
                    $scope.getMatches();
                }, function(){
                    $scope.matchCreatedError = true;
                    $timeout(function(){
                        $scope.matchCreatedError = false;
                    }, 3000);
                });
        };
      
        // Új meccs létrehozása.
        $scope.updateMatch = function(match){
            matchFactory.updateMatch(match)
                .then(function(result){
                    $scope.matchUpdated = true;
                    $timeout(function(){
                        $scope.matchUpdated = false;
                    }, 3000);
                    // $scope.getMatches();
                }, function(){
                    $scope.matchUpdatedError = true;
                    $timeout(function(){
                        $scope.matchUpdatedError = false;
                    }, 3000);
                });
        };
      
        $scope.getMatches();
        
      
      
      
    }
]);