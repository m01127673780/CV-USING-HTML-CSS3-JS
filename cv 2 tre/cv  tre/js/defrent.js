$(function (){
		'use strict';
	
	
	
$(".c_panel li ").click(function(){

var p = $(this).data("ro");
$(".content").contents().filter('#' + p).fadeIn();
});	
	
	
 
$(".poup ").magnificPopup({
	type:'iframe' 
})

 
	
});