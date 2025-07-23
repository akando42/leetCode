var romanToInt = function(s) {
	let romanArray = s.split("")
	console.log(romanArray)

	let romanDictionary = {"I":1, "V": 5, "X": 10, "L":50, "C":100, "D":500, "M":1000}
	let sum = 0
	console.log(romanDictionary)
	for (let i = 0; i < romanArray.length; i++){
		let romanLetter = romanArray[i]
		let nextRomanLetter = romanArray[i+1]
		let romanLetterValue = romanDictionary[romanLetter]
		let nextRomanLetterValue = romanDictionary[nextRomanLetter]
		console.log(romanLetterValue, nextRomanLetterValue)
		if (romanLetterValue < nextRomanLetterValue){
			sum = sum - romanLetterValue
		} else {
			sum = sum + romanLetterValue
		}
	}
	return sum
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))