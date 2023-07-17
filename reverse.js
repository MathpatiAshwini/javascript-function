// Q2: Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeparator(string, "");

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}