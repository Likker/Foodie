var app = angular.module('foodieApp', ['ui.router']);

app.controller('MainCtrl', [
'$scope', 'restaurants',
function($scope, restaurants){

  $scope.restaurants = restaurants.restaurants; 
 
  $scope.addRestaurant = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.restaurants.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
    $scope.link = '';
  };
  
  $scope.incrementUpvotes = function(restaurant) {
    restaurant.upvotes += 1;
  };
  }]
);

app.factory('restaurants', [function(){
  var o = {
    restaurants: [
      {title: 'Pizzeria di mama', upvotes: 5, comments: []},
      {title: 'Jiaozi Land', upvotes: 2, comments: []},
      {title: 'Choucroute Party', upvotes: 15, comments: []},
      {title: 'Burger Queen', upvotes: 9, comments: []},
      {title: 'McDanold', upvotes: 4, comments: []}
    ]
  };
  return o;
}]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('restaurants', {
  url: '/restaurants/{id}',
  templateUrl: '/restaurants.html',
  controller: 'RestaurantsCtrl'
    });
    
  $urlRouterProvider.otherwise('home');
}]);

app.controller('RestaurantsCtrl', [
'$scope',
'$stateParams',
'restaurants',
function($scope, $stateParams, restaurants){
  
  
  $scope.restaurant = restaurants.restaurants[$stateParams.id];
  
  $scope.addComment = function(){
    
    if($scope.body === '') { return; }
    $scope.restaurant.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
    });
    $scope.body = '';
  };
  
    $scope.incrementUpvotes = function(restaurant) {
    restaurant.upvotes += 1;
  };
}]);
