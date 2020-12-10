
window.addEventListener('DOMContentLoaded', (event) => onload());
var data;
function onload(){
    console.log('loaded')
    fetch_data()
}

function fetch_data(){
    var urlParams = new URLSearchParams(window.location.search);
    var keys = urlParams.keys();
    const target = new URL("http://localhost:80/photography.php");
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
            change_grid_style()
        }
    };
    xhttp.open("GET", target, true);
    xhttp.send();
}

function draw_items(){
    console.log(data)
    let grid = document.getElementById('grid');
    for ( i=0; i < data.length; i++) {
        draw_item(data[i])
    }
}

window.onresize = function(event) {
    change_grid_style();
};
