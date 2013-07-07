'use strict';

angular.module('todoApp')
  .factory('TodosSvc', function todos() {
    var TodosSvc = {
        todos: [],
        selected: null
    },
        counter = 1;

    TodosSvc.addTodo = function(data) {
        data.id = counter;
        counter += 1;

    	TodosSvc.todos.push(data);
    };

    TodosSvc.deleteTodo = function(index) {
        if (TodosSvc.selected !== null && TodosSvc.todos[TodosSvc.selected].id === TodosSvc.todos[index].id) {
            TodosSvc.selected = null;
        }

        TodosSvc.todos.splice(index, 1);
    };

    TodosSvc.selectTodo = function(id) {
        TodosSvc.selected = id;
    }

    return TodosSvc;
  });
