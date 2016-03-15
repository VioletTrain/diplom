function getData(obj_form){
    var hData = {};
    $('input, textarea, select', obj_form).each(function(){
        if(this.name && this.name!=''){
            hData[this.name] = this.value;
        }
    });
    return hData;
}

function formHide(form){
    document.querySelector(form).style.top="-500px";
}

// регистрация нового пользователя
function registerNewUser(){
    var postData = getData('.reg_form');
    
    $.ajax({
        type:'POST',
        async: true,
        url:"?controller=user&action=register",
        data: postData,
        dataType: 'json',
        success: function(data){ 
            
        if(data['success']){ 
                formHide(".reg_form");
                document.querySelector(".back").style.opacity="0"; setTimeout('document.querySelector(".back").style.zIndex="-1"', 800);
                console.log(data['message']);
               
            } else {
                console.log(data['message']);
                document.querySelector(".alert").innerHTML=data['message'];
                ShowAlert();
            }
        }
    });
}
//авторизация пользователя
function authoriseUser(){
    var postData = getData('.log_form');
    
    $.ajax({
        type:'POST',
        async: true,
        url:"?controller=user&action=authorise",
        data: postData,
        dataType: 'json',
        success: function(data){ 
            
        if(data['success']){ 
                formHide(".log_form");
                document.body.style.opacity=0;
                console.log(data['message']);
               
            } else {
                console.log(data['message']);
				document.querySelector(".alert").innerHTML=data['message'];
                ShowAlert();
            }
        }
    });
}