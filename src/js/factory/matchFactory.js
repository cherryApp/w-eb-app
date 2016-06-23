app.factory('matchFactory', ['$http', '$q', function ($http, $q) {
    return {
        getMatches: function () {
            var deferred = $q.defer();
            $http.get('json/match.json')
                .then(function (jsonData) {
                    deferred.resolve(jsonData.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        getMatchList: function () {
            var deferred = $q.defer();
            $http.get('/match/list')
                .then(function (matchData) {
                    deferred.resolve(matchData.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        getFlags: function () {
            var deferred = $q.defer();
            $http.get('json/flag.json')
                .then(function (jsonData) {
                    deferred.resolve(jsonData.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        createMatch: function(match) {
            var deferred = $q.defer();
            $http.post('/match/new', match)
                .then(function(createResponse){
                    deferred.resolve(createResponse.data);
                }, function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        updateMatch: function(match) {
            var deferred = $q.defer();
            $http.post('/match/update', match)
                .then(function(createResponse){
                    deferred.resolve(createResponse.data);
                }, function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    };
}]);