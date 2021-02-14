function draw_pagination(){
    console.log(data.max_page)
    var urlParams = new URLSearchParams(window.location.search);
    let max_page = data.max_page
    let curr_page = parseInt(urlParams.get('page'))
    let menu = document.getElementById('pagination-menu')
    if(max_page  <= 5){
        for(let i = 1 ; i <= max_page ; i++){
            let menu_item = createPaginationItem(i==curr_page,i) 
            menu.appendChild(menu_item)
        }
    }else{
        if(curr_page <= 2){
            for(let i = 1 ; i <= 5 ; i++){
                let menu_item = createPaginationItem(i==curr_page,i)
                menu.appendChild(menu_item)
            }
        }else if(curr_page > max_page - 2){
           for(let i = max_page - 4 ; i <=max_page ; i++){
                let menu_item = createPaginationItem(i==curr_page,i)
                menu.appendChild(menu_item)
           }
        }else{
            for(let i = curr_page-2 ; i <= curr_page + 2 ; i++){
                let menu_item = createPaginationItem(i==curr_page,i)
                menu.appendChild(menu_item)
            }
        }
    }
}

function createPaginationItem(isCurrent,i){
    var queryParams = new URLSearchParams(window.location.search);
    queryParams.set("page", i);
    var newRelativePathQuery = window.location.pathname + '?' + queryParams.toString();
    let menu_item = document.createElement('a')
    if(isCurrent){
        menu_item.id = "selected-pagination-menu-item"
    }
    menu_item.href = newRelativePathQuery
    menu_item.innerHTML = '' + i
    menu_item.className = "pagination-menu-item" 
    return menu_item
}