document.addEventListener('DOMContentLoaded', function () {
    const blogContainer = document.getElementById('blog-posts');
    const backButton = document.getElementById('back-button');
    const menuContainer = document.querySelector('.circle-menu-box'); // Select the circle menu container
    const textMenu = document.getElementById('text-menu-items');

    function fetchBlogPosts() {
        fetch('./blogPosts.json')
            .then(response => response.json())
            .then(data => {
                loadBlogList(data); // Load the main blog menu
            })
            .catch(error => console.error('Error loading blog posts:', error));
    }

    function loadBlogList(items) {
        const menuContainer = document.querySelector('.circle-menu-box');
        const avatar = document.querySelector('.avatar'); // Reference to the avatar
        const avatarParent = avatar.parentNode; // Reference to the avatar's parent

        // Temporarily detach the avatar from the DOM
        avatarParent.removeChild(avatar);

        // Clear the menu container
        menuContainer.innerHTML = '';

        blogContainer.innerHTML = '';

        // Populate text-based menu
        textMenu.innerHTML = ''; // Clear existing items

        // Add new menu items
        items.forEach(item => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            menuItem.className = 'menu-item';
            menuItem.title = item.title;

            // Label
            // const label = document.createElement('span');
            // label.className = 'menu-label';
            // label.textContent = item.title;
            // menuItem.appendChild(label);

            // bottom text menu
            const textItem = document.createElement('li');
            const textLink = document.createElement('a');
            textLink.textContent = item.title;

            if (item.external) {
                textLink.href = item.url; // External link
                textLink.target = "_blank"; // Open in a new tab
            } else {
                textLink.href = '#';
                textLink.dataset.url = item.url; // Use a data attribute for internal links
                textLink.addEventListener('click', function(event) {
                    event.preventDefault();
                    if (item.subItems) {
                        loadBlogList(item.subItems); // Load submenu items
                    } else {
                        loadBlogContent(item.url); // Load blog content
                    }
                    backButton.style.display = 'block'; // Show the back button for submenus
                });
            }

            textItem.appendChild(textLink);
            textMenu.appendChild(textItem);


            //icons
            if (item.faIcon) {
                const icon = document.createElement('span');
                icon.className = `fa ${item.faIcon}`;
                menuItem.appendChild(icon);
            }

            menuItem.addEventListener('click', function (event) {
                event.preventDefault();
                if (item.subItems) {
                    loadBlogList(item.subItems); // Load submenu items
                    backButton.style.display = 'block';
                } else {
                    loadBlogContent(item.url); // Load blog content

                }
            });

            menuContainer.appendChild(menuItem);
        });

        // Reattach the avatar to the menu container
        menuContainer.appendChild(avatar);

        // Call positionItems to reposition all menu items
        positionItems();
    }

    function loadBlogContent(url) {
        fetch(`/cms/${url}`)
            .then(response => response.text())
            .then(content => {
                blogContainer.innerHTML = content;
                backButton.style.display = 'block'; // Show the back button
                blogContainer.scrollIntoView({ behavior: 'smooth' }); // Scroll the blogContainer into view
            })
            .catch(error => console.error('Error loading post:', error));
    }

    // Back button functionality
    backButton.onclick = () => {
        fetchBlogPosts(); // Reload the main blog menu
        backButton.style.display = 'none'; // Hide the back button
    };

    // Initial fetch and load blog posts
    fetchBlogPosts();
});
