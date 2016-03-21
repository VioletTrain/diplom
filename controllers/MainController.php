<?php

function indexAction($smarty){
    
    $smarty->assign('pageTitle', 'Main'); 
    
    loadTemplate($smarty, 'main');
}

