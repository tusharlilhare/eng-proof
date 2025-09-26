// Load components
document.addEventListener('DOMContentLoaded', function() {
    // Load all components
    loadComponent('sidebar-container', 'components/sidebar.html');
    loadComponent('header-container', 'components/header.html');
    loadComponent('hero-container', 'components/hero.html');
    loadComponent('available-projects-container', 'components/available-projects.html');
    loadComponent('complete-projects-container', 'components/complete-projects.html');
    loadComponent('progress-projects-container', 'components/progress-projects.html');
    loadComponent('footer-container', 'components/footer.html');
});

// Function to load components
function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}