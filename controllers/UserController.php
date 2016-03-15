<?php

include_once '../models/UsersModel.php';

/**
 * AJAX регистрация пользователя
 * Инициализация сессионной переменной ($_SESSION['user'])
 * 
 */

function registerAction(){
    $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
    $email = trim($email);
    $pwd1 = isset($_REQUEST['pwd1']) ? $_REQUEST['pwd1'] : null;
    $pwd1 = trim($pwd1);
    $pwd2 = isset($_REQUEST['pwd2']) ? $_REQUEST['pwd2'] : null;
    $pwd2 = trim($pwd2);
    $name = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
    $name = trim($email);
    
    $resData = null;
    $resData = checkRegisterParams($email, $pwd1, $pwd2);
    
    // если введены все данные, 
    // проверяется наличие введенного email в БД
    if(! $resData && checkUserEmail($email)){
        $resData['success'] = false;
        $resData['message'] = "User with email '{$email}' is already registered.";
    }
    if(! $resData){
        $pwdMD5 = md5($pwd1);
        
        $resData = registerNewUser($email, $pwdMD5, $name);
        if($resData['success']){
            $resData['message'] = 'Register successful';
        } else{
            $resData['success'] = false;
            $resData['message'] = 'Register error';
        }
    } 
    
    echo json_encode($resData);
}
/**
 * AJAX авторизация пользователя
 * 
 */
function authoriseAction(){
    $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
    $email = trim($email);
    $pwd1 = isset($_REQUEST['pwd1']) ? $_REQUEST['pwd1'] : null;
    $pwdMD5 = md5($pwd1);
    
    $resData = null;
    $resData = checkPwd($pwd1, $resData);
    $resData = checkEmail($email, $resData);
    if(! $resData){
        $resData = null;
        $resData = checkAuthoriseParams($email, $pwdMD5);
        if($resData){
            $resData['success'] = true;
            $resData['message'] = 'Success';
        } else{
            $resData['success'] = false;
            $resData['message'] = 'Authorisation failed';
        }
    }
    
    echo json_encode($resData);
}