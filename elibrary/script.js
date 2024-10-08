// Get the search bar input and all the books
const searchBar = document.getElementById('searchBar');
const books = document.querySelectorAll('.book');

// Add an event listener to the search bar for 'input' event
searchBar.addEventListener('input', function (e) {
  const searchTerm = e.target.value.toLowerCase(); // Get the user's input and convert it to lowercase

  // Loop through all the books
  books.forEach(function (book) {
    const title = book.querySelector('h3').textContent.toLowerCase(); // Get the book title and convert it to lowercase
    
    // If the title includes the search term (even a single letter), display the book, else hide it
    if (title.includes(searchTerm)) {
      book.style.display = 'block'; // Show the book
    } else {
      book.style.display = 'none'; // Hide the book
    }
  });
});
