// Meccsek kezelése.
app.controller('teamHandlerController', [
    '$scope',
    'teamFactory',
    '$timeout',
    function($scope, teamFactory, $timeout) {
      
        // Csapatok listája.
        $scope.getTeams = function() {
          teamFactory.getTeamList()
              .then(function(teamList){
                  $scope.teamList = teamList;
              });          
        };
        
        // Új meccs létrehozása.
        $scope.createTeam = function(team){
            teamFactory.createTeam(team)
                .then(function(result){
                    $scope.matchCreated = true;
                    $timeout(function(){
                        $scope.matchCreated = false;
                    }, 3000);
                    $scope.getTeams();
                    $scope.team = {};
                }, function(){
                    $scope.matchCreatedError = true;
                    $timeout(function(){
                        $scope.matchCreatedError = false;
                    }, 3000);
                });
        };
      
        // Új meccs létrehozása.
        $scope.updateTeam = function(team){
            teamFactory.updateTeam(team)
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
      
        $scope.getTeams();
        
      
      
      
    }
]);