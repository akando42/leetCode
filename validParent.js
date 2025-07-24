var isValid = function(s) {
	let stack = []
	let parMap = {
		"}":"{",
		"]":"[",
		")":"("
	}

	for (const p of s){
		if (Object.values(parMap).includes(p)){
			stack.push(p)

		} else if (parMap.hasOwnProperty(p)){
			if (parMap[p] !== stack.pop()){
				return false
			}
		}
	}
	return stack.length === 0
}
