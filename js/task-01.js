const categoriesRefs = document.querySelector('#categories');
const itemsRefs = categoriesRefs.children;
console.log('Number of categories: ', itemsRefs.length);

const itemsRefsArray = Array.from(itemsRefs);

itemsRefsArray.forEach(item => {
  const categoryRefs = item.firstElementChild.textContent;
  console.log('Category: ', categoryRefs);
  const elementsRefs = item.lastElementChild.children.length;
  console.log('Elements: ', elementsRefs);
});
