// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

const evenStr = "abc123"
const oddStr = "abc1234"
const singleStr = "A"

const getMiddle = (s) => {
 
  let lengthCheck = s.length % 2
  let evenIndex1 = (s.length / 2) - 1
  let evenIndex2 = (s.length / 2) + 1
  let oddIndex1 = Math.floor(s.length / 2)
  let oddIndex2 = Math.round(s.length / 2)

  if(s.length === 1) {
    return s
  }
  else if(lengthCheck === 0){
    return s.substring(evenIndex1, evenIndex2)
  } 
  else if(lengthCheck !== 0){
    // had it reversed, only works for odd str
    return s.substring(oddIndex1, oddIndex2)
  }
}

// find for odd strings:
// console.log(Math.floor(oddStr.length / 2))
// console.log(oddStr.substring(Math.floor(oddStr.length / 2), Math.round(oddStr.length /2)))

// find for even strings:
// console.log("expected: \'c1'",evenStr.substring((evenStr.length / 2) -1 , (evenStr.length / 2) + 1))

// for a single letter str:
// console.log(singleStr.length)
// console.log(singleStr.substring(Math.floor(singleStr.length / 2), Math.round(singleStr.length /2)))

console.log(getMiddle(evenStr))
console.log(getMiddle(oddStr))
console.log(getMiddle(singleStr))
