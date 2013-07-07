'use strict';

angular.module('todoApp')
  .controller('DetailCtrl', function ($scope, TodosSvc) {
    $scope.TodosSvc = TodosSvc;
    $scope.$watch('TodosSvc.selected', function(selectedIndex) {
    	$scope.selected = TodosSvc.todos[selectedIndex];
    });
  });
