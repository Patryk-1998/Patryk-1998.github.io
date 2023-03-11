let display = document.getElementById('display'); // this lets the js know about the display
let buttons = Array.from(document.getElementsByClassName('button')); // this lets the js know about the buttons

buttons.map( button => {
    button.addEventListener('click', (e) => { // this makes the following happenh on a button click
        switch(e.target.innerText){
            case 'C': // this is clears the display
                display.innerText = '';
                break;
            case '=': // this detemins what button causes the following to happen in this case =
                try{// this caculates whats in the display
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error" // this displays an error if there is one with the caculations
                }
                break;
            case '←': // this removes on digit or operand once used
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default: // this diplays the resuly
                display.innerText += e.target.innerText;
        } 
    });
}); 

const log = []
let log1 = log;

buttons.map( button => { // this makes the following happenh on a button click
  button.addEventListener('click', (e) => {
      switch(e.target.innerText)
      { case '=': // this detemins what button causes the following to happen in this case =
      log.push(eval(display.innerText)); // this logs the result into an array
      console.log(eval(display.innerText)) // this logs the result into the console
      document.getElementById('loga').innerHTML = log // this displays the array
      }
    }
  )
})