function phone() {
    alert("XXX-XXX-XXXX");
}
function email() {
    alert("KeyesTanner@icloud.com");
}
let display = () => {
    const ele = document.getElementsByClassName('pop-up-box');
    ele[0].style.display = 'block';
}
let close = () => {
    const ele = document.getElementsByClassName('pop-up-box');
    ele[0].style.display = 'none';
}

function changeImage() {
    var image = document.getElementById("profilepic");
    image.src = images[x];
    x++;

    if(x >= images.length) {
        x = 0;
    }

    setTimeout("changeImage()", 3000);
}

//Array for images
var images = [];
x = 0;
images[0] = "images/profilePicture.png";
images[1] = "images/profilePicture2.png";
images[2] = "images/profilePicture3.png";
setTimeout("changeImage()", 3000);