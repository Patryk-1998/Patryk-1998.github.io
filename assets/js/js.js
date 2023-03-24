//var randomNumber = Math.floor((Math.random() * 6) + 1);

function clickme() { 
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    
    document.getElementById("result").innerHTML = "your roll is" +"<br>"+  +  randomNumber;
    
    
    

    if (randomNumber == 1) {
   
     document.getElementById('dice').src = "assets/images/pic1.jpg"; 
     
    }

    else  if (randomNumber == 2) {
        document.getElementById('dice').src = "assets/images/pic2.jpg";   
    }


    else if (randomNumber == 3) {
        document.getElementById('dice').src = "assets/images/pic3.jpg";   
    }

    else if (randomNumber == 4) {
        document.getElementById('dice').src = "assets/images/pic4.jpg";   
    }

    else if (randomNumber == 5) {
        document.getElementById('dice').src = "assets/images/pic5.jpg";   
    }

    else if (randomNumber == 6) {
        document.getElementById('dice').src = "assets/images/pic6.jpg";   
    }
        }
            

    function noclick() {
    
    var messages = ["Go on roll it please", "roll again","don't roll"]; 
    
    
   var ranNum2 = Math.floor(Math.random() * messages.length);
   console.log(ranNum2);
   alert(messages[ranNum2]);
   }
    