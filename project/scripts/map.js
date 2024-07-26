// Get the favorites array from local storage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

favorites = favorites.map((favorite) => {
    return favorite.split('#').pop();
});

console.log('Favorites array:', favorites);

// Get the favorites list span element
const favoritesSpan = document.getElementById('favorites-span');

if (!favoritesSpan) {
  console.error('Error: favorites-span element not found');
}

// Get the toggle favorites checkbox
const toggleFavorites = document.querySelector('input[name="See favorites"]');

if (!toggleFavorites) {
  console.error('Error: toggle favorites checkbox not found');
}

toggleFavorites.addEventListener('change', () => {
  if (toggleFavorites.checked) {
    console.log('Toggle favorites checkbox checked');
    let favoritesText = 'Favorites: ';
    favorites.forEach((favorite) => {
      favoritesText += favorite.charAt(0) + favorite.slice(1) + ', ';
    });
    favoritesSpan.textContent = favoritesText;
  } else {
    console.log('Toggle favorites checkbox unchecked');
    favoritesSpan.textContent = '';
  }
  
  if (toggleFavorites.checked) {
    console.log('Toggle favorites checkbox checked');
    // Hide or show map pins based on whether they are favorites or not
    const pins = document.querySelectorAll('.pin');
    pins.forEach((pin) => {
      const pinClass = pin.className.split(' ')[1];
      if (favorites.includes(pinClass)) {
        pin.style.visibility = 'visible';
      } else {
        pin.style.visibility = 'hidden';
      }
    });
  } else {
    console.log('Toggle favorites checkbox unchecked');
    // Show all map pins
    const pins = document.querySelectorAll('.pin');
    pins.forEach((pin) => {
      pin.style.visibility = 'visible';
    });
  }
});