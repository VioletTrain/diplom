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
    $pwd2 = isset($_REQUEST['pwd2']) ? $_REQUEST['pwd2'] : null;
    $name = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
    $name = trim($email);
    
    $resData = null;
    $resData = checkRegisterParams($email, $pwd1, $pwd2);
    
    // если введены все данные, 
    // проверяется наличие введенного email в БД
    if(! $resData && checkUserEmail($email)){
        $resData['success'] = false;
        $resData['message'] = "Пользователь с таким email('{$email}') уже зарегистрирован.";
    }
    if(! $resData){
        $pwdMD5 = md5($pwd1);
        
        $userData = registerNewUser($email, $pwdMD5, $name);
        if($userData['success']){
            $resData['message'] = 'Пользователь успешно зарегистрирован';
            $resData['success'] = true;
            
            $userData = $userData[0];
            $resData['userName'] = $userData['name'] ? $userData['name'] : $userData['email'];
            $resData['userEmail'] = $email;
            
            $_SESSION['user']  = $userData;
            $_SESSION['user']['displayName'] = $userData['name'] ? $userData['name'] : $userData['email'];
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
    $resData = checkAuthoriseParams($email, $pwdMD5);
    
    if($resData){
        $resData['success'] = true;
        $resData['message'] = 'Success';
    } else {
        $resData['success'] = false;
        $resData['message'] = 'Authorisation failed';
    }
    
    echo json_encode($resData);
}