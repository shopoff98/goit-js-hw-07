const categoriesEl = document.querySelector(`#categories`);
const categoriesChildrenEl = categoriesEl.children.length;
const message = `В списке ${categoriesChildrenEl} категории.`;
console.log(message);

const children = categoriesEl.children;
const childrenEl = [...children];

const getInfo = options => {
    return options.map(option => {
        const titleEl = option.querySelector(`.item h2`);
        const quantityEl = option.querySelector(`.item ul`);
        const title = titleEl.textContent;
        const quantity = quantityEl.children.length;
        const message = `Категория: ${title}; Количество элементов: ${quantity}`;
        return message
    })
}
console.log(getInfo(childrenEl));