var canvas  = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

// window.onresize = function () {
//     context.getImageData(0, 0, canvas.width, canvas.height);

//     canvas.width = window.innerWidth;
//     canvas.height= window.innerHeight;

//     context.putImageData(image, 0, 0);


// };

function clearCanvas(canvas) {
    canvas.width = canvas.width;
};


context.lineWidth = (radius*2);

var putPoint = function(a) {
    if (dragging) {
        context.lineTo(a.clientX, a.clientY);
        context.stroke();
        context.beginPath();
        context.arc(a.clientX, a.clientY, radius, 0, (Math.PI*2));
        context.fill();
        context.beginPath();
        context.moveTo(a.clientX, a.clientY);
    }
};

var engage = function (b) {
    dragging = true;
    putPoint(b);
};

var disengage = function () {
    dragging = false;
    context.beginPath();
};

canvas.addEventListener('mousedown', engage, false);
canvas.addEventListener('mousemove', putPoint, false);
canvas.addEventListener('mouseup', disengage, false);