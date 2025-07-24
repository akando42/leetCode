var mergeTwoLists = function(list1, list2) {
	if (list1.length == 0 && list2.length == 0){
		return list1
	} else if (list1.length == 0){
		return list2
	} else if (list2.length == 0){
		return list1
	} else {
		let temp1 = list1
		let temp2 = list2
		let tempArray = [...temp1, ...temp2]
		return tempArray.sort()
	}
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))