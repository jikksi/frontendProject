function fetch_username(){
    fetch('http://3.20.144.95/API/users.php?userId='+window.localStorage.getItem('id')+'&action=get_username')
    .then(response => {
        if (!response.ok) {
            response.json().then(json =>{
                console.log(json)
            })
            return;
        }
        response.json().then(json => {
            document.getElementById('username-lbl').innerHTML = json.username
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}




function fetch_order_history(){
    fetch('http://3.20.144.95/API/users.php?userId='+window.localStorage.getItem('id')+'&action=get_history')
    .then(response => {
        if (!response.ok) {
            response.json().then(json =>{
                console.log(json)
            })
            return;
        }
        response.json().then(json => {
            draw_table(json.data)
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function draw_table(data){
    console.log(data)
    let table = document.getElementById('order-table');
    console.log(data.length)
    for(let i= 0; i < data.length;i++){
        let elem = data[i];
        let item = elem.item
        let date = elem.date
        console.log(date)
        console.log(item)
        let tr = document.createElement('tr')
        let title = document.createElement('td')
        title.innerHTML = item.Title
        let price = document.createElement('td')
        price.innerHTML = item.Price + '$'
        let dat = document.createElement('td')
        dat.innerHTML = date

        tr.appendChild(title)
        tr.appendChild(price)
        tr.appendChild(dat)

        table.appendChild(tr)
    }
}

function change_password($current,$new){
    const data = { 
        action: "change_password",
        current: $current ,
        new : $new,
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
            let sucss  = document.getElementById('suc-lbl')
            sucss.classList.remove('invisible')
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


document.getElementById('update-btn').addEventListener('click',function(){
    let passwordIn = document.getElementById('password-input');
    let repPassword = document.getElementById('repeat-password-input')
    change_password(passwordIn.value,repPassword.value)
})

function displayError(message){
    let error  = document.getElementById('error-lbl')
    error.innerHTML = message
    error.classList.remove('invisible')
}


document.getElementById('password-input').addEventListener('input',function(){
    document.getElementById('error-lbl').classList.add('invisible')
    document.getElementById('suc-lbl').classList.add('invisible')
})


if(!isLogedIn()){
    window.location.href = 'best_sellers.html?page=1'
}

fetch_username();
fetch_order_history();