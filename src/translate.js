"use strict";

const translate = (word) => {
    const vowels = ["a","e","i","o","u"];
    let stringHolder = word.split("");
    let firstIsVowel = false;
    // Checks first letter of "word" against all vowels. Returns firstIsVowl: t or f
    vowels.forEach((vowel)=> {if (stringHolder[0] === vowel) {firstIsVowel=true}});

    if (firstIsVowel === true) {
        "way".split("").forEach((letter)=> stringHolder.push(letter));
        return stringHolder.join("");
    } else {
        let firstConsIndex = stringHolder.findIndex((letter,i)=> vowels.includes(letter));
        
    }

    console.log(firstConsIndex);
}
translate("hippopotamus")

module.exports = {translate}