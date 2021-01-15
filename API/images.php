<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
header("Access-Control-Allow-Headers:  Content-Type,authorization");
header('Content-Type: application/json');

$data = [
    [
        "ID" => 1,
        "Type" => 'The Print',
        "Title" => "Trumpet, 1984",
        "Artist" =>"Jean-Michel Basquiat",
        "Price" => 18,
        "Size" => "12 x 12",
        "img" => "http://localhost:80/images/1.jpg"
    ],
    [
        "ID" => 2,
        "Type" => 'The Print',
        "Title" => "The Starry Night, June 1889",
        "Artist" =>"Vincent van Gogh",
        "Price" => 22,
        "Size" => "16 x 16",
        "img" => "http://localhost:80/images/2.jpg"
    ],
    [
        "ID" => 3,
        "Type" => 'The Print',
        "Title" => "April in Paris",
        "Artist" =>"Brent Heighton",
        "Price" => 15,
        "Size" => "16 x 12",
        "img" => "http://localhost:80/images/3.jpg"
    ],
    [
        "ID" => 4,
        "Type" => 'The Print',
        "Title" => "The Great Wave off Kanagawa",
        "Artist" =>"Katsushika Hokusai",
        "Price" => 15,
        "Size" => "18 x 12",
        "img" => "http://localhost:80/images/4.jpg"
    ],
    [
        "ID" => 5,
        "Type" => 'The Print',
        "Title" => "Untitled, 1981",
        "Artist" =>"Jean-Michel Basquiat",
        "Price" => 18,
        "Size" => "12 x 12",
        "img" => "http://localhost:80/images/5.jpg"
    ],
    [
        "ID" => 6,
        "Type" => 'The Print',
        "Title" => "Chicken for Dinner",
        "Artist" =>" Lucia Heffernan",
        "Price" => 30,
        "Size" => "18 x 24",
        "img" => "http://localhost:80/images/6.jpg"
    ],
    [
        "ID" => 7,
        "Type" => 'The Print',
        "Title" => "Pop Shop (DJ)",
        "Artist" =>"Keith Haring",
        "Price" => 15,
        "Size" => "16 x 12",
        "img" => "http://localhost:80/images/7.jpg"
    ],
    [
        "ID" => 8,
        "Type" => 'The Print',
        "Title" => "Upward",
        "Artist" =>"Jazzberry Blue",
        "Price" => 15,
        "Size" => "12 x 12",
        "img" => "http://localhost:80/images/8.jpg"
    ],
    [
        "ID" => 9,
        "Type" => 'The Print',
        "Title" => "End Of Winter",
        "Artist" =>"Leonid Afremov",
        "Price" => 15,
        "Size" => "16 x 16",
        "img" => "http://localhost:80/images/9.jpg"
    ],
    [
        "ID" => 10,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Duckling Swimming on Water Surface, UK",
        "Artist" =>"Jane Burton",
        "Price" => 18,
        "Size" => "16 x 16",
        "img" => "http://localhost:80/images/10.jpg"
    ],
    [
        "ID" => 11,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Blue Lagoon",
        "Artist" =>"Ursula Abresch",
        "Price" => 42,
        "Size" => "12 x 9",
        "img" => "http://localhost:80/images/11.jpg"
    ],
    [
        "ID" => 12,
        "Type" => 'PHOTO',
        "Title" => "Chimpanzee and a Woman Sunbathing",
        "Artist" =>"Unknown",
        "Price" => 23,
        "Size" => "9 x 12",
        "img" => "http://localhost:80/images/12.jpg"
    ],
    [
        "ID" => 13,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Another Look at Paris",
        "Artist" =>"Philippe Hugonnard",
        "Price" => 24,
        "Size" => "18 x 12",
        "img" => "http://localhost:80/images/13.jpg"
    ],
    [
        "ID" => 14,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Kootenay Fall 3",
        "Artist" =>"Ursula Abresch",
        "Price" => 67,
        "Size" => "8 x 12",
        "img" => "http://localhost:80/images/14.jpg"
    ],
    [
        "ID" => 15,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Dirty Habit",
        "Artist" =>"Unknown",
        "Price" => 60,
        "Size" => "40 x 30",
        "img" => "http://localhost:80/images/15.jpg"
    ],
    [
        "ID" => 16,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Highland Cattle",
        "Artist" =>"Mark Gemmell",
        "Price" => 35,
        "Size" => "30 x 30",
        "img" => "http://localhost:80/images/16.jpg"
    ],
    [
        "ID" => 17,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Curiosity",
        "Artist" =>"Jon Bertelli",
        "Price" => 25,
        "Size" => "18 x 20",
        "img" => "http://localhost:80/images/17.jpg"
    ],
    [
        "ID" => 18,
        "Type" => 'ART PRINT',
        "Title" => "Kootenay Fall 3",
        "Artist" =>"Ursula Abresch",
        "Price" => 18,
        "Size" => "18 x 18",
        "img" => "http://localhost:80/images/18.jpg"
    ],
    [
        "ID" => 19,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Two White Calla Lilies",
        "Artist" =>"Winfred Evers",
        "Price" => 15,
        "Size" => "12 x 12",
        "img" => "http://localhost:80/images/19.jpg"
    ],
    [
        "ID" => 20,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "California Poppies Along the Pacific Coast",
        "Artist" =>"Jaynes Gallery",
        "Price" => 15,
        "Size" => "48 x 20",
        "img" => "http://localhost:80/images/20.jpg"
    ],

    [
        "ID" => 21,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Eartha Kitt - 1959",
        "Artist" =>"Isaac Sutton",
        "Price" => 15,
        "Size" => "20 x 30",
        "img" => "http://localhost:80/images/21.jpg"
    ],
    [
        "ID" => 22,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Close",
        "Artist" =>"Bjoern Alicke",
        "Price" => 12,
        "Size" => "48 x 36",
        "img" => "http://localhost:80/images/22.jpg"
    ],
    [
        "ID" => 23,
        "Type" => 'PHOTOGRAPHIC PRINT',
        "Title" => "Male White Lion with Blue Eyes",
        "Artist" =>"Karine Aigner",
        "Price" => 30,
        "Size" => "30 x 36",
        "img" => "http://localhost:80/images/23.jpg"
    ],
    [
        "ID" => 24,
        "Type" => 'PARMA CHAMPAGNE WIDE FRAME',
        "Title" => "Imagine the Universe",
        "Artist" =>"Ursula Abresch",
        "Price" => 424,
        "Size" => "54 x 36",
        "img" => "http://localhost:80/images/24.jpg"
    ],
    [
        "ID" => 25,
        "Type" => 'PARMA CHAMPAGNE WIDE FRAME',
        "Title" => "Maple on black",
        "Artist" =>" Philippe Sainte-Laudy",
        "Price" => 389,
        "Size" => "36 x 54",
        "img" => "http://localhost:80/images/25.jpg"
    ],
    [
        "ID" => 26,
        "Type" => 'PARMA BLACK WIDE FRAME',
        "Title" => "Fog, Big Sur, 1963",
        "Artist" =>" Brett Weston",
        "Price" => 400,
        "Size" => "36 x 54",
        "img" => "http://localhost:80/images/26.jpg"
    ],
    [
        "ID" => 27,
        "Type" => 'PARMA BLACK WIDE FRAME',
        "Title" => "Fog, Big Sur, 1963",
        "Artist" =>" Brett Weston",
        "Price" => 350,
        "Size" => "36 x 24",
        "img" => "http://localhost:80/images/27.jpg"
    ],
    [
        "ID" => 28,
        "Type" => 'PARMA CHAMPAGNE WIDE FRAME',
        "Title" => "Trinity Collection 21",
        "Artist" =>"Philippe Saint-Laudy",
        "Price" => 550,
        "Size" => "40 x 24",
        "img" => "http://localhost:80/images/28.jpg"
    ],
    [
        "ID" => 29,
        "Type" => 'PARMA CHAMPAGNE WIDE FRAME',
        "Title" => "Swan, Europe, 1971",
        "Artist" =>"Brett Weston",
        "Price" => 750,
        "Size" => "70 x 150",
        "img" => "http://localhost:80/images/29.jpg"
    ],
    [
        "ID" => 30,
        "Type" => 'PARMA CHAMPAGNE WIDE FRAME',
        "Title" => "Classic Nude, c.1970",
        "Artist" =>"Brett Weston",
        "Price" => 1050,
        "Size" => "70 x 150",
        "img" => "http://localhost:80/images/30.jpg"
    ],
];

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