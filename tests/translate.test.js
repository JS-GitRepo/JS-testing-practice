// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LINKED FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const {translate,consonants} = require("../src/translate");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ORIGIN ARRAYS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const vowels = ["a","e","i","o","u"];
const alphabetWordsUC = [
    "Apple","Bark","Carrot","Dorito","Eagle","Funyuns","Gorilla","Horde","Indigo","Jake","Kilogram","Leader","Mango","Nancy","Orange","Pringles","Quail","Reading","Saucer","Tangerine","Under","Victor","Winter","Xanthan","Yellow","Zebra"
]

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DYNAMIC ARRAYS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const consonantsUC = alphabetWordsUC.filter((word,i)=> !vowels.includes(word.split("")[0].toLowerCase()));
const consonantsLC = [];
const vowelWordsUC = alphabetWordsUC.filter((word,i)=> vowels.includes(word.split("")[0].toLowerCase()));
const vowelWordsLC = [];
const toLowerCase = (array,output) => array.forEach((word)=> output.push(word.toLowerCase()));
toLowerCase(consonantsUC,consonantsLC);
toLowerCase(vowelWordsUC,vowelWordsLC);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TESTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
describe(`Testing "consonants" function for use in "translate" function`, ()=> {
    test(`Does translate work with one consonant in front?`,()=> {
        let result = consonants("Gorilla");
        expect(result).toBe("orillagay");
    })
    test(`Does translate work with one consonant in front again?`,()=> {
        let result = consonants("bonkers");
        expect(result).toBe("onkersbay");
    })
    test(`Does translate work with TWO consonants in front?`,()=> {
        let result = consonants("Clank");
        expect(result).toBe("ankclay");
    })
    test(`Does translate work with TWO consonants in front again?`,()=> {
        let result = consonants("Drunk");
        expect(result).toBe("unkdray");
    })
    test(`Does translate work with THREE consonants in front?`,()=> {
        let result = consonants("sklizzy");
        expect(result).toBe("izzysklay");
    })
    test(`Does translate work with FOUR consonants in front?`,()=> {
        let result = consonants("MCGRAW");
        expect(result).toBe("awmcgray");
    })
    test(`Does translate work with FIVE consonants in front?`,()=> {
        let result = consonants("Psycho");
        expect(result).toBe("opsychay");
    })
})

// The vowel tests below are legit but the consonant tests basically only test if the function is diverting to "consonant" rather than "vowel" when it's supposed to. This is due to consonant() being called in the "expect to be" area.
describe(`Testing "translate" function for consonants (Using consonant() for validation)`, ()=> {
    test(`Does the word "Hippopotamus" translate properly?`,()=>{
        let result = translate("Hippopotamus");
        expect(result).toBe("ippopotamushay");
    })
    consonantsUC.forEach((word)=> {
        let consonant = word.split("")[0];
        test(`Does word starting with "${consonant}" translate properly?`,()=>{
            let result = translate(`${word}`);
            expect(result).toBe(`${consonants(word)}`);
        })
    })
    consonantsLC.forEach((word)=> {
        let consonant = word.split("")[0];
        test(`Does word starting with "${consonant}" translate properly?`,()=>{
            let result = translate(`${word}`);
            expect(result).toBe(`${consonants(word)}`);
        })
    })
})

describe(`Testing "translate" function for vowels`, ()=> {
    vowelWordsUC.forEach((word)=> {
        let vowel = word.split("")[0];
        test(`Does word starting with "${vowel}" translate properly?`,()=>{
            let result = translate(`${word}`);
            expect(result).toBe(`${word}way`);
        })
    })
    vowelWordsLC.forEach((word)=> {
        let vowel = word.split("")[0];
        test(`Does word starting with "${vowel}" translate properly?`,()=>{
            let result = translate(`${word}`);
            expect(result).toBe(`${word}way`);
        })
    })
})