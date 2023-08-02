document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
  
    let currentValue = "";

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
  
    function evaluateResult() {
      console.log('currentValue:', currentValue)
      const convertedValue = currentValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace('%', '*0.01')
        .replace('sin', 'Math.sin')
        .replace('cos', 'Math.cos')
        .replace('tan', 'Math.tan')
        .replace('ln', 'Math.log')
        .replace('log', 'Math.log10')
        .replace('√', 'Math.sqrt')
        .replace('Inv', '**-1')
        .replace('Exp', 'Math.exp')
        .replace('π', 'Math.PI')
        .replace('e', 'Math.E');
        
      console.log('convertedValue:', convertedValue)
      const result = eval(convertedValue);
      currentValue = result.toString();
      display.value = currentValue;
    }
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', function() {
        const value = button.innerText;

        try {
            if (value == "AC") {
                currentValue = "";
                display.value = currentValue;
            } 
            else if(value == "⌫") {
                currentValue = currentValue.slice(0,-1);
                display.value = currentValue;
            } 
            else if(value == "=") {
                evaluateResult();
            } 
            else if(value == "x!") {
                const x = parseFloat(currentValue);
                const result = factorial(x);
                currentValue = result.toString();
                display.value = currentValue;
            } 
            else {
                currentValue += value;
                display.value = currentValue;
            }
        } catch (error) {
            console.error(error);
            currentValue = "Error";
            display.value = currentValue;
        }

      })
    }  
  });