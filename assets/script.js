let wantToBuy = confirm('Want to buy in my store?');
let stocks = 10;
const bookPrice = 100000;
let inputNumberofBooks;
let totalPrice;
const discount = (bookPrice * 50) / 100;
const tax = (discount * 10) / 100;
let finalPrice = 0;

if (wantToBuy) {
  bookPurchase(prompt(`Enter the number of books you want to buy : (stock : ${stocks})`));
  function bookPurchase(inputNumberofBooks) {
    totalPrice = bookPrice - discount + tax;
    console.log(`There are ${stocks} books in stock`);
    for (let i = 0; inputNumberofBooks > i; i++) {
      if (i > stocks - 1) {
        console.log('Out of stock');
        break;
      } else {
        console.log(`You bought ${i + 1} books`);
        console.log(`You have to pay ${(finalPrice += totalPrice)}`);
      }
      console.log(`${stocks - (i + 1)} books left`);
    }
  }
} else {
  console.log('Thank you for wasting my time!!!');
}
