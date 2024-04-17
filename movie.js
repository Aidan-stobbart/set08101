const image1 = document.getElementById("image1-1");
const image2 = document.getElementById("image1-2");
const image3 = document.getElementById("image1-3");
const image4 = document.getElementById("image1-4");
const image5 = document.getElementById("image1-5");
const image6 = document.getElementById("image1-6");
const viewImage1 = true
let viewImage2 = false
let viewImage3 = false
let viewImage4 = false
let viewImage5 = false
let viewImage6 = false


//SHOW IMAGES WHEN CLICKED
function showImage1() {
    image1.style.display = "block"
    image2.style.display = "none"
    image3.style.display = "none"
    image4.style.display = "none"
    image5.style.display = "none"
    image6.style.display = "none"
}
function showImage2() {
    image1.style.display = "none"
    image2.style.display = "block"
    image3.style.display = "none"
    image4.style.display = "none"
    image5.style.display = "none"
    image6.style.display = "none"
    viewImage2 = true
}
function showImage3() {
    image1.style.display = "none"
    image2.style.display = "none"
    image3.style.display = "block"
    image4.style.display = "none"
    image5.style.display = "none"
    image6.style.display = "none"
    viewImage3 = true
}
function showImage4() {
    image1.style.display = "none"
    image2.style.display = "none"
    image3.style.display = "none"
    image4.style.display = "block"
    image5.style.display = "none"
    image6.style.display = "none"
    viewImage4 = true
}
function showImage5() {
    image1.style.display = "none"
    image2.style.display = "none"
    image3.style.display = "none"
    image4.style.display = "none"
    image5.style.display = "block"
    image6.style.display = "none"
    viewImage5 = true
}
function showImage6() {
    image1.style.display = "none"
    image2.style.display = "none"
    image3.style.display = "none"
    image4.style.display = "none"
    image5.style.display = "none"
    image6.style.display = "block"
    viewImage6 = true
}

//CALCULATE PLAYER SCORE
function calcPoints() {
    let points = 6;
    let input = document.getElementById("guess").value;
    if (viewImage2 === true) {
        points -= 1;
    }
    if (viewImage3 === true) {
        points -= 1;
    }
    if (viewImage4 === true) {
        points -= 1;
    }
    if (viewImage5 === true) {
        points -= 1;
    }
    if (viewImage6 === true) {
        points -= 1;
    }
    if (points == 1 && input != "saltburn") {
        points -= 1;
    }

    //DISPLAY POINTS
    document.getElementById("points").innerHTML = points;
}
