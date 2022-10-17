const sentence: string = 'Learning Typescript is different than Javascript';

// const getWord = (sentence: string, start: number, end: number): string => {
//   return sentence.slice(start, end);
// };
function getWord(sentence: string, start: number, end: number) {
  return sentence.slice(start, end);
}

console.log(getWord(sentence, 9, 19));
