canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas_width = "1000"; 
canvas_height = "600";

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed >= 65 && keyPressed <= 90 || keyPressed >= 97 && keyPressed <= 122)
    {
        alphabetKey();
    }
    if(keyPressed >= 48 && keyPressed <= 57)
    {
        numbersKey();
    }
    if(keyPressed >= 37 && keyPressed <= 40)
    {
        arrowKeys();
    }
    if(keyPressed == '17' || keyPressed == '18' || keyPressed == '27')
    {
        specialKey();
    }
}
function alphabetKey() {
    background_img = "Alphabet Keys.jpeg";
    document.getElementById("kkkk").innerHTML = "You pressed alphabet key ";
    console.log("Alphabet Key");
    add();
}
function numbersKey() {
    background_img = "Number Keys.jpeg";
    document.getElementById("kkkk").innerHTML = "You pressed number key ";
        console.log("Number Key");
    add();
}
function arrowKeys() {
    background_img = "Arrow key.jpeg";
    document.getElementById("kkkk").innerHTML = "You pressed arrow key ";
    console.log("Arrow Key");
    add();
}
function specialKey() {
    background_img = "Special Keys.jpeg";
    document.getElementById("kkkk").innerHTML = "You pressed special key ";
    console.log("Special Key");
    add();
}

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;
}   


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas_width, canvas_height);
}
