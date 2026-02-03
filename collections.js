// Collections Page - Filtering Functionality

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const collectionTiles = document.querySelectorAll('.collection-tile');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get filter value
            const filterValue = button.getAttribute('data-filter');

            // Filter collections
            collectionTiles.forEach(tile => {
                const category = tile.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    tile.style.display = 'block';
                    setTimeout(() => {
                        tile.style.opacity = '1';
                        tile.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    tile.style.opacity = '0';
                    tile.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        tile.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});
