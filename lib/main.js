var canvas  = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

context.lineWidth = (radius*2);


var putPoint = function (a) {
    if (dragging) {
        context.lineTo(a.clientX, a.clientY);
        context.stroke();
        context.beginPath();
        context.arc(a.clientX, a.clientY, radius, 0, (Math.PI*2));
        context.fill();
        context.beginPath();
        context.moveTo(a.clientX, a.clientY) 
    }
};

var engage = function (a) {
    dragging = true;
    putPoint(a);
};

var disengage = function () {
    dragging = false;
    context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousedown', putPoint);
canvas.addEventListener('mouseup', disengage);