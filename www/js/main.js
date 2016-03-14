function getData(obj_form){
    var hData = {};
    $('input, textarea, select', obj_form).each(function(){
        if(this.name && this.name!=''){
            hData[this.name] = this.value;
            console.log('hData[' + this.value + '] = ' + hData[this.name]);
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
        url:"/user/register/",
        data: postData,
        dataType: 'json',
        success: function(data){ 
            
        if(data['success']){ 
                formHide(".reg_form");
                console.log(data['message']);
               
            } else {
                console.log(data['message']);
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
        url:"/user/authorise/",
        data: postData,
        dataType: 'json',
        success: function(data){ 
            
        if(data['success']){ 
                formHide(".log_form");
                console.log(data['message']);
               
            } else {
                console.log(data['message']);
            }
        }
    });
}