// https://the-winter.github.io/codingjs/exercise.html?name=mixStart&title=Warmup-1

// Return true if the given string begins with 'mix', 
// except the 'm' can be anything, so 'pix', '9ix' .. all count.

// if the string's second and third letters are 'ix' then return true, 
// otherwise return false


// this one checks each letter spearately
function mixStart(str){
  if (str[1] === 'i' && str[2] === 'x') {
    return true;
  } else {
    return false;
  }
}

// this one concatenates the letters
function mixStart(str){
    if (str[1] + str[2] === 'ix') {
      return true;
    } else {
      return false;
    }
  }

  // this one simplifies the conditional statement into a single evaluation
  function mixStart(str){
    return str[1] + str[2] === 'ix'; 
  }