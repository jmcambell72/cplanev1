
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'home.html',
    controller  : 'HomeController'
 })

  .when('/blog', {
    templateUrl : 'blog.html',
    // controller  : 'BlogController' 
  })

  .when('/data', {
    templateUrl : 'data.html',
    controller : 'DataCtrl'
  })

  .when('/about', {
    templateUrl : 'about.html',
    // controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});


app.controller('DataCtrl', function($scope, $http) {
    $http.get("data.php").then(function (response) {
    $scope.myData = response.data.records;
  });
});

app.controller('HomeController', function($scope, $http) {
    
    $http.get("sysmessage.php").then(function (response) {
    $scope.mySys = response.data.records;
  });
    $http.get("snowtickets.php").then(function (response) {
    $scope.mySnow = response.data.records;
  });

});

app.controller('AboutController', function($scope, $http) {
  
  $scope.console.log("About Controller");
  $http.get("controller.host.com").then(function (response) {
  
  


// app.controller('BlogController', function($scope) {
  // $scope.message = 'Hello from BlogController';
// });

// app.controller('AboutController', function($scope) {
//  $scope.message = 'Hello from AboutController';
// });

