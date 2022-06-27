const detectPalindrome = (string) => {
  
  const words = string.split(' ');
  
  let validIndex = [];
  let invalidIndex = [];

  const result = words.filter((word, index) => {

    const reverseWord = [...word].reverse().join('');

    if (word === reverseWord) {
      validIndex.push(index);
      return true;
    } else {
      invalidIndex.push(index);
      return false;
    }

  })

  console.log(`Total detected palindrome : ${result.length}`);
  console.log(`Palindrome words : ${result}`);
  console.log(`Palindrome index : ${validIndex}`);
  console.log(`Invalid palindrome index : ${invalidIndex}`);
  
  return result;
}

detectPalindrome('kakak menjual katak dengan harga 12021');