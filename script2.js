let inputBooks;
let stocks = 10;
const disc = 50 / 100;
let priceBook = 10000;
let totalPrice;
const tax = 10 / 100;

// function bookPurchase() {
//   let wantToBuy = confirm('Want to buy in my store?');
//   inputBooks = prompt(`Enter the number of books you want to buy : (stocks : ${stocks})`);
//   for (inputBooks; inputBooks <= stocks; inputBooks) {
//     totalPrice = priceBook * inputBooks;
//     totalPrice = totalPrice - totalPrice * disc;
//     totalPrice = totalPrice + totalPrice * tax;
//     console.log(`You buy ${inputBooks} Books`);
//     console.log(`Total price : ${totalPrice}`);
//     stocks = stocks - inputBooks;
//     inputBooks = prompt(`Enter the number of books you want to buy : (stocks : ${stocks})`);
//   }
// }

// function bookPurchase(inputBooks) {
// totalPrice = priceBook * inputBooks;
// totalPrice = totalPrice - totalPrice * disc;
// totalPrice = totalPrice + totalPrice * tax;
// console.log(`You buy ${inputBooks} Books`);
// console.log(`Total price : ${totalPrice}`);
// }
// if (wantToBuy == true) {
//   bookPurchase(prompt('Enter the number of books you want to buy :'));
// } else {
//   console.log('Thank you for wasting my time!!!');
// }

function bookPurchase() {
  inputBooks = prompt(`Enter the number of books you want to buy : (stocks : ${stocks})`);
  for (let i = 1; inputBooks <= stocks; i++) {
    if (inputBooks <= stocks) {
      totalPrice = priceBook * inputBooks;
      totalPrice = totalPrice - totalPrice * disc;
      totalPrice = totalPrice + totalPrice * tax;
      console.log(`You buy ${inputBooks} Books`);
      console.log(`Total price : ${totalPrice}`);
      stocks = stocks - inputBooks;
    } else if (inputBooks > stocks) {
      console.log(`You can not buy more than stocks`);
      console.log(`${stocks} books left`);
    } else if (stocks === 0) {
      console.log('stock is running out');
      break;
    } else {
      console.log('invalid input');
    }
    inputBooks = prompt(`Enter the number of books you want to buy : (stocks : ${stocks})`);
  }
}

bookPurchase();
