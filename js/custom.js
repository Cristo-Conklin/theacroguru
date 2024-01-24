document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function updateActiveLink() {
        const currentUrl = window.location.href;
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            const linkUrl = new URL(link.href);

            if (linkUrl.href === currentUrl || 
                (linkUrl.pathname === currentPath && currentUrl.endsWith(linkUrl.hash))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Update active link on page load
    updateActiveLink();

    // Update active link on hash change
    window.addEventListener('hashchange', updateActiveLink);

    // Update active link on history change
    window.addEventListener('popstate', updateActiveLink);
});


        
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.navbar-toggler');
    var menu = document.querySelector('#navbarNavAltMarkup');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

        

