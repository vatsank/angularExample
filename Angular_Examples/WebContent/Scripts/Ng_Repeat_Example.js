/**
 * 
 */

var items=[
           {"itemNumber":101,"itemName":'Choclate Cake',"price":450},
           {"itemNumber":102,"itemName":'Black Currant',"price":250},
           {"itemNumber":103,"itemName":'Ice Cream Cake',"price":350}
          ];

function itemsController($scope){
	
	$scope.viewModel=items;
	$scope.itemSelected=[];
	$scope.show=true;
	$scope.hide=true;
	$scope.add=function(item){
		
		$scope.itemSelected.push(item);
		
	};
	$scope.more=function(){
		
		$scope.hide=false;
		$scope.show=false;
	};
	
    $scope.less=function(){
		
		$scope.hide=true;
		$scope.show=true;
	};
};

var app=angular.module("RepeatExample",[]);

app.controller("DisplayItemsController",itemsController);
