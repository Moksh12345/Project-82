var mouseEvent = "empty";
var lastPositionX, lastPositionY;
color = "black";
widthLine = 1;
radius = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthLine = document.getElementById("width_of_line").value;
    radius = document.getElementById("Radius_Circle").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_poition_mouse_x = e.clientX - canvas.offsetLeft;
    current_poition_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("current position of x and y are-");
        console.log("x=" + current_poition_mouse_x);
        console.log("y=" + current_poition_mouse_y);
        console.log("last position of x and y coordinate=");
        console.log("x=" + lastPositionX);
        console.log("y=" + lastPositionY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc(current_poition_mouse_x, current_poition_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastPositionX = current_poition_mouse_x;
    lastPositionY = current_poition_mouse_y;
}

function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}