var word = prompt('Enter anything:');
console.log('verbatim: ' + word);
console.log('Length: ' + word.length);
console.log('Third Character: ' + (word.charAt(2) || "String too short"));
console.log('lower case: ' + word.toLowerCase());
console.log('lower case: ' + word.toUpperCase());
console.log(word + ' is a pretty lame word');
console.log('Substring: ' + ((word.length > 3) ? word.substring(1,4) : "String too short"));
