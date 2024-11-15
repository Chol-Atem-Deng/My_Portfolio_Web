// Togle Script

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const toggleText = document.getElementById('toggle-text');

// Check local storage for the theme preference
const currentTheme = localStorage.getItem('theme') || 'light-theme';
body.classList.add(currentTheme);

// Set the initial icon and text based on the theme
if (currentTheme === 'dark-theme') {
    toggleButton.innerHTML = '<i class="fa-solid fa-toggle-off"></i> <span id="toggle-text">Toggle Theme</span>'; // Change to toggle-off icon
    toggleText.style.color = "white"; // Change text color for dark theme
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        toggleButton.innerHTML = '<i class="fa-solid fa-toggle-off"></i> <span id="toggle-text">Toggle Theme</span>'; // Change to toggle-off icon
        toggleText.style.color = "white"; // Change text color for dark theme
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        toggleButton.innerHTML = '<i class="fa-solid fa-toggle-on"></i> <span id="toggle-text">Toggle Theme</span>'; // Change to toggle-on icon
        toggleText.style.color = "black"; // Change text color for light theme
    }
});