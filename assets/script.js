let wantToBuy = confirm('Want to buy in my store?');
let inputBooks;
const disc = 50 / 100;
let priceBook = 10000;
let totalPrice;
const tax = 10 / 100;
function bookPurchase(inputBooks) {
  totalPrice = priceBook * inputBooks;
  totalPrice = totalPrice - totalPrice * disc;
  totalPrice = totalPrice + totalPrice * tax;
  console.log(totalPrice);
}
if (wantToBuy == true) {
  bookPurchase(prompt('Enter the number of books you want to buy :'));
} else {
  console.log('Thank you for wasting my time!!!');
}
