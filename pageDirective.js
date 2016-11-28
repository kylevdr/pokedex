angular.module('pokeApp').directive('pageDirective', function() {

    return {
        restrict: 'E',
        template: '<div class="center"><button ng-click="retreatPage()" style="margin-right: 5px">Previous</button><span style="color: white">Page {{page + 1}}</span><button ng-click="advancePage()" style="margin-left: 5px">Next</button></div>'
    };

});