window.onload=function(){
	
//scss vars
var dark_indigo =   "#303F9F";
var indigo = 	 	"#3F51B5";
var light_indigo =  "#C5CAE9";
var white =    	 	"#FFFFFF";
var orange =     	"#FF5722";
var dark =    		"#212121";
var gray =  		"#727272";
var light =     	"#B6B6B6";
	
//elements vars
var dbody = document.body;
var menu = document.querySelector(".menu");
var logo = document.querySelector(".logo");
var name = document.querySelector(".name");
var content = document.querySelector(".content");
var log_menu_btn = document.querySelector(".log_menu_btn");
var reg_menu_btn = document.querySelector(".reg_menu_btn");
var log_form = document.querySelector(".log_form");
var reg_form = document.querySelector(".reg_form");
var log_btn = document.querySelector(".log_btn");
var reg_btn = document.querySelector(".reg_btn");	
var log_cancel_btn =document.querySelector(".log_cancel_btn");
var reg_cancel_btn =document.querySelector(".reg_cancel_btn");
var back = document.querySelector(".back");
var alert = document.querySelector(".alert");
var icon1 = document.querySelector(".icon1");
var icon2 = document.querySelector(".icon2");
var icon3 = document.querySelector(".icon3");
var icon4 = document.querySelector(".icon4");
var icon5 = document.querySelector(".icon5");
var icon6 = document.querySelector(".icon6");
var icon7 = document.querySelector(".icon7");	
	
	//PAGE_LOAD APPEARENCE
	
	//menu
	setTimeout(function(){logo.style.opacity=1;},500);
	setTimeout(function(){log_menu_btn.style.opacity=1;},500);
	setTimeout(function(){reg_menu_btn.style.opacity=1;},500);
	
	//content
	setTimeout(function(){content.style.opacity=1;},500);
	
	//icons
	setTimeout(function(){icon1.style.opacity=1;},500);
	setTimeout(function(){icon2.style.opacity=1;},900);
	setTimeout(function(){icon3.style.opacity=1;},1300);
	setTimeout(function(){icon4.style.opacity=1;},1700);
	setTimeout(function(){icon5.style.opacity=1;},2100);
	setTimeout(function(){icon6.style.opacity=1;},2500);
	setTimeout(function(){icon7.style.opacity=1;},2900);
	
	//ON_SCROLL ANIMATIONS
	window.onscroll = function(){
		var scroll = pageYOffset;
		
		//name&shadow appearence
		if(scroll>=15){
			name.style.opacity="1";
			menu.style.boxShadow="0 0 10px lightgray";
		}
		if(scroll<15){
			name.style.opacity="0";
			menu.style.boxShadow="0 0 0px lightgray";
		}
		
	}
	
	//FORM APPEARENCE\HIDE
	
	//login form
	log_menu_btn.onclick = function(){
		log_form.style.top="150px";
		reg_form.style.top="-500px";
		
		back.style.opacity="1";
		back.style.zIndex="4";
	}
	
	log_cancel_btn.onclick = function(){
		log_form.style.top="-500px";
		
		back.style.opacity="0";	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	//register form
	reg_menu_btn.onclick = function(){
		reg_form.style.top="150px";
		log_form.style.top="-500px";
		
		back.style.opacity="1";
		back.style.zIndex="4";
		
	}
	
	reg_cancel_btn.onclick = function(){
		reg_form.style.top="-500px";
		
		back.style.opacity="0";	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	//back click
	back.onclick = function(){
		reg_form.style.top="-500px";
		log_form.style.top="-500px";
		
		back.style.opacity="0";	setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
	}
	
	//ALERTS
	
	//alert
	ShowAlert = function(){
		alert.style.bottom="0";	setTimeout('document.querySelector(".alert").style.bottom="-80px"', 2000);
	}
	
	//SUCCESS LOGIN
	LoginSuccess = function(){
		dbody.style.opacity=0;
	}
	
	console.log("script_loaded");
}
