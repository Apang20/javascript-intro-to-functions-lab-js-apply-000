function logShout(string) {
  return string.toUpperCase();
}

function logWhisper(string) {
  return string.toLowerCase();
}

console.log(logShout('string'));
console.log(logWhisperhisper('string'));

function sayHiToGrandma(string) {
if (string === "I love you, Grandma.") {
  return "I love you, too.";
}
if (string === string.toUpperCase()) {
  return "YES INDEED!";
} else {
  return "I can't hear you!";
}
}