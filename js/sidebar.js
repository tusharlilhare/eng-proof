// Sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    document.addEventListener('click', function(e) {
        if (e.target.closest('.menu-toggle')) {
            document.querySelector('.sidebar').classList.toggle('active');
            document.querySelector('.main-content').classList.toggle('shifted');
        }
    });

    // Close sidebar when clicking on a link (on mobile)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.sidebar-menu a')) {
            if (window.innerWidth < 992) {
                document.querySelector('.sidebar').classList.remove('active');
                document.querySelector('.main-content').classList.remove('shifted');
            }
        }
    });
});