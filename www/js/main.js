window.onload=function(){
	
//VARIABLES
	
//scss vars
var color = {
'dark_indigo':   "#303F9F",
'indigo': 	 	"#3F51B5",
'light_indigo':  "#C5CAE9",
'white':    	 "#FFFFFF",
'orange':     	"#FF5722",
'dark':    		"#212121",
'gray':  		"#727272",
'light':     	"#B6B6B6"
}
	
//elements vars
var elems = {
'dbody': document.body,
'menu': document.querySelector(".menu"),
'logo': document.querySelector(".logo"),
'name': document.querySelector(".name"),
'content': document.querySelector(".content"),
'content2': document.querySelector(".content2"),
'log_menu_btn': document.querySelector(".log_menu_btn"),
'reg_menu_btn': document.querySelector(".reg_menu_btn"),
'log_form': document.querySelector(".log_form"),
'reg_form': document.querySelector(".reg_form"),
'log_btn': document.querySelector(".log_btn"),
'reg_btn': document.querySelector(".reg_btn"),
'log_cancel_btn': document.querySelector(".log_cancel_btn"),
'reg_cancel_btn': document.querySelector(".reg_cancel_btn"),
'show_pass_btn': document.querySelector(".show_pass_btn"),
'log_pass': document.querySelector(".log_pass"),
'back': document.querySelector(".back"),
'alert': document.querySelector(".alert"),
'icons': document.querySelector(".icons"),
'icon1': document.querySelector(".icon1"),
'icon2': document.querySelector(".icon2"),
'icon3': document.querySelector(".icon3"),
'icon4': document.querySelector(".icon4"),
'icon5': document.querySelector(".icon5"),
'icon6': document.querySelector(".icon6"),
'icon7': document.querySelector(".icon7")
}
	
//FUNCTIONS
MenuAnim = function(){
	var scroll = pageYOffset;
	if(scroll>=15){
		elems.logo.style.opacity="1"
		elems.name.style.opacity="1";
		elems.menu.style.boxShadow="0 0 25px lightgray";
	}
	if(scroll<15){
		elems.logo.style.opacity="0"
		elems.name.style.opacity="0";
		elems.menu.style.boxShadow="0 0 0px lightgray";
	}
}

ShowRegForm = function(){
	elems.reg_form.style.top="150px";
	elems.log_form.style.top="-500px";
	elems.back.style.opacity="1";
	elems.back.style.zIndex="4";
}

ShowLogForm = function(){
	elems.log_form.style.top="150px";
	elems.reg_form.style.top="-500px";
	elems.back.style.opacity="1";
	elems.back.style.zIndex="4";
}

ShowAlert = function(message){
	elems.alert.innerHTML=message;
	elems.alert.style.bottom="0";
	setTimeout(function(){elems.alert.style.bottom="-100px";}, 2000);
}

LoginSuccess = function(){
	elems.dbody.style.opacity=0;
}

HideForm = function(){
	elems.reg_form.style.top="-500px";
	elems.log_form.style.top="-500px";
	elems.back.style.opacity="0";
	setTimeout(function(){elems.back.style.zIndex="-1";}, 800);
}
	
ShowPass = function(){
	elems.show_pass_btn.style.background=color.gray;
	elems.log_pass.setAttribute("type", "text");
}

HidePass = function(){
	elems.show_pass_btn.style.background=color.light;
	elems.log_pass.setAttribute("type", "password");
}


	//PAGE ACTIONS

	//menu&content appearence
	setTimeout(function(){elems.dbody.style.opacity=1;},500);
	
	//icons appearence
	setTimeout(function(){elems.icon1.style.opacity=1;},900);
	setTimeout(function(){elems.icon2.style.opacity=1;},1300);
	setTimeout(function(){elems.icon3.style.opacity=1;},1700);
	setTimeout(function(){elems.icon4.style.opacity=1;},2100);
	setTimeout(function(){elems.icon5.style.opacity=1;},2500);
	setTimeout(function(){elems.icon6.style.opacity=1;},2900);
	setTimeout(function(){elems.icon7.style.opacity=1;},3300);
	
	//menu animation
	window.onscroll = function(){MenuAnim();}
		
	//login form
	elems.log_menu_btn.onclick = function(){ShowLogForm();}
	elems.log_cancel_btn.onclick = function(){HideForm();}
	elems.show_pass_btn.onmousedown = function(){ShowPass();}
	elems.show_pass_btn.onmouseup = function(){HidePass();}
	elems.log_btn.onclick = function(){AuthoriseUser();}
	
	//register form
	elems.reg_menu_btn.onclick = function(){ShowRegForm();}
	elems.reg_cancel_btn.onclick = function(){HideForm();}
	elems.reg_btn.onclick = function(){RegisterNewUser();}
	
	//back click
	elems.back.onclick = function(){HideForm();}
	
	//	
	console.log("script_loaded");
}
