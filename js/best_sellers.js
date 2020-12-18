
window.addEventListener('DOMContentLoaded', (event) => onload());
var data;
function onload(){
    fetch_data()

}

function fetch_data(){
    var urlParams = new URLSearchParams(window.location.search);
    var keys = urlParams.keys();
    const target = new URL("http://localhost:80/best_sellers.php");
    const params = new URLSearchParams();
    for(key of keys) { 
        params.set(key, urlParams.get(key));
    }
    target.search = params.toString();
    console.log(target);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            data = obj
            draw_items()
            change_grid_style()
        }
    };
    xhttp.open("GET", target, true);
    xhttp.send();
}

function draw_items(){
    console.log(data)
    let grid = document.getElementById('grid');
    for ( i=0; i < data.length; i++) {
        draw_item(data[i])
    }
}
/*
Example: 
        Artist: "Jean-Michel Basquiat"
        ID: 1
        Price: 18
        Size: "12 x 12"
        Title: "Trumpet, 1984"
        Type: "The Print"
        img: "http://localhost:80/images/1.jpg"

*/

/* 
<div class="grid-item">
    <div class="img-container">
        <a href="" class="img-link">
            <img src="http://localhost/images/1.jpg" alt="img" class="grid-item-img">
        </a>  
    </div>
    <a class="title-link" href="">Trumpet, 1984</a> 
    <label class="artist-label" >Jean-Michel Basquiat</label>
    <label class="type-label" >The Print</label>
    <label class="price-label" >Price: 15$</label>
</div> 
*/

function draw_item(data){
    let grid = document.getElementById('grid');

    let grid_item = document.createElement('div')
    grid_item.className = "grid-item"
    let img_container = document.createElement("div");
    img_container.className = "img-container"
    let img_link = document.createElement("a");
    img_link.className = "img-link"
    img_link.href = ""
    let img = document.createElement("img");
    img.className = "grid-item-img"
    img.src = data.img

    let title_link = document.createElement('a')
    title_link.className = "title-link"
    title_link.innerHTML = data.Title
    title_link.href = ""
    let artist_label = document.createElement('label')
    artist_label.className = "artist-label"
    artist_label.innerHTML = data.Artist
    let type_label = document.createElement('label')
    type_label.className = "type-label"
    type_label.innerHTML = data.Type
    let price_label = document.createElement('label')
    price_label.className = "price-label"
    price_label.innerHTML = data.Price

    img_link.appendChild(img)
    img_container.appendChild(img_link)
    grid_item.appendChild(img_container);
    grid_item.appendChild(title_link);
    grid_item.appendChild(artist_label);
    grid_item.appendChild(type_label);
    grid_item.appendChild(price_label);
    grid.appendChild(grid_item);

}

function change_grid_style(){
    let grid = document.getElementById('grid');
    var w = window.innerWidth;
    if(w < 450){
        grid.style.gridTemplateRows = 'repeat(' + data.length + ', 500px)';
    }else if(450 < w  && w < 650){
        grid.style.gridTemplateRows = 'repeat(' + (data.length / 2) + ', 350px)';
    }else if(650 < w && w < 950){
        grid.style.gridTemplateRows = 'repeat(' + Math.round(data.length / 3) + ', 400px)';
    }else{
        grid.style.gridTemplateRows = 'repeat(' + (data.length / 4) + ', 400px)';
    }
}
window.onresize = function(event) {
    change_grid_style();
};
