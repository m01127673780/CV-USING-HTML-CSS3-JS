$(function (){
		'use strict';
	
//============== start slider======================//
	
	    var winH=$(window).height(),
			uppeH=$('.upper-bar').innerHeight(), 
			navH=$('.navbar').innerHeight(); 
		
 		$('.slider').height(winH - (uppeH +navH));
		});
//============== End slider======================// 

//--------------start Active our fetured----------------------// 
$(".featured-work ul li").click (function (){
$(this).addClass('active').siblings().removeClass('active');

});
//--------------End Active our fetured----------------------// 

//--------------start active Chose-us----------------------// 
$('.aside-what-chase-us').click(function(){
$(this).addClass('active-aside-min')  ;
});
 
$('.aside-what-chase-us ').on("click",function (){

$(".aside-what-chase-us .icon-pulas ").toggleClass("fa-plus fa-minus");

});

 
        
 $(".aside-what-chase-us").click(function(){
 $(this).next() .slideToggle(100);
 $(".aside-what-ch-us-p").not($(this).next()) .slideUp(100); 
	
 });

 $(".aside-what-chase-us").click(function(){
 $(this) .css({
 marginBottom:"12px" 
 });
$('.aside-what-chase-us').not($('.aside-what-chase-us')).css({
marginBottom:"3px"
});
 
 //--------------End active Chose-us----------------------// 
$(".poup ").magnificPopup({
	type:'iframe' 
})

  });