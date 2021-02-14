let isLogedIn = function(){
    let id = window.localStorage.getItem('id')
    if(id == null){
        return false
    }
    return true;
}


let show_hide_nav_menu =function(){
    
    let logged_navbar_menu= document.getElementById('logged-nav-menu');
    let not_logged_navbar_menu = document.getElementById('not-logged-nav-menu');
    if(isLogedIn()){
        logged_navbar_menu.classList.remove('invisible')
        not_logged_navbar_menu.classList.add('invisible')
    }else{
        logged_navbar_menu.classList.add('invisible')
        not_logged_navbar_menu.classList.remove('invisible')
    }
}
show_hide_nav_menu();
 
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
    if(navbar.classList.contains('invisible')){
        navbar.classList.remove('invisible')
    }else{
        navbar.classList.add('invisible')
    }
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

window.addEventListener('resize',function(event) {
    let navbar = document.getElementById('nav-full')
    var w = window.innerWidth;
    if(w > 950 && !navbar.classList.contains('invisible')){
        navbar.classList.add('invisible')
    }
});
let lgbtn =  document.getElementById('logout-btn-nav')
if(lgbtn){
    lgbtn.addEventListener('click',function(){
        window.localStorage.removeItem('id')
        window.location.reload()
        this.preventDefault();
    })
}



