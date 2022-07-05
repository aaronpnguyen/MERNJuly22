var partition = (input, left, right) => {
	let random = Math.floor(Math.random() * (right - left + 1) + left)
	const pivot = input[random]
	
	while(left <= right) {
		while (input[left] < pivot) {
			left++;
		}
		while (input[right] > pivot) {
			right--;
		}
		if (left <= right) {
			let temp = input[right];
			input[right] = input[left];
			input[left] = temp;
			left++;
			right--;
		}
	}
	return left;
}

var hoare = (input, left = 0, right = input.length - 1) => {
	if (left < right) {
		const pivot = partition(input, left, right);
		hoare(input, left, pivot - 1)
		hoare(input, pivot, right)
	}
	return input
}
input = [1, 3, 2, 4, 5, 7, 0]
console.log(hoare(input))