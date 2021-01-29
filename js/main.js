let isLogedIn = function(){
    let id = window.localStorage.getItem('id')
    if(id == null){
        return false
    }
    return true;
}

 
let show_Info_bar = function(){
    if(isLogedIn()){
        document.getElementById('info-bar-menu-logged').style.visibility = 'visible' 
    }else{
        document.getElementById('info-bar-menu-not-logged').style.visibility = 'visible'
    }
}

let hide_info_bar = function(){
    document.getElementById('info-bar-menu-not-logged').style.visibility = 'hidden'
    document.getElementById('info-bar-menu-logged').style.visibility = 'hidden'
}

let show_hide_navbar = function(){
    let navbar = document.getElementById('nav-full')
    console.log(navbar.style.visibility)
    // let pos , to , increment
    // if(navbar.style.visibility === 'hidden'){
    //     pos = -900;
    //     to = 0
    //     increment = 4
    //     navbar.style.visibility = 'visible'
    // }else{
    //     pos = 0;
    //     to = -900
    //     increment = -4
    //     navbar.style.visibility = 'hidden'
    // }
    // var id = setInterval(frame, 0);
    // function frame() {
    //     if (pos == to) {
    //         clearInterval(id);
    //     } else {
    //         pos+=increment; 
    //         navbar.style.left = pos + "px"; 
    //     }
    // }
}
document.getElementById('menu-btn').addEventListener('click',()=>show_hide_navbar())
document.getElementById('logout-btn').addEventListener('click',function(event){
    window.localStorage.removeItem('id')
    window.location.reload()
    event.preventDefault();
})

document.getElementById('heart-btn').addEventListener('click',function(){
    window.location.href="favourite.html"
})

let user_btn = document.getElementById('my-profile');
user_btn.onmouseover = ()=>show_Info_bar();
user_btn.onmouseout = ()=>hide_info_bar();


