"use strict";
const vowels = ["a","e","i","o","u"];

// 
const translate = (word) => {
    let stringHolder = word.split("");
    let firstIsVowel = vowels.includes(stringHolder[0].toLowerCase());

    if (firstIsVowel === true) {
        "way".split("").forEach((letter)=> stringHolder.push(letter));
        return stringHolder.join("");
    } else {
        return consonants(word);
    }
}

const consonants = (word) => {
    let consonantHolder = word.toLowerCase().split("");
    let consonantSegment = [];
    let firstConsIndex = consonantHolder.findIndex((letter)=> vowels.includes(letter));
    for (let i=0; i < firstConsIndex; i++){
        consonantSegment.push(consonantHolder[i].toLowerCase());
    }
    consonantHolder.splice(0,firstConsIndex);
    return consonantHolder.concat(consonantSegment,"ay".split("")).join("");
}

module.exports = {translate,consonants}