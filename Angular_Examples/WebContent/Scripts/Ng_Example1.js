/**
 * 
 */

var cake={
		
   title:'Birthday Cake',
   image:'images/Cake1.jpg',
   price:450.00
};

function myController($scope){
	
	$scope.product=cake;
}

 var app=angular.module("first",[]);
 
 app.controller("myFirstController",myController);