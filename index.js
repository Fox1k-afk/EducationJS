let firstNum = +prompt("Choose a first number"); 
 let secondNum = +prompt("Choose a second number"); 
 let operation = prompt("Choose operation + - * / ") 
if (operation === '+') { 
add(`${firstNum}`,`${secondNum}`); 
} else if (operation === '-') { 
  min(`${firstNum}`,`${secondNum}`); 
} else if (operation === '*') { 
multip(`${firstNum}`,`${secondNum}`);  
} else if (operation === '/') { 
division(`${firstNum}`,`${secondNum}`); 
} 
  
  
function add(firstNum, secondNum) { 
  const result = Number(firstNum) + Number(secondNum) ; 
  console.log(`${firstNum} + ${secondNum} = ${result} `); 
} 
 
 
function min(firstNum, secondNum) { 
  const result = Number(firstNum) - Number(secondNum); 
  console.log(`${firstNum} - ${secondNum} = ${result} `); 
} 
 
 
function multip(firstNum, secondNum) { 
  const result = Number(firstNum) * Number(secondNum); 
  console.log(`${firstNum} * ${secondNum} = ${result} `); 
} 
 
 
function division(firstNum, secondNum) { 
  const result = Number(firstNum) / Number(secondNum); 
  console.log(`${firstNum} / ${secondNum} = ${result} `); 
}