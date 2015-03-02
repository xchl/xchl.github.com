var app = angular.module('myApp',[]);
app.run(function($rootScope) {
    $rootScope.name = "I'm x";
    console.log($rootScope);
});
app.controller('MyController', function($scope) {
    console.log($scope);
    $scope.person = {
        name: "小明"
    };
});