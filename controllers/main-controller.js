angular.module("testApp")
	.constant("testsDataUrl", "https://serge-ng-app.github.io/app-data/tests.json")
	.controller("mainCtrl", function ($scope, testsDataUrl, $http) {

	$scope.test = [] ;	
	$http({method: "get", url: testsDataUrl})
	.then(function (success) {
		$scope.test = success.data;		
	},
	function (error) {		
		$scope.data.error = error;
	});

	$scope.startTest = function (testName) {		
		switch(testName){
			case "Tests A" : $scope.showTest = "testA"; $scope.pageView = 'partials/testA_q1.html'
			break;
			case "Tests B" : $scope.showTest = "testB"; $scope.pageView = 'partials/testB_q1.html'
			break;
			case "Tests C" : $scope.showTest = "testC"; $scope.pageView = 'partials/testC_q1.html'
			break;
		} 
	};

	$scope.backToStart = function () {
		$scope.showTest = false;
	}  
		
	});//end controller