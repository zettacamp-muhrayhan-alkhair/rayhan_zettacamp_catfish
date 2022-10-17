type combinedType = string | number;
let firstCase: Array<combinedType> = [1, 'data', 3, 'result'];
let firstFinalResult: string = '';

function firstResult() {
  for (let i: number = 0; i < firstCase.length; i++) {
    firstFinalResult += firstCase[i];
    firstFinalResult += ' ';
  }
  return firstFinalResult;
}

console.log(firstResult());
console.log(typeof firstResult());

let secondCase: string[] = ['Bejo', 'has', '4', 'sport', 'car'];
let finalSecondResult: string = '';

function secondResult(): string {
  return (finalSecondResult = secondCase.join(' '));
}

console.log(secondResult());
console.log(typeof secondResult());
