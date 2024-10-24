// Function to toggle the stylesheet
function toggleStyleSheet() {
    const stylesheet = document.getElementById('page_style');
    if (stylesheet.href.includes('style.css')) {
        stylesheet.href = 'style-alternate.css';
    } else {
        stylesheet.href = 'style.css';
    }
}

// Ensure the toggle state is saved across page reloads
document.addEventListener('DOMContentLoaded', () => {
    const stylesheet = document.getElementById('page_style');
    if (localStorage.getItem('style') === 'alternate') {
        stylesheet.href = 'style-alternate.css';
        document.getElementById('toggleStyle').checked = true;
    } else {
        stylesheet.href = 'style.css';
        document.getElementById('toggleStyle').checked = false;
    }
});

// Save the toggle state to localStorage
document.getElementById('toggleStyle').addEventListener('change', () => {
    localStorage.setItem('style', document.getElementById('toggleStyle').checked ? 'alternate' : 'default');
});
