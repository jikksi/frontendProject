<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
header("Access-Control-Allow-Headers:  Content-Type,authorization");
header('Content-Type: application/json');

include('data.php');

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $data; 
    $id = $_GET['id'];
    $image = getImageByID($id,$data);

    if($image){
        respond([
            'message' => '',
            'data' => $image
        ],200);
    }
    respond([
        'Image Doesnt exists.',
        'data' => null,
    ],400);
}



function getImageByID($id,$images){
    foreach($images as $image){
        if($image['ID']==$id){
            return $image;
        }
    }
    return null;
}

function respond($data = [], $code = 200)
{
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($data);
    die;
}


?>