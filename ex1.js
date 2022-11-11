function reverseString(string) {
    var splitString = string.split(""); 
    var reverseString = splitString.reverse(); 
    var newString = reverseString.join(""); 
    //console.log(newString)
    return newString;
}
 
reverseString("bonjour");