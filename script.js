const searchBox = document.querySelector('.search-box input');
const movies = document.querySelectorAll('.movies .image-box');

searchBox.addEventListener('keyup', function(event) {
  const searchText = event.target.value.toLowerCase();
  
  movies.forEach(movie => {
    const movieName = movie.getAttribute('data-name').toLowerCase();
    
    if (movieName.includes(searchText)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
});

