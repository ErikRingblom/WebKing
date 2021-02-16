let counter = 0;
let totalCounter = 0;
let clicked = false



$(document).ready(function(){
    let $sectionAricle = $(".article-votes-controls")
    $sectionAricle.hover(function(){

        if ($(window).width() > 935) {
           
            var html = '<div class="popup" style="position: absolute; left: 57%; background:#ccc; border-radius: 6px; padding: 3px;">' + "Med din hjälp kan vi se till att leverera relevanta artiklar." + '</div>';   
            $(html).insertBefore("section").hide().fadeIn(1000); 

         }
   
      }, function(){
    
        let container = $(".popup");         
          container.hide();
    
    }); 
  });

$(document).ready(function(){
    $(".button-yes").click(function(){
        counter++;
        if(!clicked){
            totalCounter++
        }
        
        displayCounter()
        $(this).attr("disabled", true)
        clicked = true

    });
  });

  $(document).ready(function(){
    $(".button-no").click(function(){
        counter--;
        if(counter < 0){
            counter = 0;
        }
        if(!clicked){
            totalCounter++
        }

        displayCounter()
        $(this).attr("disabled", true)
        clicked = true
    });
  });

  function displayCounter() {
    document.getElementById("voteCounter").innerHTML = counter + " av " + totalCounter + " tyckte detta var till hjälp";

} 