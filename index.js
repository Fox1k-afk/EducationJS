function cicles() {
	let string = '';
	let count = 0;
while (true) {
	const answer = prompt('Enter some text');
	string = string + `${answer}`;
	count++;
	if (count % 3 == 0) {
		let cont = confirm('Do we continue or not?')
		if (cont == true) {
			continue;
		} else {
			alert('Game Over');
			break;
		}
	}
	console.log(string);
	}
}

cicles();

