/**
 * 
 */

var app = angular.module("simpleDirective",[]);
   
       app.controller("greetController",function($scope){ 
    	   
    	   $scope.message='My Custom Directive';
       });
   
      app.directive('custName',function(){
    	  
    	     return{
    	    	 restrict :'E',
    	    	 replace:false,
    	    	 template :"<div><b>{{message}}<b></div>"
    	     };
    	  
      });
