// Custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    
    if (cursor) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX - 20 + 'px';
            cursor.style.top = cursorY - 20 + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .product-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .stat, .fade-in').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showSuccessMessage('Thank you for subscribing!');
            e.target.reset();
        });
    }

    // Load featured products on homepage
    const featuredProductsContainer = document.getElementById('featured-products');
    if (featuredProductsContainer) {
        loadFeaturedProducts();
    }
});

// Load featured products
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featured = getFeaturedProducts();
    
    container.innerHTML = featured.map((product, index) => `
        <div class="product-card" style="display: block;">
            <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit; display: block;">
                <span class="product-number">[${String(index + 1).padStart(3, '0')}]</span>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
            </a>
            <button class="btn btn-small add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id}); return false;">Add to Cart</button>
        </div>
    `).join('');
}

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

// Smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
