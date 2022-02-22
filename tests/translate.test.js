const {translate} = require("../src/translate");

describe("Translate to Pig-Latin", ()=> {
    test("Does word starting with consonant translate properly?",()=>{
        let result = translate("hippopotamus");
        expect(result).toBe("")
    })
    test("Does word starting with vowel translate properly?",()=>{
        let result = translate("indigo");
        expect(result).toBe("indigoway")
    })
})