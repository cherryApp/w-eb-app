app.factory('matchFactory', ['$http', '$q', function ($http, $q) {
    return {
        getMatches: function () {
            var deferred = $q.defer();
            $http.get('/match/vote')
                .then(function (jsonData) {
                    deferred.resolve(jsonData.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        getMatchList: function () {
            var self = this;
            var deferred = $q.defer();
            $http.get('/match/list')
                .then(function (matchData) {
                    for( var i = 0; i < matchData.data.length; i++ ) {
                        matchData.data[i].startDate = self.dateStringToDate(
                          matchData.data[i].startDate
                        );
                    }
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
        },
        deleteMatch: function(matchID) {
            var deferred = $q.defer();
            $http.delete('/match/'+matchID)
                .then(function(deleteResponse){
                    deferred.resolve(deleteResponse.data);
                }, function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        },
        dateStringToDate: function(dateString){
            return new Date(
                new RegExp('(.{4}\-.{2}\-.{2})').exec(dateString)[1]
            );
        },
        sendVote: function(matches){
            var deferred = $q.defer();
            $http.post('/match/vote', matches)
                .then(function(voteResponse){
                    deferred.resolve(voteResponse.data);
                }, function(err){
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    };
}]);