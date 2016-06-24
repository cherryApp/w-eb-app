app.factory('teamFactory', ['$http', '$q', function ($http, $q) {
    return {
        getTeamList: function () {
            var deferred = $q.defer();
            $http.get('/team/list')
                .then(function (serverData) {
                    deferred.resolve(serverData.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        createTeam: function(team) {
            var deferred = $q.defer();
            $http.post('/team/new', team)
                .then(function(createResponse){
                    deferred.resolve(createResponse.data);
                }, function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        updateTeam: function(team) {
            var deferred = $q.defer();
            $http.post('/team/update', team)
                .then(function(createResponse){
                    deferred.resolve(createResponse.data);
                }, function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    };
}]);