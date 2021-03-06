

function draw_item(data){
    let grid = document.getElementById('grid');
    let grid_item = document.createElement('div')
    grid_item.className = "grid-item"
    let img_container = document.createElement("div");
    img_container.className = "img-container"
    let img_link = document.createElement("a");
    img_link.className = "img-link"
    img_link.href = "product.html?id="+data.ID
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
    price_label.innerHTML = data.Price + '$'

    img_link.appendChild(img)
    img_container.appendChild(img_link)
    grid_item.appendChild(img_container);
    grid_item.appendChild(title_link);
    grid_item.appendChild(artist_label);
    grid_item.appendChild(type_label);
    grid_item.appendChild(price_label);
    grid.appendChild(grid_item);

}


function change_grid_style(data){
    let grid = document.getElementById('grid');
    var w = window.innerWidth;
    if(w < 450){
        grid.style.gridTemplateRows = 'repeat('+ data.length +',300px)';
    }else if(450 < w  && w < 650){
        grid.style.gridTemplateRows = 'repeat(' + (data.length / 2) + ', 350px)';
    }else if(650 < w && w < 950){
        grid.style.gridTemplateRows = 'repeat(' + Math.round(data.length / 3) + ', 400px)';
    }else{
        grid.style.gridTemplateRows = 'repeat(' + (data.length / 4) + ', 400px)';
    }
}