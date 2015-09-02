/**
 * 
 */
var app=angular.module("cd_ang_jq",[]);

app.directive('animateDirective',function(){
	return{
		
		restrict:'EA',
		link:function(scope,element,attrs){
			
			element.on('click',function(){ 
				// element.animate({ "width": "100px" }, 'slow');
				 element.attr('value','Submit');
			      	 	
			});
		}
	};
});

