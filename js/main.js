let isLogedIn = function(){
    return false;
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

document.getElementById('filter-exclusive').addEventListener('click',function(){
    
    selectExclusiveItems()
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("filter", "exclusive");
    searchParams.set("page",1)
    window.location.search = searchParams.toString();

})


document.getElementById('filter-all-item').addEventListener('click',function(){
    selectAllFilter()
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("filter", "all");
    searchParams.set("page",1)
    window.location.search = searchParams.toString();
})

document.getElementById('sort-select').addEventListener('change',function(){
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("sort", this.value);
    window.location.search = searchParams.toString();
})

function checkQueryParameters(){
    var urlParams = new URLSearchParams(window.location.search);
    var keys = urlParams.keys();
    for(key of keys){
        if(key == 'filter' && urlParams.get(key) == "exclusive"){
            selectExclusiveItems()
        }
        if(key === 'sort'){
            console.log('here')
            setSortValue(urlParams.get(key))
        }
    }
}

function setSortValue(value){
    document.getElementById('sort-select').value = value;  
}

function selectExclusiveItems(){
    let all_item = document.getElementById('filter-all-item')
    let exclusive = document.getElementById('filter-exclusive')
    all_item.classList.remove("filter-by-item-selected");
    exclusive.classList.add("filter-by-item-selected");
}

function selectAllFilter(){
    let all_item = document.getElementById('filter-all-item')
    let exclusive = document.getElementById('filter-exclusive')
    exclusive.classList.remove("filter-by-item-selected");
    all_item.classList.add("filter-by-item-selected");
}



checkQueryParameters()


let user_btn = document.getElementById('my-profile');
user_btn.onmouseover = ()=>show_Info_bar();
user_btn.onmouseout = ()=>hide_info_bar();


