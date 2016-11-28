angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

    $scope.page = 0;

    $scope.getPokemon = function() {
        pokeService.getPokemon($scope.page).then(function(results) {
            $scope.pokemon = results;
            console.dir($scope.pokemon);
        });
    };

    $scope.getPokemon();

    $scope.getMore = function(url) {
        pokeService.getMore(url).then(function(results) {
            $scope.pokeInfo = results;
            console.dir($scope.pokeInfo);
        });
    };

    $scope.advancePage = function() {
        $scope.page++;
        $scope.getPokemon();
    }

    $scope.retreatPage = function() {
        if ($scope.page > 0) {
            $scope.page--;
            $scope.getPokemon();
        }
    }

});