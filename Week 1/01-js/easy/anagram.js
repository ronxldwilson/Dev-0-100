/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if(str1.length !== str2.length)
		return false
	
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();

	let arr1 = str1.split('');
	let arr2 = str2.split('');
	
	let sortedArray1 = arr1.sort();
	let sortedArray2 = arr2.sort();
	
	let i;

	const length = str1.length
	
	for(i = 0;i <= length; i++){
		if(sortedArray1[i] !== sortedArray2[i])
			return false;
		console.log(sortedArray1);
		console.log(sortedArray2);
	}

	return true;
}

module.exports = isAnagram;
