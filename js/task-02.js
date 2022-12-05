const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRefs = document.querySelector('#ingredients');

const makeIngredientsItems = ingredients => {
  const ingredientItemRefs = document.createElement('li');
  ingredientItemRefs.textContent = ingredients;
  ingredientItemRefs.classList.add('item');

  return ingredientItemRefs;
};

const elements = ingredients.map(makeIngredientsItems);

ingredientsRefs.append(...elements);
