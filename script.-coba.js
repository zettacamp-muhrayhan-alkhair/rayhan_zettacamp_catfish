const myKeyboard = {
  brand: 'Keychron',
  model: 'K2',
  color: 'white',
};

const updateMyKeyboard = {
  type: 'Mechanical keyboard',
  year: 2021,
  color: 'black',
};

const myUpdatedKeyboard = { ...myKeyboard, ...updateMyKeyboard };

console.log(myUpdatedKeyboard);

myNewKeyboard(myUpdatedKeyboard);

function myNewKeyboard({ type, color, brand, model }) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  document.getElementById('myNewKeyboard').innerHTML = message;
}
