var redditApp = angular.module('redditApp', []);

redditApp.controller('bodyController', function($scope) {
	$scope.test = 24;
	$scope.names = ['Harry','Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];
})