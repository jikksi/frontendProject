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