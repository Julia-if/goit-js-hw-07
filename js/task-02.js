const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');

const addingredient = (ingredients) =>
    ingredients.map(element =>
    {
        const itemRef = document.createElement('li')
        itemRef.textContent = element
        return itemRef
    }
    )
        
ingredientsRef.append(...addingredient(ingredients));
console.log(addingredient);