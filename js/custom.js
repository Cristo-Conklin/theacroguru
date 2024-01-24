document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Function to update active link highlighting
    function updateActiveLink() {
        const currentUrl = new URL(window.location.href);
        const currentPath = currentUrl.pathname;

        navLinks.forEach(link => {
            const linkUrl = new URL(link.href);
            let isActive = false;

            // Exclude external links
            if (linkUrl.hostname === currentUrl.hostname) {
                // Check for anchor links or regular internal links
                if ((linkUrl.hash && currentUrl.hash === linkUrl.hash) || (!linkUrl.hash && linkUrl.pathname === currentPath)) {
                    isActive = true;
                }
            }

            // Update the 'active' class on the link
            link.classList.toggle('active', isActive);
        });
    }

    // Initially update active link
    updateActiveLink();

    // Add click event listener to nav links to update active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(updateActiveLink, 150); // delay to allow URL to update
        });
    });
});

function toggleContent() {
    var content = document.getElementById("additionalContent");
    var leerMasBtn = document.getElementById("leerMasBtn");
    var ocultarBtn = document.getElementById("ocultarBtn");

    if (content.style.display === "none") {
        content.style.display = "block";
        leerMasBtn.style.display = "none";
        ocultarBtn.style.display = "inline-block";
    } else {
        content.style.display = "none";
        leerMasBtn.style.display = "inline-block";
        ocultarBtn.style.display = "none";
    }
}


        
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.navbar-toggler');
    var menu = document.querySelector('#navbarNavAltMarkup');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

        

