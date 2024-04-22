"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function longestWordWithoutDuplicatesDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (sentence) {
        const words = sentence.split(' ');
        let longestWord = '';
        for (const word of words) {
            const uniqueCharacters = new Set(word);
            if (uniqueCharacters.size === word.length && word.length > longestWord.length) {
                longestWord = word;
            }
        }
        return longestWord;
    };
    return descriptor;
}
class WordAnalyzer {
    findLongestWord(sentence) {
        return '';
    }
}
__decorate([
    longestWordWithoutDuplicatesDecorator
], WordAnalyzer.prototype, "findLongestWord", null);
const analyzer = new WordAnalyzer();
const sentence = "hello world apple banana orange pumpkin cucumber";
const longest = analyzer.findLongestWord(sentence);
console.log("Longest word without duplicate characters:", longest);
