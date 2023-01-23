const btn = document.querySelector('.allnews');
const itemlenght = document.querySelectorAll('.blog-item').length;

let items = 20;

btn.addEventListener('click', function() { 
items += 13;
const array = Array.from(document.querySelector('.blog').children);
const visItem = array.slice(0, items);

visItem.forEach(el => el.classList.add('is_visible'));

if (visItem.length === itemlenght) {
    btn.classList.add('ni_vis');
}
});