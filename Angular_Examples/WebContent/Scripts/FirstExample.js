/**
 * 
 */

22502250

function init(){

	ele = document.getElementsByTagName("h1")[0];
	ele.addEventListener('click',display);
}

function show(){
	
	alert("I am Called");

}

function display(){
	
	alert("Heading Clicked");
}


(function(){
	show();
	init();
})();