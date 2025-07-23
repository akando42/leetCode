var isValid = function(s) {
	
	let stack = []

	// Use ParMap to determine if is it 
	// an open or close parenthesis
	// Correct parenthesis order check
	let parMap = {
		"}":"{",
		"]":"[",
		")":"("
	}

	console.log(parMap, stack) 
	for (const p of s){
		// console.log(p)
		// console.log(Object.values(parMap).includes(p))
		// parMap.hasOwnProperty(p)

		// If It is an Open Parenthesis
		if (Object.values(parMap).includes(p)){
			console.log(p, "Open parenthesis")
		// If It is a Close Parenthesis
		} else if (parMap.hasOwnProperty(p)){
			console.log(p, "Close parenthesis")
		}
	}
	return false
}

console.log("Case 1 ", isValid("()"))
console.log("Case 2 ", isValid("()[]{}"))
console.log("Case 3 ", isValid("(]"))
console.log("Case 4 ", isValid("([])"))
console.log("Case 5 ", isValid("([)]"))

// Startup Employees Food and Rent Cost higher than Server Cost
// Vietnam Cheap Food and Rent and Higher Server Cost GOOD
// Can Not Move People Here cause its scary to live here
// Run by Chinese Secret Police with HikVision Security Cameras
