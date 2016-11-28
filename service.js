angular.module('pokeApp').service('pokeService', function($http) {

    var pokeUrl = 'http://pokeapi.co/api/v2/';
    
    this.getPokemon = function(page) {

        return $http({
        method: 'GET',
        url: pokeUrl + 'pokemon/?limit=20&offset=' + (page * 20)
        }).then(function(results) {
            return results.data.results;
        });

    };

    this.getMore = function(url) {
        return $http({
            method: 'GET',
            url: url
        }).then(function(results) {
            return results.data;
        });
    };
});