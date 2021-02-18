let contactDetails = document.getElementById("contactDetails");
let date = document.getElementById("date");
let time = document.getElementById("time");
let output = document.getElementById('messageOutput');
let product = document.getElementById("product");
let delivery = document.getElementById("delivery"); 
let service = document.getElementById("service");
let others = document.getElementById("others");
let emailIsSelected = false;

function alertFunction(){
    
    if(validateDate()){
        
        alert("Ditt supportärende är nu skickat!\nDu kommer inom kort få en bekräftelse via e-mail/sms.");
        window.location.replace("../HTML/contactConfirmation.html");
        return true;

    }else{
        
        alert("Var god kontrollera dina uppgifter.")
        return false;
    }
    
}

function showContactDetails(){
  
    contactDetails.style.display = "block";
    contactDetails.style.visibility = "visible";    
    date.required = "required";
    time.required = "required";

}

function hideContactDetails(){

    contactDetails.style.display = "none";
    contactDetails.style.visibility = "hidden";    
    date.required = "";
    time.required = "";
    emailIsSelected = true;
    
}

document.getElementById('options').addEventListener('change', function () {
    
    let value = this.value;
    hideSelectDivs();
    document.getElementById(value).style.display = "block";
    document.getElementById(value).style.visibility = "visible";

});

function hideSelectDivs(){
    
    product.style.display = "none";
    product.style.visibility = "hidden"; 
    delivery.style.display = "none";
    delivery.style.visibility = "hidden"; 
    service.style.display = "none";
    service.style.visibility = "hidden"; 
    others.style.display = "none";
    others.style.visibility = "hidden"; 

}

function validateDate(){
    if(!emailIsSelected){
        let value = document.getElementById("date").value;
        console.log(value);   
        if (!validateDateRange(value)) {
         notify('Datumet får inte vara tidigare än nästkommande dag eller senare än 30 dagar!');
            return false;
        } else {
            notify('Valid date');
            return true;
        }
    }else{
        return true;
    }
    
    
}

function notify(msg) {
   
    output.innerHTML = msg;
    output.style.display = "block";
    output.style.visibility = "visible";  
}

function validateDateRange(inputDate) {
    
    var now = new Date(),
    after30Days = new Date().setDate(now.getDate() + 30)
    date = new Date(inputDate);
    return date > now && date < after30Days;
}
