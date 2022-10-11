let wantToBuy = confirm('Want to buy in my store?');
let inputBooks;
let stocks = 10;
const disc = 50 / 100;
let priceBook = 10000;
let totalPrice;
const tax = 10 / 100;
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
  while (wantToBuy == true) {
    inputBooks = prompt(`Enter the number of books you want to buy : (stocks : ${stocks})`);
    if (stocks > 0 && inputBooks < stocks) {
      totalPrice = priceBook * inputBooks;
      totalPrice = totalPrice - totalPrice * disc;
      totalPrice = totalPrice + totalPrice * tax;
      stocks = stocks - inputBooks;
      console.log(`You buy ${inputBooks} Books`);
      console.log(`Total price : ${totalPrice}`);
    } else if (inputBooks == stocks) {
      totalPrice = priceBook * inputBooks;
      totalPrice = totalPrice - totalPrice * disc;
      totalPrice = totalPrice + totalPrice * tax;
      stocks = stocks - inputBooks;
      console.log(`You buy ${inputBooks} Books`);
      console.log(`Total price : ${totalPrice}`);
    } else if (stocks > 0 && inputBooks > stocks) {
      console.log(`You can not buy more than stocks`);
      console.log(`${stocks} books left`);
    } else {
      console.log('stock is running out');
    }
    wantToBuy = confirm('Want to buy in my store again?');
  }
}

bookPurchase();
