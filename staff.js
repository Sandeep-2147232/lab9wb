var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/mechanicdata', {
        templateUrl: 'mechanicdata.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = ' CHRIST, is a deemed to be university in Bangalore, Karnataka, India. Founded in 1969 as Christ College, the University Grants Commission of India conferred autonomy to Christ College in 2004';
});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://sandeep-2147232.github.io/json/staff.json')
        .success(function(response) {
            $scope.names = response.staff;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://sandeep-2147232.github.io/json/staff.json')
        .success(function(response) {
            $scope.names = response.staff;
            $scope.rowlimit = 6;
        });
});
