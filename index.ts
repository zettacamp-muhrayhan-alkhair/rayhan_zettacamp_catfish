let firstCase: Array<string | number> = [1, 'data', 3, 'result'];
let firstFinalResult: string = '';

function firstResult(): any {
  for (let i: number = 0; i < firstCase.length; i++) {
    firstFinalResult += firstCase[i];
    firstFinalResult += ' ';
  }
  return firstFinalResult;
}

console.log(firstResult());
console.log(typeof firstResult());

let secondCase: Array<string> = ['Bejo', 'has', '4', 'sport', 'car'];
let finalSecondResult: string = '';

// function secondResult(): any {
//   for (let i: number = 0; i < secondCase.length; i++) {
//     finalSecondResult += secondCase[i];
//     finalSecondResult += ' ';
//   }
//   return finalSecondResult;
// }

// console.log(secondResult());
// console.log(typeof secondResult());

function secondResult(): any {
  for (let i: number = 0; i < secondCase.length; i++) {
    finalSecondResult = secondCase.join(' ');
  }
  return finalSecondResult;
}

console.log(secondResult());
console.log(typeof secondResult());
