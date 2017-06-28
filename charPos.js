// Function countLetters returns all the indices(zero based positions)
// in the string where the character is found
// so we return every index position whenever the string shows up

var counted = {}
  // return `${this.firstName} TEXT ${this.lastName}`;

function countLetters(word){
  counted = {};
  word = word.toLowerCase() //Turns word into lowercase
  // console.log('word entered:', word, 'length:', word.length);
    for (var i = 0; i < word.length; i++){
      var key = word[i];
      if (counted[key]){ //Checks if there is already a key for that letter
        counted[key].push(i);
        // console.log(word[i], 'at', [i], 'Letter already exists' );
      } else {
        counted[key] = [i];
        // console.log(word[i], 'at', [i], 'New Letter, adding to object');
      }
    }
  return counted;
}
countLetters('LIGHTHOUSELIGHTHOUSE');
console.log(counted);
