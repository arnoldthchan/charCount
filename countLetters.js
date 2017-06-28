//Returns all the unique characters that exist in a string
//Function should also report back how many instances of
//each letter found in the string

var counted = {};

function countLetters(word){
  justWord = (word.split(' ').join(''));
  for (var i = 0; i < justWord.length; i++){
    var character = justWord.charAt(i);
    if (counted[character]){
      // Adds 1 to character already within object
      // console.log('Letter Added:', justWord[i]);
      counted[character] ++;
    } else {
      // Adds new letter to object
      // console.log('New Letter Added:', justWord[i]);
      counted[character] = 1;
    }
  }
  return counted;

}

countLetters('lighthouse in the house');
countLetters('aaaaassssdddffg');
console.log(counted);