/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// This code right now works for 5/7 test cases 
// it doesn't work for cases in which there are punctuation marks or spaces in the palindrome
// To solve this a simple logic can be implemented which makes the string as array first
// then it iterates over it to go on to remove the white spaces 

function isPalindrome(str) {
	let i,j;

	str = str.toLowerCase();

	const length = str.length;
	j = length - 1;

	for (i = 0;i <= length/2; i++){
		if(str[i] !== str[j])
			return false

		j--;

	}

	return true;
}

module.exports = isPalindrome;
