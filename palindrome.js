console.log("let's go");

let word = "Matias ALICATA";

word = word.toLowerCase();
word = word.replace(/[^a-z0-9]/g, '');

let backward = word.split('');
backward = backward.reverse().join('').toString();

if (backward === word) {
    console.log("true");
    return true;
} else {
    console.log("true");
    return false;
}
