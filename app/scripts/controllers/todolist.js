'use strict';

/**
 * @ngdoc function
 * @name floggitDigitalWhiteboardApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the floggitDigitalWhiteboardApp
 */
angular.module('floggitDigitalWhiteboardApp')
  .controller('TodoCtrl', function ($scope, localStorageService, $interval, $http) {

    $scope.showtextarea = true;

    $scope.colors = [
      {name:'Red', shade:'Dark'},
      {name:'Blue', shade:'Dark'},
      {name:'Yellow', shade:'Light'},
      {name:'Pink', shade:'Light'},
      {name:'Purple', shade:'Light'}
    ];
  


    var todosInStore = localStorageService.get('todos');

  	$scope.todos = todosInStore && todosInStore.split('\n') || [];

  	$scope.$watch('todos', function () {
    	localStorageService.add('todos', $scope.todos.join('\n'));
  	}, true);

      $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };
      $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
      };

      $scope.add = function (todoText, myColor, textfiled) {
        var item = {
          name: todoText,
          color: myColor,
          textarea: textfiled

        };
        $http.post('http://localhost:14782/leomar/', item)
          .success(function () {
            $scope.getAll();
          });
      };

      $scope.delete = function (id) {
        $http.delete('http://localhost:14782/leomar/' + id)
          .success(function () {
            $scope.getAll();
          });

      };

      $scope.getAll = function () {
        $http.get('http://localhost:14782/leomar/')
          .success(function (response) {
            $scope.names = response;
          });
      };

      $scope.put = function (id, todoText, myColor,textfiled) {
        var item = {
          name: todoText,
          color: myColor,
          textarea: textfiled
        };
        $http.put('http://localhost:14782/leomar/' + id, item)
          .success(function () {
            $scope.getAll();
          });

      };

     // $interval($scope.getAll, 20000);
      $scope.getAll();

    });

