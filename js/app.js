document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);




})

const handleFormSubmit = function(event) {
  event.preventDefault();

  const newTitle = document.createElement('p');
  newTitle.textContent = `Title: ${event.target.title.value}`;
  newTitle.classList.add('p1');

  const newAuthor = document.createElement('p');
  newAuthor.textContent = `Author: ${event.target.author.value}`;
  newAuthor.classList.add('p2');

  const newCategory = document.createElement('p');
  newCategory.textContent = `Category: ${event.target.category.value}`;
  newCategory.classList.add('p3');

  const newDivItem = document.createElement('div');
  newDivItem.appendChild(newTitle);
  newDivItem.appendChild(newAuthor);
  newDivItem.appendChild(newCategory);

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newDivItem);

  event.target.reset();
}
