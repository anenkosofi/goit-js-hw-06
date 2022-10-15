// 1. Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.

const categoriesRefs = document.querySelector('#categories');
const itemsRefs = categoriesRefs.children;
console.log('Number of categories: ', itemsRefs.length);

// 2. Для кожного элемента li.item у спику ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість
// елементів в категорії(усіх < li >, вкладених в нього).

const itemsRefsArray = Array.from(itemsRefs);

itemsRefsArray.forEach(item => {
    const categoryRefs = item.firstElementChild.textContent;
    console.log('Category: ', categoryRefs);
    const elementsRefs = item.lastElementChild.children.length;
    console.log('Elements: ', elementsRefs);
})