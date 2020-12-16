function quadraticBiggestFish(fishes) {
	let longest = ''
	for (let i = 0; i < fishes.length; i++) {
		for (let j = 0; j < fishes.length; j++) {
			let longer = fishes[i].length > fishes[j].length ? fishes[i] : fishes[j]
			longest = longest.length > longer.length ? longest : longer
		}
	}
	return longest
}

function nlognBiggestFish(fishes) {
	return fishes.sort((a, b) => a.length - b.length)[fishes.length - 1]
}

function linearBiggestFish(fishes) {
	let longest = ''
	for (let i = 0; i < fishes.length; i++) {
		if (fishes[i].length > longest.length) longest = fishes[i]
		// if (longest.length > fishes[i].length) {
		//     longest = longest
		// } else {
		//     longest = fishes[i].length
		//*     / This ternary does this ^^^
		//*     longest = longest.length > fishes[i].length ? longest : fishes[i]
		// }.
	}
	return longest
}

function slowDance(direction, tilesArray) {
	for (let i = 0; i < tilesArray.length; i++) {
		if (tilesArray[i] === direction) {
			return i
		}
	}
}

//..

const fishies = [
	'fish',
	'fiiish',
	'fiiiiish',
	'fiiiish',
	'fffish',
	'ffiiiiisshh',
	'fsh',
	'fiiiissshhhhhh',
	'fsh',
	'fsh',
]
console.log(quadraticBiggestFish(fishies))
console.log(nlognBiggestFish(fishies))
console.log(linearBiggestFish(fishies))

let tilesArray = ['up', 'right-up', 'right', 'right-down', 'down', 'left-down', 'left', 'left-up']
console.log(slowDance('up', tilesArray))
console.log(slowDance('right-down', tilesArray))

let tilesObj = {
	'up': 0,
	'right-up': 1,
	'right': 2,
	'right-down': 3,
	'down': 4,
	'left-down': 5,
	'left': 6,
	'left-up': 7,
}
function fastDance(direction, tilesObj) {
	return tilesObj[direction]
}
console.log(fastDance('up', tilesObj))
console.log(fastDance('right-down', tilesObj))
