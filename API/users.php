<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
header("Access-Control-Allow-Headers:  Content-Type,authorization");
header('Content-Type: application/json');

$users = [
    [
        "id" => 1,
        "username" => "giorgi",
        "password" => "12345678"
    ]
];

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    die('OK');
} 

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json = file_get_contents('php://input'); 
    $obj = json_decode($json);
    global $users;

    $action = $obj->action;
    if($action == 'login'){
        $user = getUser($obj->username,$obj->password);
        if($user){
            respond([
                "id" => $user['id']
            ],200);
        }
        respond([
            "message" => "Incorrect Username or Password!"
        ],400);
    }

    if($action == 'register'){
        $username = $obj->username;
        $password = $obj->password;
        if(usernameExists($username)){
            respond([
                "message" => "Username already exists!"
            ],400);
        }
        array_push($users,[
            "id" => count($users),
            "username" => $username,
            "password" => $password
        ]);
        respond([
            "message" => "User registered Succesfully"
        ],200);
    }
    
}

function getUser($username,$password){
    global $users;
    foreach($users as $user){
        if($user['username']== $username && $user['password']==$password){
            return $user;
        }
    }
    return null;
}

function usernameExists($username)
{
    global $users;
    foreach($users as $user){
        if($user['username']== $username){
            return true;
        }
    }
    return false;
}

function respond($data = [], $code = 200)
{
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($data);
    die;
}


?>