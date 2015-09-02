/**
 * 
 */
function itemsController($scope){
		
	$scope.show=true;
	$scope.hide=true;
	$scope.more=function(){
		
		$scope.hide=false;
		$scope.show=false;
	};
   $scope.less=function(){
		
		$scope.hide=true;
		$scope.show=true;
	};
};

var app =angular.module("show",[]);

app.controller("itemsController",itemsController);


