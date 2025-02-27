// Element Selecting
const book = document.querySelector('#book-name');
const author = document.querySelector('#author-name');
const year = document.querySelector('#published-year');
const submit = document.querySelector('.btn');
const list = document.querySelector('.book-list');

// Event Listener
submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission

    if (book.value === '' || author.value === '' || year.value === '') {
        if (book.value === '') {
            book.classList.add('warning');
            book.setAttribute('placeholder', 'Please fill the book name');
            setTimeout(() => {
                book.classList.remove('warning');
                book.setAttribute('placeholder', '');
            }, 1024);
        }

        if (author.value === '') {
            author.classList.add('warning');
            author.setAttribute('placeholder', 'Please fill the author name');
            setTimeout(() => {
                author.classList.remove('warning');
                author.setAttribute('placeholder', '');
            }, 1024);
        }

        if (year.value === '') {
            year.classList.add('warning');
            year.setAttribute('placeholder', 'Please fill the published year');
            setTimeout(() => {
                year.classList.remove('warning');
                year.setAttribute('placeholder', '');
            }, 1024);
        }
        return; // Stop function execution if any field is empty
    }

    // Create new row
    const newRow = document.createElement('tr');

    // Create columns and append values
    const newBookCol = document.createElement('td');
    newBookCol.innerText = book.value;
    newRow.appendChild(newBookCol);

    const newAuthorCol = document.createElement('td');
    newAuthorCol.innerText = author.value;
    newRow.appendChild(newAuthorCol);

    const newYearCol = document.createElement('td');
    newYearCol.innerText = year.value;
    newRow.appendChild(newYearCol);

    // Append row to list
    list.appendChild(newRow);

    // Clear input fields
    book.value = '';
    author.value = '';
    year.value = '';
});
