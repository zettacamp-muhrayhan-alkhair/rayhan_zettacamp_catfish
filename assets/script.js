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

// function bookPurchase(inputBooks) {
//   while (wantToBuy == true) {
//     inputBooks = prompt(`Enter the number of books you want to buy : (Total Stocks = ${stockBooks})`);
//     if (stockBooks > 0 && stockBooks > inputBooks) {
//       totalPrice = priceBook * inputBooks;
//       totalPrice = totalPrice - totalPrice * disc;
//       totalPrice = totalPrice + totalPrice * tax;
//       stockBooks = stockBooks - inputBooks;
//       console.log(`You buy ${inputBooks} books`);
//       console.log(totalPrice);
//     } else if (stockBooks < inputBooks && stockBooks > 0) {
//       prompt(`Stock of books is less than your number input, ${stockBooks} books left `);
//       totalPrice = priceBook * inputBooks;
//       totalPrice = totalPrice - totalPrice * disc;
//       totalPrice = totalPrice + totalPrice * tax;
//       stockBooks = stockBooks - inputBooks;
//       console.log(`You buy ${inputBooks} books`);
//       console.log(totalPrice);
//     } else {
//       console.log('Out of stock');
//     }
//   }
// }

function bookPurchase() {
  for (inputBooks = prompt(`Enter the number of books you want to buy : (Total Stocks = ${stockBooks})`); stockBooks > 0; stockBooks - inputBooks) {
    if (stockBooks > 0 && stockBooks > inputBooks) {
      totalPrice = priceBook * inputBooks;
      totalPrice = totalPrice - totalPrice * disc;
      totalPrice = totalPrice + totalPrice * tax;
      stockBooks = stockBooks - inputBooks;
      console.log(`You buy ${inputBooks} books`);
      console.log(totalPrice);
    } else if (stockBooks < inputBooks && stockBooks > 0) {
      prompt(`Stock of books is less than your number input, ${stockBooks} books left `);
      totalPrice = priceBook * inputBooks;
      totalPrice = totalPrice - totalPrice * disc;
      totalPrice = totalPrice + totalPrice * tax;
      stockBooks = stockBooks - inputBooks;
      console.log(`You buy ${inputBooks} books`);
      console.log(totalPrice);
    } else {
      console.log('Out of stock');
    }
  }
}

if (wantToBuy == true) {
  bookPurchase();
} else {
  console.log('Thank you for wasting my time!!!');
}

// function bookPurchase(inputBooks) {
//   while (wantToBuy == true) {
//     inputBooks = prompt(`Enter the number of books you want to buy : (Total Stocks = ${stockBooks})`);
//     if (stockBooks > 0 && stockBooks > inputBooks) {
//       totalPrice = priceBook * inputBooks;
//       totalPrice = totalPrice - totalPrice * disc;
//       totalPrice = totalPrice + totalPrice * tax;
//       stockBooks = stockBooks - inputBooks;
//       console.log(`You buy ${inputBooks} books`);
//       console.log(totalPrice);
//     } else if (stockBooks < inputBooks && stockBooks > 0) {
//       prompt(`Stock of books is less than your number input, ${stockBooks} books left `);
//       totalPrice = priceBook * inputBooks;
//       totalPrice = totalPrice - totalPrice * disc;
//       totalPrice = totalPrice + totalPrice * tax;
//       stockBooks = stockBooks - inputBooks;
//       console.log(`You buy ${inputBooks} books`);
//       console.log(totalPrice);
//     } else {
//       console.log('Out of stock');
//     }
//   }
// }

// while (wantToBuy) {
//   bookPurchase(prompt(`Enter the number of books you want to buy : (Total Stocks = ${stockBooks})`));
// }

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
