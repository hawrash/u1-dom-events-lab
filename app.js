/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = button.textContent;

    display.textContent += value;
    if (value === 'C') {
      display.textContent = '';
      return;
    }

    if (value === '=') {
        const expression = display.textContent;
        let result;
      if (expression.includes('+')) {
        const parts = expression.split('+');

        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
      result = num1 + num2;
    }
    else if (expression.includes('-')) {
        const parts = expression.split('-');
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
      result = num1 - num2;
    } else if (expression.includes('*')) {
        const parts = expression.split('*');
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
      result = num1 * num2;
    } else if (expression.includes('/')) {
        const parts = expression.split('/');
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
      result = num1 / num2;
    } else {
      result = 'Error';
    }
    display.textContent = result;
    }
    }  
)  
    });














/*-------------------------------- Functions --------------------------------*/