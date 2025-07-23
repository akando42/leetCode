let palindrom = (x) => {
	if (x < 0){
		return false
	}
	let xString = x.toString()
	let xArray = xString.split("")
	let reverseArray = xArray.reverse()
	let reverseXString = reverseArray.join("")
	let reverseX = parseInt(reverseXString)
	// console.log(x, xArray, reverseArray, reverseX)
	if (reverseX === x){
		return true
	} else {
		return false
	}
}

console.log("Test Case 1", palindrom(121))
console.log("Test Case 2", palindrom(-121)) 
console.log("Test Case 3", palindrom(10)) 