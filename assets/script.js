let wantToBuy = confirm('Want to buy in my store?');
let inputBooks;
let disc = 50 / 100;
let stockBooks = 10;
let priceBook = 10000;
let totalPrice;
let tax = 10 / 100;
// function bookPurchase(inputBooks) {
//   totalPrice = priceBook * inputBooks;
//   totalPrice = totalPrice - totalPrice * disc;
//   totalPrice = totalPrice + totalPrice * tax;
//   console.log(`You buy ${inputBooks} books`);
//   console.log(totalPrice);
// }

function bookPurchase(inputBooks) {
  if (stockBooks > 0 && stockBooks > inputBooks) {
    totalPrice = priceBook * inputBooks;
    totalPrice = totalPrice - totalPrice * disc;
    totalPrice = totalPrice + totalPrice * tax;

    console.log(`You buy ${inputBooks} books`);
    console.log(totalPrice);
  }

  totalPrice = priceBook * inputBooks;
  totalPrice = totalPrice - totalPrice * disc;
  totalPrice = totalPrice + totalPrice * tax;
  stockBooks = stockBooks - inputBooks;
  console.log(`You buy ${inputBooks} books`);
  console.log(totalPrice);
}

// if (wantToBuy == true) {
//   bookPurchase(prompt('Enter the number of books you want to buy :'));
// } else {
//   console.log('Thank you for wasting my time!!!');
// }

// if (wantToBuy == true) {
//     for
//   bookPurchase(prompt('Enter the number of books you want to buy :'));
// } else {
//   console.log('Thank you for wasting my time!!!');
// }

// while (wantToBuy) {
//   bookPurchase(prompt(`Enter the number of books you want to buy : (Total Stocks = ${stockBooks})`));
//   stockBooks -= inputBooks;
//   wantToBuy = confirm('Want to buy in my store?');
// }

// if (wantToBuy) {
//   while (stockBooks > 0) {
//     bookPurchase(prompt(`Enter the number of books you want to buy : (Total Stocks = ${stockBooks})`));
//     stockBooks -= inputBooks;
//   }
//   wantToBuy = confirm('Want to buy in my store again?');
// } else {
//   console.log('Thank you for wasting my time!!!');
// }
