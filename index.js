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

// function hundred() {
//  const vault = [];
//  for (let i = 1; i <= 100; i++) {
//   vault.push(i);
//  }
//  console.log(vault);
//  const newVault = vault.map(function (item, index, array) {
//   return item * 3;
//  });
//  console.log(newVault);
// }
// hundred();

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

// let string =
//  "Lorem ipsum fuck suck dolor sit amet, consectetur adipisicing elit. Expedita praesentium nemo fuck suck totam quibusdam natus nesciunt tempora nam. Harum rem molestias repudiandae accusamus ab, esse nihil officiis explicabo iste.";

// function filtration(str) {
//  let arr = str.split(" ");
//  let filtered = arr.filter(words);
//  function words(result) {
//   if (result !== "fuck" && result !== "suck") {
//    return result;
//   }
//  }
//  return filtered.join(" ");
// }
// filtration(string);

// const result = filtration(string);
// console.log(result);

// /////////////////////////////////////////////////////////////////////////////////

function capitalize(str) {
 let arr = str.split(" ");
 let newArr = arr.map(function (item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
 });
 const capitalString = newArr.join(" ");
 console.log(capitalString);
}
const string =
 "Lorem ipsum fuck suck dolor sit amet, ae ae ae ae ae ae ae a ea ea ea consectetur adipisicing elit. Expedita praesentium nemo fuck suck totam quibusdam natus nesciunt tempora nam. Harum rem molestias repudiandae accusamus ab, esse nihil officiis explicabo iste.";

capitalize(string);
