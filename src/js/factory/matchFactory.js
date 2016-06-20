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
        getFlags: function () {
            var deferred = $q.defer();
            $http.get('json/flag.json')
                .then(function (jsonData) {
                    deferred.resolve(jsonData.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    };
}]);