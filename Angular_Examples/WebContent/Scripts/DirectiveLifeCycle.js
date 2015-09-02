function messageController($scope){
	$scope.message="My First Custom Directive";
}
var app = angular.module("LifeCycle",[]);

app.controller("msgController",messageController);

app.directive('myLife',function(){
	
	  return{
		   compile:function(){
			  console.log("compile Called");
			  return {
				  pre:function(){
					  console.log("pre function Called");
				  },
				  post:function(){
					  console.log("post function called");
				  }
			  };
		  }
	  };
	
});

