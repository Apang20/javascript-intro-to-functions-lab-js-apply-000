function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
console.log(shout('hello'));
}

function logWhisper(string){
console.log(whisper('hello'));
}

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