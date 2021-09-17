const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector(`#ingredients`);

const makeListIngredients = options => {
 return options.map(option => {
    const liEl = document.createElement(`li`);
    liEl.textContent = option;
    return liEl

  }
  )
}


const ingredientsResult = makeListIngredients(ingredients);

ingredientsEl.append(...ingredientsResult);
console.log(ingredientsEl);