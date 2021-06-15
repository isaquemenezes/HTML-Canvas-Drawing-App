var x;
var y;

var setRadius = function (newradius) {
    if (newradius <minRad){
        newradius = minRad;
    } else {
        if (newradius >maxRad) {
            newradius = maxRad;
        }
    }
    radius = newradius;
    context.lineWidth = radius*2;

    radSpan.innerHTML = radius;
}

var minRad = 0.5,
    maxRad =100,
    defaultRad = 20,
    interval=5,
    radSpan = document.getElementById('radval');
    decRad = document.getElementById('decrad');
    incRad = document.getElementById('incrad');

decRad.addEventListener('click', function(){
    setRadius(radius-interval);
});
incRad.addEventListener('click', function(){
    setRadius(radius+interval);
}) ;


