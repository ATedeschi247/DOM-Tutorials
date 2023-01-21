document.addEventListener('DOMContentLoaded', function() {

  const list = document.querySelector('ul');

  list.addEventListener('click', function(e) {
    if (e.target.tagName == 'BUTTON') {
      const body = e.target.parentElement.parentElement;
      body.removeChild(e.target.parentElement);
    }
  });

  const addForm = document.forms['add-book'];

  addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    // create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('button');

    // add content
    bookName.textContent = value;
    deleteBtn.textContent = "Delete";

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide books
  const text = document.querySelector('#wrapper');
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
      text.style.display = "none";
    } else {
      text.style.display = 'block';
    }
  });

  // filter books
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "list-item";
      } else {
        book.style.display = "none";
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', function(e) {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel) {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });
});