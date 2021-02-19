
function openTab(event, Tabname ) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("Tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Tabname).style.display = "block";
    event.currentTarget.className += " active";
}
function shoppingcart(){
    alert("Din produkt har lagts till i din varukorg")
}

let totalPrice = document.getElementById("Price").innerHTML;
let exPrice = totalPrice * 0.75;
document.getElementById("ex-tax-price").textContent += exPrice;