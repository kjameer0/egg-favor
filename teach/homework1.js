//make sure you push when you're done! and pull first

// https://the-winter.github.io/codingjs/exercise.html?name=helloName&title=String-1
/*
String-1 -- helloName
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

Given name, return 'Hello name!'
Concatenate 'Hello' + ' ' + name + ! 
*/

function helloName(name) {
    return 'Hello' + ' ' + name + '!';
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

//There's probably a simpler way to do this though? Idk



//https://the-winter.github.io/codingjs/exercise.html?name=makeTags&title=String-1
/*
String-1 -- makeTags
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". 
Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

Given tag and word, return <tag>word</tag>
Concatenate '<' + tag '>' + word + '</' + tag + '>'
*/

 function makeTags(tag, word) {
    return '<' + tag + '>' + word + '</' + tag + '>';
 }