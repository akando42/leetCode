var twoSum = function(nums, target){
	let indices = {}

	for (i = 0; i < nums.length; i++){
		let diff = target - nums[i]
		// console.log(nums[i], diff)
		if (indices.hasOwnProperty(diff)){
			return [indices[diff], i]
		}
		indices[nums[i]] = i;
		console.log("Indices", indices)
	}

	// console.log(nums);
	// console.log(target);
	console.log("Original Indices", indices)
	return null;



}

console.log("Two Sum case 1\n", twoSum([2, 7, 11, 15], 9))
console.log("Two Sum case 2\n", twoSum([3, 2, 4], 6))
console.log("Two Sum case 3\n", twoSum([3, 3], 6))