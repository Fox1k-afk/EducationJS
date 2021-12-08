// function cicles() {
// 	let string = '';
// 	let count = 0;
// while (true) {
// 	const answer = prompt('Enter some text');
// 	string = string + `${answer}`;
// 	count++;
// 	if (count % 3 == 0) {
// 		let cont = confirm('Do we continue or not?')
// 		if (cont == true) {
// 			continue;
// 		} else {
// 			alert('Game Over');
// 			break;
// 		}
// 	}
// 	console.log(string);
// 	}
// }
// cicles();

function array() {
 let strings = [];
 let numbers = [];
 let count = 0;
 let isConfirm = true;

 while (true) {
  let question = prompt("Choose: word or number");
  const isNumber = +question;
  if (isNaN(isNumber)) {
   strings.push(question);
  } else {
   numbers.push(question);
  }
  if (count % 5 === 0 && count != 0) {
   isConfirm = confirm("Continue or not?");
  }

  if (!isConfirm) {
   break;
  }
  count++;
 }
 console.log(strings);
 console.log(numbers);
}
array();
