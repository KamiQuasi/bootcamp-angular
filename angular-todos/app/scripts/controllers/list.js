'use strict';

angular.module('todoApp')
  .controller('ListCtrl', function ($scope, TodosSvc) {
  	$scope.newTodo = '';
    $scope.todos = TodosSvc.todos;
    
    $scope.addTodo = function() {
    	if ($scope.newTodo !== '') {
    		TodosSvc.addTodo({
    			title: $scope.newTodo,
    			completed: false
    		});

	    	$scope.newTodo = '';
    	}
    };

    $scope.deleteTodo = function($index) {
    	TodosSvc.deleteTodo($index);
    }

    $scope.selectTodo = function($index) {
    	TodosSvc.selectTodo($index);
    }
  });
