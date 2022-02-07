function validateHaiku(haikuInput) {
  parts = haikuInput.split("/");
  if (parts.length != 3) {
    console.log("Haiku needs 3 lines");
  } else {
    parts.forEach(function (part) {
      console.log("Syllables: " + syllableCount(part));
    });
    console.log("Parts length: " + parts.length);
    console.log(haikuInput);
    if (
      syllableCount(parts[0]) == 5 &&
      syllableCount(parts[1]) == 7 &&
      syllableCount(parts[2]) == 5
    ) {
      console.log("this is a haiku");
    } else {
      console.log("not a haiku dude");
    }
  }
}

var syllableCountPatterns = {};

syllableCountPatterns.pattern = new RegExp("[aeiouy]([^aieouy]|$)", "gim");
syllableCountPatterns.silentE = new RegExp(
  "[aeiouy][^aeiouy]e([^a-z]s|[^a-z]|$)",
  "i"
);
syllableCountPatterns.silentEs = new RegExp(
  "[aeiouy][^aeiouy]e([^a-z]s|[^a-z]|$)",
  "gim"
);

let haikuInput =
  "I am a hacker/i enjoy writing good code/one two three four five";

function syllableCount(string) {
  var matches = string.match(syllableCountPatterns.pattern);
  if (matches == null) return 0; // No vowels found...
  var currentSyllableCount = matches.length;
  if (string.match(syllableCountPatterns.silentE) != null)
    currentSyllableCount -= string.match(syllableCountPatterns.silentEs).length;
  return currentSyllableCount;
}

console.log(validateHaiku(haikuInput));
