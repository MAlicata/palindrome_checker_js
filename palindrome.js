console.log("let's go");

let word = "ana";

word = word.toLowerCase();
word = word.replace(/[^a-z0-9]/g, '');

let backward = word.split('');
backward = backward.reverse().join('').toString();
let flag;
backward === word? flag = true : flag = false;
console.log(flag);

/*if (backward === word) {
    console.log("true");
    return true;
} else {
    console.log("false");
    return false;
}*/


