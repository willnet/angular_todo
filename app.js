angular.module('App', [])
.controller('MainController', ['$scope', function ($scope) {
  $scope.filter = {
    done: { done: true },      // 完了のみ
    remaining: { done: false } // 未了のみ
  };

  $scope.todos = [];
  $scope.newTitle = '';

  $scope.currentFilter = null;
  $scope.changeFilter = function (filter) {
    $scope.currentFilter = filter;
  };

  $scope.addTodo = function () {
    $scope.todos.push({
      title: $scope.newTitle,
      done: false
    });
    $scope.newTitle = '';
  };
}]);
