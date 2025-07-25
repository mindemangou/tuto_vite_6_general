<?php 
header("Access-Control-Allow-Origin: http://localhost:5174");
header('Content-Type:application/json');
sleep(10);
echo json_encode(['salut'=>'okok']);
?>