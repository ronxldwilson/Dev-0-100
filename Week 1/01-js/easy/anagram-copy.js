/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  if(str1.length !== str2.length){
    return false;
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');
  
  const arrLength = str1.length;
  finArr = [];
  
  let i;

  for(i = 0; i <= arrLength; i++){
    let compare = arr1[i];
    let j;
    let flag = 0;
    for (j=0;j <= arrLength; j++){
      if(arr2[j] == compare)
        flag = 1;
      
      if(flag == 1)
        finArr.push(1);
      else
        finArr.push(0);
    }
  } 
  i=0;
  finArr.forEach(i => {
    if(finArr[i] == 0){
      return false;
    }
  });
  console.log(finArr);
  return true;
}

module.exports = isAnagram;
