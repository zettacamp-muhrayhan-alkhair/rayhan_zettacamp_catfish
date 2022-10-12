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

// // our object array
// let data_array = [];

// // our object
// let my_object = {};

// // load data into object

// my_object.name = 'stack';
// my_object.age = 20;
// my_object.hair_color = 'red';
// my_object.eye_color = 'green';

// // push the object to Array
// data_array.push(my_object);

// console.log(data_array);

let wantToBuy = confirm('Want to buy in my store?');
// let inputNumberofBooks;
// const bookPrice = 1000000 * inputNumberofBooks;
// let totalPrice;
// const discount = (bookPrice * 50) / 100;
// const tax = (discount * 10) / 100;
// // let finalPrice = 0;
// let credit = 3;
// let mustPayEveryMonth;

let inputNumberofBooks;
let bookPrice;
let totalPrice;
let discount;
let tax;
// let finalPrice = 0;
let credit = 12;
let mustPayEveryMonth;
let pricePerMonth = [];
let overallPrice = [];

if (wantToBuy) {
  bookPurchase(prompt(`Enter the number of books you want to buy :`));
  function bookPurchase(inputNumberofBooks) {
    bookPrice = 1000000 * inputNumberofBooks;
    discount = (bookPrice * 50) / 100;
    tax = (discount * 10) / 100;
    console.log(inputNumberofBooks);
    totalPrice = bookPrice - discount + tax;
    console.log(totalPrice);
    mustPayEveryMonth = totalPrice / credit;
    console.log(mustPayEveryMonth);
    for (let i = 1; i <= credit; i++) {
      overallPrice[i - 1] = { Month: `${i} month`, price: `${mustPayEveryMonth}` };
    }
    for (let j = 0; j < overallPrice.length; j++) {
      pricePerMonth.push(overallPrice);
    }
  }
} else {
  console.log('Thank you for wasting my time!!!');
}

console.log(overallPrice);
