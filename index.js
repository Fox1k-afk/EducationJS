// START 1 TASK

// function arrAdd() {
//  let bank = [];
//  while (true) {
//   const question = prompt("Enter some text");
//   if (question === null || question === "") {
//    bank.pop();
//   } else {
//    bank.push(question);
//   }
//   console.log(bank);
//  }
// }
// arrAdd();

// END 1 TASK

// START 2 TASK

function hundred() {
 const vault = [];
 for (let i = 1; i <= 100; i++) {
  vault.push(i);
 }
 console.log(vault);
 const newVault = vault.map(function (item, index, array) {
  return item * 3;
 });
 console.log(newVault);
}
hundred();

// END 2 TASK

// ClassWork

// function array() {
//  let strings = [];
//  let numbers = [];
//  let count = 0;
//  let isConfirm = true;

//  while (true) {
//   let question = prompt("Choose: word or number");
//   const isNumber = +question;
//   if (isNaN(isNumber)) {
//    strings.push(question);
//   } else {
//    numbers.push(question);
//   }
//   if (count % 5 === 0 && count != 0) {
//    isConfirm = confirm("Continue or not?");
//   }
//   if (!isConfirm) {
//    break;
//   }
//   count++;
//  }
//  console.log(strings);
//  console.log(numbers);
// }
// array();

////////////////////////////////////////////////////////////////////////////////////

// function test() {
//  const arr = [];
//  while (true) {
//   const answer = prompt("Enter ur word");
//   if (answer === null || answer === "") {
//    arr.pop();
//   } else {
//    arr.push(answer);
//   }
//  }
// }
