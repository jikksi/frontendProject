function fetch_username(){
    fetch('http://localhost:80/users.php?userId='+window.localStorage.getItem('id')+'&action=get_username')
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
    fetch('http://localhost:80/users.php?userId='+window.localStorage.getItem('id')+'&action=get_history')
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

fetch_username();
fetch_order_history();