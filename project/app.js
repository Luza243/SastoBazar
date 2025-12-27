// EXTENDED PRODUCT DATA WITH BETTER IMAGES
const products = [
    // Groceries (8 products)
    { id: 1, name: "Fresh Apples", price: 120, category: "groceries", image: "https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_1280.jpg", rating: 4.5 },
    { id: 2, name: "Basmati Rice 5kg", price: 450, category: "groceries", image: "https://cdn.pixabay.com/photo/2018/05/01/13/04/rice-3364370_1280.jpg", rating: 4.3 },
    { id: 3, name: "Fresh Milk 1L", price: 60, category: "groceries", image: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_1280.jpg", rating: 4.7 },
    { id: 4, name: "Olive Oil 1L", price: 450, category: "groceries", image: "https://cdn.pixabay.com/photo/2015/09/09/19/23/olive-oil-933266_1280.jpg", rating: 4.6 },
    { id: 5, name: "Honey 500g", price: 320, category: "groceries", image: "https://cdn.pixabay.com/photo/2017/04/15/11/52/honey-2232242_1280.jpg", rating: 4.4 },
    { id: 6, name: "Fresh Eggs (12 pcs)", price: 90, category: "groceries", image: "https://cdn.pixabay.com/photo/2015/06/25/17/45/eggs-821709_1280.jpg", rating: 4.8 },
    { id: 7, name: "Whole Wheat Bread", price: 45, category: "groceries", image: "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286_1280.jpg", rating: 4.2 },
    { id: 8, name: "Green Tea 100g", price: 180, category: "groceries", image: "https://cdn.pixabay.com/photo/2017/03/01/05/12/tea-cup-2107599_1280.jpg", rating: 4.5 },

    // Clothes (10 products)
    { id: 9, name: "Men's T-Shirt", price: 299, category: "clothes", image: "https://cdn.pixabay.com/photo/2016/11/29/05/07/college-1867619_1280.jpg", rating: 4.4 },
    { id: 10, name: "Women's Jeans", price: 799, category: "clothes", image: "https://cdn.pixabay.com/photo/2017/08/24/12/38/jeans-2675464_1280.jpg", rating: 4.2 },
    { id: 11, name: "Winter Jacket", price: 1299, category: "clothes", image: "https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_1280.jpg", rating: 4.8 },
    { id: 12, name: "Men's Formal Shirt", price: 699, category: "clothes", image: "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg", rating: 4.3 },
    { id: 13, name: "Women's Dress", price: 999, category: "clothes", image: "https://cdn.pixabay.com/photo/2016/06/29/04/17/clothing-1486134_1280.jpg", rating: 4.7 },
    { id: 14, name: "Kids T-Shirt Set", price: 499, category: "clothes", image: "https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg", rating: 4.5 },
    { id: 15, name: "Sports Shoes", price: 1599, category: "clothes", image: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg", rating: 4.6 },
    { id: 16, name: "Casual Slippers", price: 299, category: "clothes", image: "https://cdn.pixabay.com/photo/2017/05/12/08/29/flip-flops-2305611_1280.jpg", rating: 4.2 },
    { id: 17, name: "Woolen Sweater", price: 899, category: "clothes", image: "https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976336_1280.jpg", rating: 4.4 },
    { id: 18, name: "Summer Shorts", price: 399, category: "clothes", image: "https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg", rating: 4.3 },

    // Electronics (10 products)
    { id: 19, name: "Wireless Earbuds", price: 1299, category: "electronics", image: "https://cdn.pixabay.com/photo/2021/01/20/16/58/wireless-headphones-5934658_1280.jpg", rating: 4.5 },
    { id: 20, name: "Smart Watch", price: 2499, category: "electronics", image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg", rating: 4.3 },
    { id: 21, name: "Power Bank 20000mAh", price: 899, category: "electronics", image: "https://cdn.pixabay.com/photo/2017/10/23/21/53/powerbank-2883360_1280.jpg", rating: 4.4 },
    { id: 22, name: "Bluetooth Speaker", price: 1499, category: "electronics", image: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg", rating: 4.6 },
    { id: 23, name: "USB-C Cable", price: 199, category: "electronics", image: "https://cdn.pixabay.com/photo/2019/09/08/16/26/usb-c-4460892_1280.jpg", rating: 4.2 },
    { id: 24, name: "Wireless Mouse", price: 599, category: "electronics", image: "https://cdn.pixabay.com/photo/2013/07/12/17/47/mouse-152249_1280.png", rating: 4.5 },
    { id: 25, name: "LED Desk Lamp", price: 499, category: "electronics", image: "https://cdn.pixabay.com/photo/2019/10/24/18/14/desk-lamp-4575041_1280.jpg", rating: 4.3 },
    { id: 26, name: "Portable Fan", price: 399, category: "electronics", image: "https://cdn.pixabay.com/photo/2015/08/14/19/18/fan-889928_1280.jpg", rating: 4.4 },
    { id: 27, name: "Mobile Phone Case", price: 299, category: "electronics", image: "https://cdn.pixabay.com/photo/2016/11/29/12/54/smartphone-1869514_1280.jpg", rating: 4.1 },
    { id: 28, name: "Screen Protector", price: 149, category: "electronics", image: "https://cdn.pixabay.com/photo/2016/11/29/13/05/smartphone-1869612_1280.jpg", rating: 4.3 },

    // Stationery (8 products)
    { id: 29, name: "Premium Notebook", price: 199, category: "stationery", image: "https://cdn.pixabay.com/photo/2015/09/05/21/33/notebook-925958_1280.jpg", rating: 4.7 },
    { id: 30, name: "Pen Set (6 pcs)", price: 149, category: "stationery", image: "https://cdn.pixabay.com/photo/2016/03/31/19/45/ballpoint-1294834_1280.png", rating: 4.2 },
    { id: 31, name: "Sticky Notes", price: 99, category: "stationery", image: "https://cdn.pixabay.com/photo/2016/03/23/08/34/notebook-1274056_1280.jpg", rating: 4.5 },
    { id: 32, name: "Geometry Box", price: 199, category: "stationery", image: "https://cdn.pixabay.com/photo/2017/08/05/12/17/geometry-2583401_1280.jpg", rating: 4.3 },
    { id: 33, name: "Art Supplies Kit", price: 499, category: "stationery", image: "https://cdn.pixabay.com/photo/2016/02/19/11/23/art-supplies-1209832_1280.jpg", rating: 4.6 },
    { id: 34, name: "File Folder Set", price: 299, category: "stationery", image: "https://cdn.pixabay.com/photo/2016/03/31/21/57/folder-1296306_1280.png", rating: 4.2 },
    { id: 35, name: "Desk Organizer", price: 399, category: "stationery", image: "https://cdn.pixabay.com/photo/2015/09/05/00/11/office-923457_1280.jpg", rating: 4.4 },
    { id: 36, name: "Whiteboard Marker", price: 129, category: "stationery", image: "https://cdn.pixabay.com/photo/2016/11/29/09/09/board-1868721_1280.jpg", rating: 4.3 },

    // Home Appliances (8 products)
    { id: 37, name: "Electric Kettle", price: 899, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2016/09/18/18/20/kettle-1678399_1280.jpg", rating: 4.5 },
    { id: 38, name: "Air Fryer", price: 2499, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2021/01/30/12/06/kitchen-5963501_1280.jpg", rating: 4.7 },
    { id: 39, name: "Rice Cooker", price: 1499, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2017/09/17/23/21/rice-cooker-2759607_1280.jpg", rating: 4.4 },
    { id: 40, name: "Water Purifier", price: 3999, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2015/09/09/19/52/water-932177_1280.jpg", rating: 4.6 },
    { id: 41, name: "Vacuum Cleaner", price: 2999, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2015/05/15/14/55/vacuum-cleaner-768801_1280.jpg", rating: 4.3 },
    { id: 42, name: "Iron Press", price: 699, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2016/11/21/16/17/iron-1846494_1280.jpg", rating: 4.2 },
    { id: 43, name: "Electric Heater", price: 1299, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2016/10/13/13/28/heater-1737433_1280.jpg", rating: 4.5 },
    { id: 44, name: "Coffee Maker", price: 1899, category: "home-appliances", image: "https://cdn.pixabay.com/photo/2014/08/05/11/27/coffee-410311_1280.jpg", rating: 4.8 },

    // Sports (8 products)
    { id: 45, name: "Yoga Mat", price: 499, category: "sports", image: "https://cdn.pixabay.com/photo/2016/11/19/12/45/mat-1839506_1280.jpg", rating: 4.6 },
    { id: 46, name: "Dumbbell Set", price: 1299, category: "sports", image: "https://cdn.pixabay.com/photo/2017/08/07/14/02/dumbbells-2603528_1280.jpg", rating: 4.4 },
    { id: 47, name: "Sports Bag", price: 699, category: "sports", image: "https://cdn.pixabay.com/photo/2017/08/24/21/41/shoes-2677453_1280.jpg", rating: 4.3 },
    { id: 48, name: "Football", price: 399, category: "sports", image: "https://cdn.pixabay.com/photo/2016/04/01/09/29/football-1298771_1280.png", rating: 4.7 },
    { id: 49, name: "Badminton Racket", price: 599, category: "sports", image: "https://cdn.pixabay.com/photo/2015/03/07/13/55/badminton-663497_1280.jpg", rating: 4.5 },
    { id: 50, name: "Tennis Ball (3 pcs)", price: 149, category: "sports", image: "https://cdn.pixabay.com/photo/2017/01/31/15/37/ball-2026522_1280.png", rating: 4.2 },
    { id: 51, name: "Cycling Helmet", price: 899, category: "sports", image: "https://cdn.pixabay.com/photo/2019/05/20/21/45/helmet-4218263_1280.jpg", rating: 4.8 },
    { id: 52, name: "Jump Rope", price: 199, category: "sports", image: "https://cdn.pixabay.com/photo/2016/08/10/23/59/jump-rope-1584655_1280.jpg", rating: 4.3 }
];

// CATEGORIES DATA
const categories = [
    { id: 1, name: "Groceries", icon: "fas fa-shopping-basket", color: "#4CAF50", count: 45 },
    { id: 2, name: "Clothes", icon: "fas fa-tshirt", color: "#FF9800", count: 32 },
    { id: 3, name: "Electronics", icon: "fas fa-laptop", color: "#2196F3", count: 28 },
    { id: 4, name: "Stationery", icon: "fas fa-pen", color: "#9C27B0", count: 19 },
    { id: 5, name: "Home Appliances", icon: "fas fa-home", color: "#FF5722", count: 22 },
    { id: 6, name: "Sports", icon: "fas fa-dumbbell", color: "#3F51B5", count: 18 }
];

// GLOBAL VARIABLES
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let currentSearch = '';
let currentPage = 1;
let itemsPerPage = 8;
let totalPages = 1;
let selectedPaymentMethod = 'esewa';
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// DOM ELEMENTS
const preloader = document.getElementById('preloader');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartOverlay = document.getElementById('cart-overlay');
const pages = document.querySelectorAll('.page');
const shopNowBtn = document.getElementById('shop-now-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const productsGrid = document.getElementById('products-grid');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const passwordToggle = document.getElementById('password-toggle');
const signupPasswordToggle = document.getElementById('signup-password-toggle');
const loginPassword = document.getElementById('login-password');
const signupPassword = document.getElementById('signup-password');
const loginSuccess = document.getElementById('login-success');
const signupSuccess = document.getElementById('signup-success');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const paginationContainer = document.getElementById('pagination');
const resultsPerPageSelect = document.getElementById('results-per-page-select');
const resultsCount = document.getElementById('results-count');
const orderSuccessModal = document.getElementById('order-success-modal');
const continueShoppingBtn = document.getElementById('continue-shopping-btn');
const paymentMethods = document.querySelectorAll('.payment-method');
const checkoutForm = document.getElementById('checkout-form');
const userProfile = document.getElementById('user-profile');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');
const loginNavLink = document.getElementById('login-nav-link');
const loginCard = document.getElementById('login-card');
const signupCard = document.getElementById('signup-card');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const esewaModal = document.getElementById('esewa-modal');
const confirmEsewaPayment = document.getElementById('confirm-esewa-payment');
const cancelEsewa = document.getElementById('cancel-esewa');

// INITIALIZE APPLICATION
document.addEventListener('DOMContentLoaded', () => {
    // Remove preloader after 1.5 seconds
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    // Show login page first
    showPage('login');

    // Check if user is logged in
    if (currentUser) {
        updateUserProfile();
    }

    // Initialize pages
    initializePages();
    loadProducts();
    updateCartCount();
    setupEventListeners();

    // Check for saved theme
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// INITIALIZE PAGES
function initializePages() {
    // Add click events to all page links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.getAttribute('data-page');
            
            // Check if user needs to be logged in for certain pages
            if ((pageName === 'cart' || pageName === 'checkout') && !currentUser) {
                showToast('Please login first', 'error');
                showPage('login');
                return;
            }
            
            showPage(pageName);
            
            // Close mobile menu if open
            navLinksContainer.classList.remove('active');
        });
    });

    // Home page category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            showPage('products');
            
            // Activate the corresponding filter
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            
            currentFilter = category;
            currentPage = 1;
            loadProducts();
        });
    });
}

// SETUP EVENT LISTENERS
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Cart icon click
    cartIcon.addEventListener('click', openCart);

    // Cart overlay click
    cartOverlay.addEventListener('click', closeCart);

    // Shop now button
    shopNowBtn.addEventListener('click', () => {
        if (!currentUser) {
            showToast('Please login first', 'error');
            showPage('login');
            return;
        }
        showPage('products');
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        currentPage = 1;
        loadProducts();
    });

    searchBtn.addEventListener('click', () => {
        currentPage = 1;
        loadProducts();
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            currentPage = 1;
            loadProducts();
        });
    });

    // Login form
    loginForm.addEventListener('submit', handleLogin);

    // Signup form
    signupForm.addEventListener('submit', handleSignup);

    // Password toggle
    passwordToggle.addEventListener('click', () => {
        const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPassword.setAttribute('type', type);
        passwordToggle.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Signup password toggle
    signupPasswordToggle.addEventListener('click', () => {
        const type = signupPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        signupPassword.setAttribute('type', type);
        signupPasswordToggle.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Checkout button in cart modal
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        if (!currentUser) {
            showToast('Please login first', 'error');
            showPage('login');
            return;
        }
        closeCart();
        showPage('checkout');
        updateCheckoutSummary();
    });

    // Items per page selector
    resultsPerPageSelect?.addEventListener('change', (e) => {
        itemsPerPage = parseInt(e.target.value);
        currentPage = 1;
        loadProducts();
    });

    // Continue shopping button
    continueShoppingBtn?.addEventListener('click', () => {
        orderSuccessModal.classList.remove('active');
        showPage('home');
    });

    // Payment method selection
    paymentMethods?.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            method.classList.add('selected');
            selectedPaymentMethod = method.getAttribute('data-method');
        });
    });

    // Checkout form submission
    checkoutForm?.addEventListener('submit', handleCheckout);

    // Add ripple effect to all buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // User profile dropdown
    userProfile?.addEventListener('click', (e) => {
        e.stopPropagation();
        userProfile.classList.toggle('active');
    });

    // Logout button
    logoutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Close user dropdown when clicking outside
    document.addEventListener('click', () => {
        userProfile?.classList.remove('active');
    });

    // Switch between login and signup
    showSignup?.addEventListener('click', (e) => {
        e.preventDefault();
        loginCard.style.display = 'none';
        signupCard.style.display = 'block';
    });

    showLogin?.addEventListener('click', (e) => {
        e.preventDefault();
        signupCard.style.display = 'none';
        loginCard.style.display = 'block';
    });

    // eSewa payment
    confirmEsewaPayment?.addEventListener('click', handleEsewaPayment);
    cancelEsewa?.addEventListener('click', () => {
        esewaModal.classList.remove('active');
    });
}

// SHOW SPECIFIC PAGE
function showPage(pageName) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const pageToShow = document.getElementById(`${pageName}-page`);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }

    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Load specific page content
    switch(pageName) {
        case 'products':
            loadProducts();
            break;
        case 'cart':
            loadCartPage();
            break;
        case 'categories':
            loadCategories();
            break;
        case 'checkout':
            updateCheckoutSummary();
            break;
    }
}

// LOAD PRODUCTS WITH PAGINATION
function loadProducts() {
    if (!productsGrid) return;
    
    let filteredProducts = [...products];

    // Apply search filter
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearch) ||
            product.category.toLowerCase().includes(currentSearch)
        );
    }

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentFilter
        );
    }

    // Calculate pagination
    const totalItems = filteredProducts.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    // Adjust current page if out of bounds
    if (currentPage > totalPages) {
        currentPage = Math.max(1, totalPages);
    }

    // Get products for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);

    // Clear grid
    productsGrid.innerHTML = '';

    // Add products to grid
    pageProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `Showing ${startIndex + 1}-${Math.min(endIndex, totalItems)} of ${totalItems} products`;
    }

    // Update pagination
    updatePagination(totalItems);

    // Animate cards
    animateOnScroll();
}

// UPDATE PAGINATION CONTROLS
function updatePagination(totalItems) {
    if (!paginationContainer || totalItems <= itemsPerPage) {
        if (paginationContainer) {
            paginationContainer.style.display = 'none';
        }
        return;
    }

    paginationContainer.style.display = 'flex';
    paginationContainer.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadProducts();
            window.scrollTo({ top: productsGrid.offsetTop - 100, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Page numbers
    const pageNumbers = document.createElement('div');
    pageNumbers.className = 'page-numbers';

    // Show first page always
    if (totalPages > 1) {
        const firstPage = createPageNumber(1);
        pageNumbers.appendChild(firstPage);
    }

    // Show ellipsis if needed
    if (currentPage > 3) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.style.padding = '0 0.5rem';
        pageNumbers.appendChild(ellipsis);
    }

    // Show current page and neighbors
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = createPageNumber(i);
        pageNumbers.appendChild(pageNumber);
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.style.padding = '0 0.5rem';
        pageNumbers.appendChild(ellipsis);
    }

    // Show last page always
    if (totalPages > 1) {
        const lastPage = createPageNumber(totalPages);
        pageNumbers.appendChild(lastPage);
    }

    paginationContainer.appendChild(pageNumbers);

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadProducts();
            window.scrollTo({ top: productsGrid.offsetTop - 100, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// CREATE PAGE NUMBER ELEMENT
function createPageNumber(page) {
    const pageNumber = document.createElement('div');
    pageNumber.className = `page-number ${page === currentPage ? 'active' : ''}`;
    pageNumber.textContent = page;
    pageNumber.addEventListener('click', () => {
        if (page !== currentPage) {
            currentPage = page;
            loadProducts();
            window.scrollTo({ top: productsGrid.offsetTop - 100, behavior: 'smooth' });
        }
    });
    return pageNumber;
}

// CREATE PRODUCT CARD
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    // Check if product is in cart
    const inCart = cart.find(item => item.id === product.id);
    const buttonText = inCart ? 'Added to Cart' : 'Add to Cart';
    const buttonClass = inCart ? 'btn-add-to-cart added' : 'btn-add-to-cart';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" title="${product.name}">
            <div class="product-badge">${getRandomDiscount()}% OFF</div>
        </div>
        <div class="product-info">
            <span style="color: var(--gray); font-size: 0.9rem;">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
            <h3 style="margin: 0.5rem 0; font-size: 1.2rem;">${product.name}</h3>
            <div style="color: var(--accent); margin-bottom: 0.5rem;">
                ${getStarRating(product.rating)}
            </div>
            <div class="product-price">
                <span class="price-tag">₹${product.price}</span>
                <span style="text-decoration: line-through; color: var(--gray); font-size: 0.9rem;">
                    ₹${Math.round(product.price * 1.2)}
                </span>
            </div>
            <button class="${buttonClass}" data-id="${product.id}">
                <i class="fas fa-cart-plus"></i> ${buttonText}
            </button>
        </div>
    `;

    // Add to cart button event
    const addButton = card.querySelector('.btn-add-to-cart');
    addButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!currentUser) {
            showToast('Please login first to add items to cart', 'error');
            showPage('login');
            return;
        }
        addToCart(product.id);
    });

    // Add click event to whole card
    card.addEventListener('click', () => {
        showProductDetails(product);
    });

    return card;
}

// LOAD CATEGORIES
function loadCategories() {
    const categoriesGrid = document.querySelector('#categories-page .categories-grid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = '';

    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.style.borderTop = `4px solid ${category.color}`;
        categoryCard.innerHTML = `
            <div class="category-icon" style="color: ${category.color};">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
            <p>${category.count} Products</p>
            <button class="btn" style="margin-top: 1rem; background: ${category.color}; color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 25px; cursor: pointer;">
                Browse
            </button>
        `;

        categoryCard.addEventListener('click', () => {
            showPage('products');
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category.name.toLowerCase()) {
                    btn.classList.add('active');
                }
            });
            currentFilter = category.name.toLowerCase();
            currentPage = 1;
            loadProducts();
        });

        categoriesGrid.appendChild(categoryCard);
    });
}

// SHOW PRODUCT DETAILS MODAL
function showProductDetails(product) {
    // Create modal for product details
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 2rem;
    `;

    modal.innerHTML = `
        <div style="background: var(--light); padding: 2rem; border-radius: 20px; max-width: 500px; width: 100%; position: relative;">
            <button style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--gray);">&times;</button>
            <div style="height: 300px; background: #f8f9fa; border-radius: 10px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;">
                <img src="${product.image}" alt="${product.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; padding: 10px;">
            </div>
            <h2 style="margin-bottom: 0.5rem;">${product.name}</h2>
            <p style="color: var(--gray); margin-bottom: 1rem;">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <div>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">₹${product.price}</div>
                    <div style="color: var(--gray); text-decoration: line-through;">₹${Math.round(product.price * 1.2)}</div>
                </div>
                <div style="color: var(--accent);">
                    ${getStarRating(product.rating)}
                </div>
            </div>
            <p style="margin-bottom: 2rem; line-height: 1.6;">High-quality product with premium features. Perfect for daily use.</p>
            <button class="btn btn-primary" style="width: 100%;" data-id="${product.id}" id="modal-add-cart">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Add to cart from modal
    modal.querySelector('button[data-id]').addEventListener('click', () => {
        if (!currentUser) {
            showToast('Please login first to add items to cart', 'error');
            modal.remove();
            showPage('login');
            return;
        }
        addToCart(product.id);
        modal.remove();
    });

    // Close modal
    modal.querySelector('button:not([data-id])').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ADD TO CART FUNCTION
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Update button state
    const button = document.querySelector(`.btn-add-to-cart[data-id="${productId}"]`);
    if (button) {
        button.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
        button.classList.add('added');
        setTimeout(() => {
            button.classList.remove('added');
        }, 500);
    }

    // Show toast notification
    showToast(`${product.name} added to cart!`);

    // Update cart modal if open
    if (cartModal.classList.contains('active')) {
        updateCartModal();
    }
}

// REMOVE FROM CART FUNCTION
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    if (cartModal.classList.contains('active')) {
        updateCartModal();
    }

    if (document.getElementById('cart-page').classList.contains('active')) {
        loadCartPage();
    }

    showToast('Item removed from cart', 'warning');
}

// UPDATE CART MODAL
function updateCartModal() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    if (!container) return;

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gray);">Your cart is empty</p>';
        subtotalEl.textContent = '₹0';
        totalEl.textContent = '₹0';
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: contain; border-radius: 10px; margin-right: 1rem; background: #f8f9fa; padding: 5px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem; font-size: 1rem;">${item.name}</h4>
                <div style="color: var(--primary); font-weight: bold;">₹${item.price}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        container.appendChild(itemEl);
    });

    const shipping = 50;
    const total = subtotal + shipping;

    subtotalEl.textContent = `₹${subtotal}`;
    totalEl.textContent = `₹${total}`;

    // Add event listeners to quantity buttons
    container.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(btn.getAttribute('data-id'));
            const action = btn.getAttribute('data-action');
            const item = cart.find(item => item.id === productId);

            if (item) {
                if (action === 'increase') {
                    item.quantity += 1;
                } else if (action === 'decrease' && item.quantity > 1) {
                    item.quantity -= 1;
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartModal();
                updateCartCount();
            }
        });
    });

    // Add event listeners to remove buttons
    container.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(btn.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// LOAD CART PAGE
function loadCartPage() {
    const container = document.getElementById('cart-page-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <i class="fas fa-shopping-cart" style="font-size: 4rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <h3>Your cart is empty</h3>
                <p style="color: var(--gray); margin-bottom: 2rem;">Add some products to your cart</p>
                <button class="btn btn-primary" id="cart-shop-now">
                    <i class="fas fa-bolt"></i> Start Shopping
                </button>
            </div>
        `;

        document.getElementById('cart-shop-now')?.addEventListener('click', () => {
            showPage('products');
        });
        return;
    }

    let html = `
        <div style="max-width: 800px; margin: 0 auto;">
            <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
    `;

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        
        html += `
            <div style="display: flex; align-items: center; padding: 1rem; background: white; border-radius: 15px; box-shadow: var(--shadow);">
                <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: contain; border-radius: 10px; margin-right: 1rem; background: #f8f9fa; padding: 5px;">
                <div style="flex: 1;">
                    <h4 style="margin-bottom: 0.5rem;">${item.name}</h4>
                    <div style="color: var(--primary); font-weight: bold; font-size: 1.2rem;">₹${item.price}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; background: var(--light); padding: 0.5rem 1rem; border-radius: 10px;">
                        <button class="quantity-btn" data-id="${item.id}" data-action="decrease" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--primary);">-</button>
                        <span style="font-weight: bold;">${item.quantity}</span>
                        <button class="quantity-btn" data-id="${item.id}" data-action="increase" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--primary);">+</button>
                    </div>
                    <button class="btn" data-id="${item.id}" style="background: var(--danger); color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    const shipping = 50;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    html += `
            </div>
            <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: var(--shadow);">
                <h3 style="margin-bottom: 1.5rem;">Order Summary</h3>
                <div style="display: grid; gap: 1rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Subtotal</span>
                        <span>₹${subtotal}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Shipping</span>
                        <span>₹${shipping}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Tax (5%)</span>
                        <span>₹${tax.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold; padding-top: 1rem; border-top: 2px solid #eee;">
                        <span>Total</span>
                        <span style="color: var(--primary);">₹${total.toFixed(2)}</span>
                    </div>
                </div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" id="cart-checkout-btn">
                    <i class="fas fa-lock"></i> Proceed to Checkout
                </button>
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Add event listeners to quantity buttons
    container.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(btn.getAttribute('data-id'));
            const action = btn.getAttribute('data-action');
            const item = cart.find(item => item.id === productId);

            if (item) {
                if (action === 'increase') {
                    item.quantity += 1;
                } else if (action === 'decrease' && item.quantity > 1) {
                    item.quantity -= 1;
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                loadCartPage();
                updateCartCount();
            }
        });
    });

    // Add event listeners to remove buttons
    container.querySelectorAll('.btn[data-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(btn.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });

    // Checkout button
    document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
        showPage('checkout');
        updateCheckoutSummary();
    });
}

// UPDATE CHECKOUT SUMMARY
function updateCheckoutSummary() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    document.getElementById('checkout-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('checkout-tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `₹${total.toFixed(2)}`;

    const container = document.getElementById('checkout-summary-items');
    if (container) {
        container.innerHTML = '';
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'summary-item';
            itemEl.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${(item.price * item.quantity)}</span>
            `;
            container.appendChild(itemEl);
        });
    }
}

// UPDATE CART COUNT
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Add animation
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// UPDATE USER PROFILE
function updateUserProfile() {
    if (currentUser) {
        userProfile.style.display = 'flex';
        userName.textContent = currentUser.name.split(' ')[0]; // Show first name only
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
        loginNavLink.style.display = 'none';
    } else {
        userProfile.style.display = 'none';
        loginNavLink.style.display = 'block';
    }
}

// TOGGLE THEME
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// OPEN CART MODAL
function openCart() {
    updateCartModal();
    cartModal.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// CLOSE CART MODAL
function closeCart() {
    cartModal.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// HANDLE LOGIN
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simple validation
    if (!email || !password) {
        showToast('Please fill in all fields', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Login successful
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        loginForm.style.display = 'none';
        loginSuccess.style.display = 'block';
        
        // Update user profile
        updateUserProfile();
        
        // Show success message
        showToast('Login successful! Welcome to Sasto Bazar', 'success');
        
        // Redirect to home after 2 seconds
        setTimeout(() => {
            showPage('home');
            loginForm.style.display = 'block';
            loginSuccess.style.display = 'none';
            document.getElementById('login-email').value = '';
            document.getElementById('login-password').value = '';
        }, 2000);
    } else {
        showToast('Invalid email or password', 'error');
    }
}

// HANDLE SIGNUP
function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showToast('Please fill in all fields', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        showToast('Email already registered', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    signupForm.style.display = 'none';
    signupSuccess.style.display = 'block';
    showToast('Account created successfully!', 'success');

    // Switch to login after 2 seconds
    setTimeout(() => {
        signupSuccess.style.display = 'none';
        signupCard.style.display = 'none';
        loginCard.style.display = 'block';
        signupForm.reset();
    }, 2000);
}

// HANDLE LOGOUT
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserProfile();
    showToast('Logged out successfully', 'success');
    showPage('login');
}

// HANDLE CHECKOUT
function handleCheckout(e) {
    e.preventDefault();
    
    if (!currentUser) {
        showToast('Please login first', 'error');
        showPage('login');
        return;
    }

    // Validate form
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('checkout-email').value;
    const phone = document.getElementById('phone-number').value;
    const address = document.getElementById('shipping-address').value;

    if (!fullName || !email || !phone || !address) {
        showToast('Please fill in all shipping information', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }

    if (selectedPaymentMethod === 'cod') {
        // Handle Cash on Delivery
        completeOrder();
    } else if (selectedPaymentMethod === 'esewa') {
        // Show eSewa modal
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 50;
        const tax = subtotal * 0.05;
        const total = subtotal + shipping + tax;
        const esewaTotal = total + 10; // Add service charge

        document.getElementById('esewa-amount').textContent = `₹${total.toFixed(2)}`;
        document.getElementById('esewa-total').textContent = `₹${esewaTotal.toFixed(2)}`;
        
        esewaModal.classList.add('active');
    }
}

// HANDLE ESEWA PAYMENT
function handleEsewaPayment() {
    // In a real implementation, this would redirect to eSewa payment gateway
    // For demo purposes, we'll simulate the payment
    
    // Generate random transaction ID
    const transactionId = 'ESEWA' + Date.now() + Math.floor(Math.random() * 1000);
    
    // Simulate payment processing
    setTimeout(() => {
        esewaModal.classList.remove('active');
        completeOrder(transactionId);
    }, 1500);
}

// COMPLETE ORDER
function completeOrder(transactionId = null) {
    // Generate order ID
    const orderId = 'SB-' + Date.now() + Math.floor(Math.random() * 1000);
    
    // Show order success modal
    document.getElementById('order-id').textContent = orderId;
    orderSuccessModal.classList.add('active');
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    const message = transactionId ? 
        `Order placed successfully! Transaction ID: ${transactionId}` : 
        'Order placed successfully! Cash on Delivery selected.';
    showToast(message, 'success');
    
    // Reset checkout form
    if (checkoutForm) {
        checkoutForm.reset();
    }
}

// GET STAR RATING HTML
function getStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// GET RANDOM DISCOUNT
function getRandomDiscount() {
    return Math.floor(Math.random() * 30) + 10; // 10-40% discount
}

// SHOW TOAST NOTIFICATION
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    
    // Set color based on type
    if (type === 'error') {
        toast.style.background = 'var(--danger)';
    } else if (type === 'warning') {
        toast.style.background = 'var(--warning)';
    } else if (type === 'info') {
        toast.style.background = 'var(--primary)';
    } else {
        toast.style.background = 'var(--success)';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// VALIDATE EMAIL
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// CREATE RIPPLE EFFECT
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("btn-ripple");

    const ripple = button.getElementsByClassName("btn-ripple")[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// ANIMATE ON SCROLL
function animateOnScroll() {
    const cards = document.querySelectorAll('.product-card, .category-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        observer.observe(card);
    });
}

// Initialize animations on load
window.addEventListener('load', animateOnScroll);