
// Reverse an array 
//

let arr1 = [1,3,4,23,56,12];
let arr2 = [1,4,6,7,3,43,234];

function reverse(arr){
	let i = 0, temp;
	let j = arr.length - 1;
	let len = arr.length;

	for(k = 0; k<len/2;k++)	{
		temp = arr[k];
		arr[k] = arr[j];
		arr[j] = temp;
		j--;
	}
	return arr;
	
}
console.log(arr1);
console.log(arr2);
console.log(reverse(arr1));
console.log(reverse(arr2));

