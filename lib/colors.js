var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var swatches = document.getElementsByClassName('swatch');
// var n=swatches.length;

for (var i=0,n=swatches.length; i<n; i++){
    swatches[i].addEventListener('click', setSwatch, false);
} 

// var n=colors.length;

for(var i=0,n=colors.length; i<n; i++){
    var swatch = document.createElement('div');

    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];

    swatch.addEventListener('click', setSwatch, false);
    document.getElementById('colors').appendChild(swatch);


}

function setColor(color) {
    context.fillStyle = color;
    context.strokeStyle = color;
    var active =document.getElementsByClassName('active')[0];

    if(active) {
        active.className = 'swatch';
    }
}

function setSwatch(e) {
    var swatch = e.target;
    
    setColor(swatch.style.backgroundColor);
    swatch.className = swatch.className +' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});