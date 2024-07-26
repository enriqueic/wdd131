// Get all section elements
const sections = document.querySelectorAll('section.content > h2');

// Create a favorites array to store the favorite sections
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// Parse the favorites array to remove URL and get only the name

console.log('Favorites array:', favorites);

// Loop through each section and add a "Add to favorites" button
sections.forEach((section) => {
  const addButton = document.createElement('button');
  addButton.textContent = 'Add to favorites';
  section.parentNode.insertBefore(addButton, section.nextSibling);

  // Check if the section is already in favorites
  const sectionUrl = window.location.href + '#' + section.id;
  if (favorites.includes(sectionUrl)) {
    addButton.textContent = 'Remove from favorites';
  }

  // Add event listener to the button
  addButton.addEventListener('click', () => {
    if (addButton.textContent === 'Add to favorites') {
      // Add to favorites
      favorites.push(sectionUrl);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      addButton.textContent = 'Remove from favorites';
    } else {
      // Remove from favorites
      const index = favorites.indexOf(sectionUrl);
      if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      addButton.textContent = 'Add to favorites';
    }
  });
});