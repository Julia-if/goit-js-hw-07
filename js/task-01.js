const navCategoriesRef = document.querySelector('#categories');

console.log(`В списке ${navCategoriesRef.children.length} категории.`)
const items = document.querySelectorAll('.item')

const itemsRef = Array.from(items)
itemsRef.forEach(item => {
    console.log(`Категория:${item.firstElementChild.textContent} 
    Количество элементов: ${item.firstElementChild.nextElementSibling.children.length}`);
});


