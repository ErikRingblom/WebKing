
var slideIndex = 1;
showPicture(slideIndex);

function newPicture(n) {
    showPicture(slideIndex += n);
}
function currentPicture(n) {
        showPicture(slideIndex = n);

}

function showPicture(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display="block"
}

