// Control matches.
app.controller('matchController', ['$scope', 'matchFactory'
    
    , function ($scope, matchFactory) {

        // Flags.
        $scope.flags = {};
        matchFactory.getFlags()
            .then(function (flags) {
                console.log('flags', flags);
                $scope.flags = flags;
                $scope.getMatches();
            }, function (err) {
                $scope.matchesError = err;
            });

        // Matches.
        $scope.matches = [];
        $scope.getMatches = function() {
            matchFactory.getMatches()
                .then(function (matches) {
                    console.log('matches', matches);
                    $scope.matches = matches;
                }, function (err) {
                    $scope.matchesError = err;
                });
        };
        
        // Get team flag.
        $scope.getFlag = function(sname) {
            return $scope.flags[sname];
        }
        
        // Voksolás.
        $scope.sendVote = function(matches) {
            matchFactory.sendVote(matches)
                .then(function(res){
                    console.log(res);
                });
        };
    }]);


