<?php

function indexAction($smarty){
    
    $smarty->assign('pageTitle', 'Register'); 
    
    loadTemplate($smarty, 'register');
}

