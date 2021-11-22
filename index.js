let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
const buttonsAvailable = [1,'1','2','3','4','5','6','7','8','9','0','+','-','*','/','.','=','AC','Backspace'];

document.addEventListener('keydown', (e) => {
  console.log(typeof(e.key));
  switch(e.key){
    case 'Enter':
    case '=':
      try {
        display.innerText = Math.round(eval(display.innerText) * 100) / 100
      } catch(err) {
        display.innerText = 'Error';
      } 
      break;
    case 'Backspace':
      display.innerText = display.innerText.slice(0, -1);
      break;
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
      case '+': case '-': case '*': case '/':
      display.innerText += e.key;
  }
});  


function updateDisplay(){
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      switch(e.target.innerText){
        case 'AC':
          display.innerText = '';
          break;
        case '<-':
          display.innerText = display.innerText.slice(0, -1);
          break;
        case '=':
          try {
            display.innerText = Math.round(eval(display.innerText) * 100) / 100
          } catch(err) {
            display.innerText = 'Error';
          }
          break;
        default:
          display.innerText += e.target.innerText;
      }
  
    });
  })
}

function main() {
  updateDisplay();
} 

main();
