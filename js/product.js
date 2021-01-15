let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id')
if(id!=null){
    fetch_image(id)
}



function fetch_image(id){
    console.log(id)
    fetch('http://localhost:80/images.php?id='+id)
    .then(response => {
        if (!response.ok) {
            response.json().then(json =>{
                console.log(json)
            })
            return;
        }
        response.json().then(json => {
            draw(json.data)
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


// [
//     "ID" => 29,
//     "Type" => 'PARMA CHAMPAGNE WIDE FRAME',
//     "Title" => "Swan, Europe, 1971",
//     "Artist" =>"Brett Weston",
//     "Price" => 750,
//     "Size" => "70 x 150",
//     "img" => "http://localhost:80/images/29.jpg"
// ],

function draw(data){
    console.log(data)
    document.getElementById('product-img').src =data.img;
    document.getElementById('title-label').innerHTML = data.Title
    document.getElementById('artist-label').innerHTML = data.Artist
    document.getElementById('type-label').innerHTML = data.Type
}