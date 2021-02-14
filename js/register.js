
let isLogedIn = function(){
    let id = window.localStorage.getItem('id')
    if(id == null){
        return false
    }
    return true;
}

window.addEventListener('DOMContentLoaded', function(){
    if(isLogedIn()){
        window.location.href = 'homepage.html';
    }
});




document.getElementById('username-input').addEventListener('input',function(){
    removeError();
})
document.getElementById('password-input').addEventListener('input',function(){
    removeError();
})
document.getElementById('register-btn').addEventListener('click',tryregister)

function tryregister(){
    let username = document.getElementById('username-input').value
    let password = document.getElementById('password-input').value
    
    const data = { 
        action: "register",
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
            register(json.id);
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

function register(data){
    console.log(data.id)
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