/** Stacks */


/** functions in stack */

/** push
 * pop
 * seek
 * length
 */


 // use an array stack to check for a palindrome number


let letters = [] // this is a our stack


let word = "rajdeep";

let rword = "";


for(let i = 0;i < word.length; i++){
    letters.push(word[i])
}


for(let i = 0; i < word.length; i++){
    rword += letters.pop()
}


if(word === rword){
    console.log(word + " is a palindrome")
} else {
    console.log(word + "is not a palindrome")
}