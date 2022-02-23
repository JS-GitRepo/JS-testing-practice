const {translate} = require("../src/translate");

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
describe("Translate to Pig-Latin", ()=> {
    test("Does word starting with consonant translate properly?",()=>{
        let result = translate("hippopotamus");
        expect(result).toBe("ippopotamushay")
    })
    // consonantsUC.forEach((word)=> {
    //     let consonant = word.split("")[0];
    //     test(`Does word starting with "${consonant}" translate properly?`,()=>{
    //         let result = translate(`${word}`);
    //         expect(result).toBe(`${word}way`)
    //     })
    // })
    vowelWordsUC.forEach((word)=> {
        let vowel = word.split("")[0];
        test(`Does word starting with "${vowel}" translate properly?`,()=>{
            let result = translate(`${word}`);
            expect(result).toBe(`${word}way`)
        })
    })
    vowelWordsLC.forEach((word)=> {
        let vowel = word.split("")[0];
        test(`Does word starting with "${vowel}" translate properly?`,()=>{
            let result = translate(`${word}`);
            expect(result).toBe(`${word}way`)
        })
    })
})