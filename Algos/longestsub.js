const longestSubString = str => {
    let current = [];
    let longestSub = 0;

    for (let i = 0; i < str.length; i++) {
        const currentPosition = current.indexOf(str[i]);
        if (currentPosition != -1) {
            current.splice(0, currentPosition + 1);
        }
        current.push(str[i]);
        longestSub = Math.max(longestSub, current.length);
    }
    return longestSub;
};

console.log(longestSubString("pwwkew"))

function lengthOfLongestSubString(str) {
  let maxLen = 0;
  let subStr = "";

  for (let i = 0; i < str.length; i++) {
    const remainingLength = str.length - i;
    subStr = "";

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (remainingLength < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      if (subStr.includes(str[j])) {
        break;
      } else {
        subStr += str[j];
      }
    }

    if (subStr.length > maxLen) {
      maxLen = subStr.length;
    }
  }
  return maxLen;
}


function lengthOfLongestSubString3(str) {
    const seenChars = {};
    let longest = 0;
    let startIndex = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (seenChars.hasOwnProperty(char) && startIndex <= seenChars[char]) {
        startIndex = seenChars[char] + 1;
      }
  
      seenChars[char] = i;
      const diff = i - startIndex + 1;
  
      if (diff > longest) {
        longest = diff;
      }
    }
    return longest;
  }