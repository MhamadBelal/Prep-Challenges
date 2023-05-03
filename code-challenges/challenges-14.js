'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here
    const lastSpaceIndex = str.lastIndexOf(' ');
  if (lastSpaceIndex === -1) {
    return str;
  }
  return str.slice(lastSpaceIndex + 1);

}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    let sipltStr=str.split(" ")
    return sipltStr[sipltStr.length-1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    // write your code here
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i] === 'I') {
        words.splice(i, 1, 'We');
      } else if (words[i] === 'am') {
        words.splice(i, 1, 'are');
      } else if (words[i] === 'was') {
        words.splice(i, 1, 'were');
      }
    }
    return words.join(' ');

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    for(let i=0;i<arr.length;i++)
    {
        if(i%5==0 && i>0)
            arr[i-1]+=','  
    }
    if(arr.length%5==0)
       arr[arr.length-1]+=','
    let joined=arr.join(' ');
    return joined;
    
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
    let count = 1;
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += " ";
      count = 1;
    } else if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  
  return result;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };