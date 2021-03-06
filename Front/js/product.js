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
    fetch('http://3.20.144.95/API/images.php?id='+id)
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

like_btn.addEventListener('mousedown',function(){
    console.log({
        imgId : id,
        userId : window.localStorage.getItem('id')
    })
    const data = { 
        action: "add_favorite",
        imgId : id,
        userId : window.localStorage.getItem('id')
    };

    fetch('http://3.20.144.95/API/users.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            response.json().then(json =>{
                displayError(json.message)
            })
            return;
        }
        response.json().then(json => {
            console.log(json)
            if(json.added){
                console.log('yes')
                like_btn.classList.add('selected');
            }else{
                console.log('no')
                like_btn.classList.remove('selected');
            }
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})

buy_btn.addEventListener('click',function(){
    const data = { 
        action: "add_history",
        imgId : id,
        userId : window.localStorage.getItem('id')
    };
    fetch('http://3.20.144.95/API/users.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            response.json().then(json =>{
                displayError(json.message)
            })
            return;
        }
        response.json().then(json => {
          document.getElementById('suc-lbl').classList.remove('invisible');
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})

function isFavorite(){
    console.log('isFavorite')
    fetch('http://3.20.144.95/API/users.php?imgId='+id+"&userId="+window.localStorage.getItem('id')+'&action=is_favorite')
    .then(response => {
        if (!response.ok) {
            response.json().then(json =>{
                console.log(json)
            })
            return;
        }
        response.json().then(json => {
            if(json.isFavorite){
                console.log('yes')
                like_btn.classList.add('selected');
            }
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

isFavorite();



