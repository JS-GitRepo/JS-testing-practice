"use strict";


// 
const translate = (word) => {
    const vowels = ["a","e","i","o","u"];
    let stringHolder = word.split("");
    let stringSegment = [];
    let firstIsVowel = vowels.includes(stringHolder[0].toLowerCase());

    if (firstIsVowel === true) {
        "way".split("").forEach((letter)=> stringHolder.push(letter));
        return stringHolder.join("");
    } else {
        let firstConsIndex = stringHolder.findIndex((letter)=> vowels.includes(letter));
        for (let i=0; i < firstConsIndex; i++){
            stringSegment.push(stringHolder[i]);
            stringHolder.shift();
        }
        return stringHolder.concat(stringSegment,"ay".split("")).join("");
    }
}

module.exports = {translate}