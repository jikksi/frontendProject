
let isLogedIn = function(){
    let id = window.localStorage.getItem('id')
    if(id == null){
        return false
    }
    return true;
}

window.addEventListener('DOMContentLoaded', function(){
    if(isLogedIn()){
        window.location.href = 'index.html';
    }
});




document.getElementById('username-input').addEventListener('input',function(){
    removeError();
})
document.getElementById('password-input').addEventListener('input',function(){
    removeError();
})
document.getElementById('login-btn').addEventListener('click',tryLogin)

function tryLogin(){
    let username = document.getElementById('username-input').value
    let password = document.getElementById('password-input').value
    
    const data = { 
        action: "login",
        username: username ,
        password : password
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
            login(json.id);
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}



function displayError(message){
    let error_label = document.getElementById('error-label')
    error_label.innerHTML = message
    error_label.classList.remove('invisible')
}
function removeError(){
    let error_label = document.getElementById('error-label')
    error_label.classList.add('invisible')
}


function login(id){
    window.localStorage.setItem('id',id)
    window.location.href = 'index.html';
}