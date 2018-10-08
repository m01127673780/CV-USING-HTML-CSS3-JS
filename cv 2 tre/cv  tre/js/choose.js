$(function (){
		'use strict';
	 

 
$(".c-paenl li").click(function(){
 var p =	$(this).data('role');
 console.log(p);
$(".content").contents ("#" + p ).fadeIn();

});
 	
 	});

