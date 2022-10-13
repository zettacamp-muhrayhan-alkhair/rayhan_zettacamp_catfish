// let wantToBuy = confirm('Want to buy in my store?');
// let stocks = 10;
// const bookPrice = 100000;
// let inputNumberofBooks;
// let totalPrice;
// const discount = (bookPrice * 50) / 100;
// const tax = (discount * 10) / 100;
// let finalPrice = 0;

// if (wantToBuy) {
//   bookPurchase(prompt(`Enter the number of books you want to buy : (stock : ${stocks})`));
//   function bookPurchase(inputNumberofBooks) {
//     totalPrice = bookPrice - discount + tax;
//     console.log(`There are ${stocks} books in stock`);
//     for (let i = 0; inputNumberofBooks > i; i++) {
//       if (i > stocks - 1) {
//         console.log('Out of stock');
//         break;
//       } else {
//         console.log(`You bought ${i + 1} books`);
//         console.log(`You have to pay ${(finalPrice += totalPrice)}`);
//       }
//       console.log(`${stocks - (i + 1)} books left`);
//     }
//   }
// } else {
//   console.log('Thank you for wasting my time!!!');
// }

let wantToBuy = confirm('Want to buy in my store?');
let inputNumberofBooks;
let bookPrice;
let totalPrice;
let discount;
let tax;
// let finalPrice = 0;
let creditTerm;
let mustPayEveryMonth;
let pricePerMonth = [];
// let overallPrice = [];

if (wantToBuy) {
  bookPurchase(prompt(`Enter the number of books you want to buy :`));
  function bookPurchase(inputNumberofBooks) {
    console.log(`You bought ${inputNumberofBooks} books`);
    creditTerm = prompt(`Enter the amount of credit term : (in month)`);
    console.log(`Your credit term ${creditTerm} months`);
    bookPrice = 1000000 * inputNumberofBooks;
    discount = (bookPrice * 50) / 100;
    tax = (discount * 10) / 100;
    totalPrice = bookPrice - discount + tax;
    console.log(`Final price of your book ${totalPrice}`);
    mustPayEveryMonth = totalPrice / creditTerm;
    console.log(`You must pay ${mustPayEveryMonth} per month`);
    for (let i = 0; i < creditTerm; i++) {
      pricePerMonth.push({ Month: `${i + 1} month`, price: `${mustPayEveryMonth}` });
    }
    // for (let j = 0; j < pricePerMonth.length; j++) {
    //   overallPrice.push(pricePerMonth);
    // }
  }
  // console.log(overallPrice);
  console.log(pricePerMonth);
} else {
  console.log('Thank you for wasting my time!!!');
}

const spreadOpt = [...pricePerMonth];
console.log(spreadOpt);

const typesOfBooks = ['HTML', 'CSS', 'JS', 'PHP', 'Angular', 'TS', 'MangoDB'];
const [firstBook, secondBook, thirdBook, , fifthBook, sixthBook] = typesOfBooks;
console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);
console.log(fifthBook);
console.log(sixthBook);
