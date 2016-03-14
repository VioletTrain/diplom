window.onload=function(){
	
	//ON_SCROLL ANIMATIONS
	window.onscroll = function(){
		var scroll = pageYOffset;
		
		//name appearence
		if(scroll>=100){
			document.querySelector(".name").style.color="black";
		}
		if(scroll<100){
			document.querySelector(".name").style.color="white";
		}
		
		//shadow appearence
		if(scroll>=15){
			document.querySelector(".menu").style.boxShadow="0 0 5px lightgray";
		}
		if(scroll<15){
			document.querySelector(".menu").style.boxShadow="0 0 0px lightgray";
		}
	}
	
	//BTN ANIMATION	
	
	//menu buttons
	document.querySelector(".log_btn_menu").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".log_btn_menu").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	document.querySelector(".reg_btn_menu").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".reg_btn_menu").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	//login form buttons
	document.querySelector(".log_btn").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".log_btn").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	document.querySelector(".log_cancel_btn").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".log_cancel_btn").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	//register form buttons
	document.querySelector(".reg_btn").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".reg_btn").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	document.querySelector(".reg_cancel_btn").onmouseover = function(){
		this.style.boxShadow = "0 0 5px lightgray";
	}
	document.querySelector(".reg_cancel_btn").onmouseout = function(){
		this.style.boxShadow = "0 0 0px lightgray";
	}
	
	
	//FORM APPEARENCE\HIDE
	
	//login form
	document.querySelector(".log_btn_menu").onclick = function(){
		document.querySelector(".log_form").style.top="150px";
		document.querySelector(".reg_form").style.top="-500px";
		
	}
	
	document.querySelector(".log_cancel_btn").onclick = function(){
		document.querySelector(".log_form").style.top="-500px";
		
	}
	
	//register form
	document.querySelector(".reg_btn_menu").onclick = function(){
		document.querySelector(".reg_form").style.top="150px";
		document.querySelector(".log_form").style.top="-500px";
		
	}
        
	document.querySelector(".reg_cancel_btn").onclick = function(){
		document.querySelector(".reg_form").style.top="-500px";
		
	}
	
	
	console.log("script_loaded");
}