const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');



const rezet = (item) => {
  const element = document.createElement('li');
  element.textContent = item;
  return element;
}

const createRezet = ingredients.map(rezet);

ingredientsList.append(...createRezet);
console.log(ingredientsList);