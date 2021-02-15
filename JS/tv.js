

function displayInformation() {
     let display = document.getElementById("tecnical-information");
     if (display.style.display ==='block'){
          display.style.display = 'none';

     }else{
          display.style.display ='block';
     }

}

    function calcExPrice() {
        let totalprice = document.getElementsByTagName("span");
        let exPrice = totalprice * 0.75;
        document.getElementById(ex - tax - price).innerHTML = exPrice;
        console.log(totalprice);


    }