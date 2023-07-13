//make sure you push when you're done! and pull first

// https://the-winter.github.io/codingjs/exercise.html?name=helloName&title=String-1
/*
String-1 -- helloName
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

Given name, return 'Hello name!'
Concatenate 'Hello' + ' ' + name + !
*/

function helloName(name) {
  return "Hello" + " " + name + "!";
}

//you can also use template literal strings for this problem
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//to simplify into this
//template literals make it such that you can put variables in string with ${variableName}
//and you dont have to concatenate with '+'!
//there are still uses for regular single and double quote strings tho
function helloName2(name) {
  return `Hello ${name}!`;
}

//https://the-winter.github.io/codingjs/exercise.html?name=makeAbba&title=String-1
/*
String-1 -- makeAbba
Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

Given a and b, return abba
Concatenate a + b + b + a
*/

function makeAbba(a, b) {
  return a + b + b + a;
}

//Diana:There's probably a simpler way to do this though? Idk
//Khalid: There is not! but here's another way that shows you how to use .join()
function makeAbba2(a, b) {
  return [a, b, b, a].join("");
}
//this version puts the strings in an array and then joins them with nothing in between
//.join() joins every element in an array into a single string and puts
//the separator you provide in between each item in the array
// so ['hi','di','die'].join('lol') would be 'hiloldiloldie'

//https://the-winter.github.io/codingjs/exercise.html?name=makeTags&title=String-1
/*
String-1 -- makeTags
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay".
Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

Given tag and word, return <tag>word</tag>
Concatenate '<' + tag '>' + word + '</' + tag + '>'
*/

function makeTags(tag, word) {
  return "<" + tag + ">" + word + "</" + tag + ">";
}

//template literal version

function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}
//SUMMARY:
/* its definitely okay to use '' with + to put strings together, i do it a lot.
template literal strings can make what you're typing look more like what
it's supposed to look like when you're reading it
we're gonna cover string methods like
.join()
.slice()
.repeat()
Good work*/
