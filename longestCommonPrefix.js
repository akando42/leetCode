var longestCommonPrefix = function(strs) {
	let arrLen = strs.length
	let pref = strs[0]
	let preLen = pref.length
	// console.log(arrLen, pref, preLen)

	// Skip the Prefix assign first one
	for (let i = 1; i < arrLen; i++){
		let nextString = strs[i]
		while (pref !== nextString.substring(0,preLen)){
			// Reduce Prefix length by 1
			preLen--;
			if (preLen ===0){
				return "";
			}
			
			// Updating substring to next value with new prefix length
			pref = pref.substring(0, preLen)
		}
	}

	return pref
}

console.log("Case 1", longestCommonPrefix(["flower", "flow", "flight"]));
console.log("Case 2", longestCommonPrefix(["dog", "racecar", "car"]));