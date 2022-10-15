const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsRefs = document.querySelector('#ingredients');

const makeIngredientsItems = ingredients => {
  const ingredientItemRefs = document.createElement('li');
  ingredientItemRefs.textContent = ingredients;
  ingredientItemRefs.classList.add('item');

  return ingredientItemRefs;
};

const elements = ingredients.map(makeIngredientsItems);

ingredientsRefs.append(...elements);



