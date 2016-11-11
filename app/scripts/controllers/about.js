'use strict';

/**
 * @ngdoc function
 * @name treeYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the treeYoApp
 */
angular.module('treeYoApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.remove = function (scope) {
        scope.remove();
    };

    $scope.toggle = function (scope) {
        scope.toggle();
    };

    $scope.check = function(scope) {
        console.log("scope");
        console.log(scope);
    };

    $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a);
    };

    $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            options : [{id: 1, text: 'guest', optChecked: false},
                       {id: 2, text: 'user' , optChecked: false},
                       {id: 3, text: 'customer', optChecked: false},
                       {id: 4, text: 'admin', optChecked: false}],
            nodes: []
        });
    };

    $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
    };

    $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
    };

    $scope.isEnable = function(data){
        return data ? 'enabled' : 'disabled';
    };

    $scope.dataBoolean = [{
        'id': 1,
        'title': 'node1',
        'options' : [{id: 1, text: 'guest', optChecked: false, available: false},
                     {id: 2, text: 'user' , optChecked: true, available: true},
                     {id: 3, text: 'customer', optChecked: false, available: true},
                     {id: 4, text: 'admin', optChecked: false, available: false}],
        'nodes': [
            {
                'id': 11,
                'title': 'node1.1',
                'options' : [{id: 1, text: 'guest', available: true},
                             {id: 2, text: 'user', available: true},
                             {id: 3, text: 'customer', available: true},
                             {id: 4, text: 'admin', available: false}] ,
                'nodes': [
                    {
                        'id': 111,
                        'title': 'node1.1.1',
                        'options' : [{id: 1, text: 'guest', available: false},
                                     {id: 2, text: 'user', available: false},
                                     {id: 3, text: 'customer', available: false},
                                     {id: 4, text: 'admin', available: false}],
                        'nodes': []
                    }
                ]
            }
        ]
    }];

    /*
    {
        'id': 2,
        'title': 'node2',
        'options' : [{id: 1, text: 'guest'},
                     {id: 2, text: 'user'},
                     {id: 3, text: 'customer'},
                     {id: 4, text: 'admin'}],
        'nodes': []
    }];

    $scope.dataNumber = [{
        'id': 1,
        'title': 'node1',
        'nodes': [
            {
                'id': 11,
                'title': 'node1.1',
                'nodes': [
                    {
                        'id': 111,
                        'title': 'node1.1.1',
                        'nodes': []
                    }
                ]
            }
        ]
    }, {
        'id': 2,
        'title': 'node2',
        'nodes': []
    }];
    */
});
