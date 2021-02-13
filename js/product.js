let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id')
let buy_btn = document.getElementById('buy-btn');
let like_btn = document.getElementById('heart-btn-products');
if(!isLogedIn()){
    buy_btn.classList.add('invisible')
    like_btn.classList.add('invisible')
}
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


function draw(data){
    console.log(data)
    document.getElementById('product-img').src =data.img;
    document.getElementById('title-label').innerHTML = data.Title
    document.getElementById('artist-label').innerHTML = "By "+data.Artist
    document.getElementById('type-label').innerHTML = data.Type
    document.getElementById('price-label').innerHTML = data.Price + '$'
}

like_btn.addEventListener('click',function(){
    console.log({
        imgId : id,
        userId : window.localStorage.getItem('id')
    })
})

buy_btn.addEventListener('click',function(){
    console.log('buy')
})