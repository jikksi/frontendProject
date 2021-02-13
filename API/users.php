<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
header("Access-Control-Allow-Headers:  Content-Type,authorization");
header('Content-Type: application/json');


include('data.php');
if(file_exists('users_base.txt')){
    $users = unserialize(file_get_contents('users_base.txt'));
}else{
    $users = [];
}

if(file_exists('favorites.txt')){
    $favorites = unserialize(file_get_contents('favorites.txt'));
}else{
    $favorites = [];
}

if(file_exists('history.txt')){
    $order_history = unserialize(file_get_contents('history.txt'));
}else{
    $order_history = [];
}

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
            "id" => count($users)+1,
            "username" => $username,
            "password" => $password
        ]);
        file_put_contents('users_base.txt', serialize($users));
        respond([
            "id" =>count($users),
            "message" => "User registered Succesfully"
        ],200);
    }


    if($action == 'add_favorite'){
        $user_id = $obj->userId;
        $img_id = $obj->imgId;
        $added = true;
        if(array_key_exists($user_id,$favorites)){
            if(in_array($img_id,$favorites[$user_id])){
                $index = array_search($img_id,$favorites[$user_id]);
                unset($favorites[$user_id][$index]);
                $added = false;
            }else{
                array_push($favorites[$user_id],$img_id);
            }
        }else{
            $favorites[$user_id] = array($img_id);
        }
        file_put_contents('favorites.txt', serialize($favorites));
        respond([
            "favorites" =>$favorites[$user_id],
            "added" => $added,
            "message" => "Added Succesfully"
        ],200);
    }


    if($action == 'add_history'){
        $user_id = $obj->userId;
        $img_id = $obj->imgId;
        if(array_key_exists($user_id,$order_history)){
            array_push($order_history[$user_id],$img_id);
        }else{
            $order_history[$user_id] = array([$img_id,date("Y-m-d H:i:s")]);
        }
        file_put_contents('history.txt', serialize($order_history));
        respond([
            "history" =>$order_history[$user_id],
            "message" => "Added Succesfully"
        ],200);
    }
    
}

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $action = $_GET['action'];
    if($action == 'is_favorite'){
        $img_id = $_GET['imgId'];
        $user_id = $_GET['userId'];
        if(isFavorite($user_id,$img_id)){
            respond([
                "isFavorite" => true,
            ],200);
        }
        respond([
            "isFavorite" => false,
        ],200);
    }

    if($action == 'get_favorites'){
        $user_id = $_GET['userId'];
        respond([
            "data" =>get_favorite_images($favorites[$user_id])
        ],200);
    }



    if($action == 'get_username'){
        $user_id = $_GET['userId'];
        respond([
            'username' => get_user($user_id)
        ],200);
    }


    if($action == 'get_history'){
        $user_id = $_GET['userId'];
        $result = get_history($order_history[$user_id]);
        respond([
            "data" => $result
        ],200);
    }
}


function get_history($array){
    $result = [];
    foreach($array as $item){
        array_push($result,[
            "item" => get_image($item[0]),
            "date" => $item[1]
        ]);
    }
    return $result;
}
function get_user($id){
    global $users;
    foreach($users as $user){
        if($user['id']==$id){
            return $user['username'];
        }
    }
    return '';
}

function get_favorite_images($array){
    $result = [];
    foreach($array as $img_id){
        array_push($result,get_image($img_id));
    }
    return $result;
}

function get_image($id){
    global $data;
    foreach($data as $image){
        if($image['ID'] == $id){
            return $image;
        }
    }
}


function isFavorite($user_id , $img_id){
    global $favorites;
    if(array_key_exists($user_id,$favorites)){
        if(in_array($img_id,$favorites[$user_id])){
            return true;
        }
    }
    return false;
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