function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dieOne = {
	value: 1,
	roll: function() {
		this.value = getRandom(1, 6);
		return this.value;
	}
};

let dieTwo = {
	value: 1,
	roll: function() {
		this.value = getRandom(1, 6);
		return this.value;
	}
};

function printNumber(number1, number2) {

	let value1 = document.querySelector('#dice1');
	let value2 = document.querySelector('#dice2');
	value1.style['background-image'] = `url(/images/inverted-dice-${number1}.svg)`;
	value2.style['background-image'] = `url(/images/inverted-dice-${number2}.svg)`;
}

let button = document.querySelector('button');

button.addEventListener('click', function(event) {
	event.preventDefault();

	let result1 = dieOne.roll();
	let result2 = dieTwo.roll();
	printNumber(result1, result2);
});
