
window.addEventListener('DOMContentLoaded', (event) => onload());
var data;
function onload(){
    console.log('loaded')
    fetch_data()
}

function fetch_data(){
    var urlParams = new URLSearchParams(window.location.search);
    var keys = urlParams.keys();
    const target = new URL("http://3.20.144.95/API/photography.php");
    const params = new URLSearchParams();
    for(key of keys) { 
        params.set(key, urlParams.get(key));
    }
    target.search = params.toString();
    console.log(target);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            data = obj
            draw_items()
            change_grid_style(data.data)
        }
    };
    xhttp.open("GET", target, true);
    xhttp.send();
}

function draw_items(){
    let array = data.data
    console.log(array)
    let grid = document.getElementById('grid');
    for ( i=0; i < array.length; i++) {
        draw_item(array[i])
    }
    draw_pagination();
}
window.onresize = function(event) {
    change_grid_style(data);
};
