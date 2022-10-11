// let inputBooks = prompt('Enter the number of books you want to buy :');
let inputBooks;
let disc = 50 / 100;
let priceBook = 10000;
let totalPrice;
let tax = 10 / 100;
function bookPurchase(inputBooks) {
  totalPrice = priceBook * inputBooks;
  totalPrice = totalPrice - totalPrice * disc;
  totalPrice = totalPrice + totalPrice * tax;
  console.log(totalPrice);
}

bookPurchase(prompt('Enter the number of books you want to buy :'));
