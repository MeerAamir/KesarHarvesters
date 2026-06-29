/* 
   KesarHarvesters - Global E-Commerce & Dynamic Content Engine
   Colors: Purple / Gold / Burgundy
*/

// --- DYNAMIC PRODUCT CATALOG DATABASE ---
const PRODUCTS = {
    'kashmiri-1g': {
        id: 'kashmiri-1g',
        slug: 'kashmiri-organic-saffron-1g',
        name: 'Kashmiri Premium Saffron (1g)',
        price: 489,
        weight: '1 Gram',
        origin: 'Kashmiri',
        category: 'Premium Mogra',
        img: 'images/kashmiri-organic-saffron-premium-jar.webp',
        specs: [
            'Deep crimson filaments, hand-harvested',
            'Pleistocene Karewa Plateau Clay Cultivated',
            '100% Pure, Hand-Harvested Saffron Filaments',
            'Moisture Level: &lt; 12% (Traditional Sun Dried)'
        ],
        storage: 'Store in a cool, dark, dry place. Keep sealed inside our airtight glass jar to prevent moisture absorption. Do not expose to direct light or refrigeration.',
        usage: 'Bloom 3 to 4 filaments in 2 tablespoons of warm water or milk for 15 minutes before cooking. This activates the active color compounds, releasing twice the coloring and aroma compared to direct addition.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-1g'],
        related: ['kashmiri-2g', 'kashmiri-5g', 'kashmiri-10g']
    },
    'kashmiri-2g': {
        id: 'kashmiri-2g',
        slug: 'kashmiri-organic-saffron-2g',
        name: 'Kashmiri Premium Saffron (2g)',
        price: 959,
        weight: '2 Grams',
        origin: 'Kashmiri',
        category: 'Premium Mogra',
        img: 'images/kashmiri-organic-saffron-2g-jar.webp',
        specs: [
            'Deep crimson filaments, hand-harvested',
            'Pleistocene Karewa Plateau Clay Cultivated',
            '100% Pure, Hand-Harvested Saffron Filaments',
            'Moisture Level: &lt; 12% (Traditional Sun Dried)'
        ],
        storage: 'Store in a cool, dark, dry place. Keep sealed inside our airtight glass jar to prevent moisture absorption. Do not expose to direct light or refrigeration.',
        usage: 'Bloom 3 to 4 filaments in 2 tablespoons of warm water or milk for 15 minutes before cooking. This activates the active color compounds, releasing twice the coloring and aroma compared to direct addition.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-2g'],
        related: ['kashmiri-1g', 'kashmiri-5g', 'kashmiri-10g']
    },
    'kashmiri-5g': {
        id: 'kashmiri-5g',
        slug: 'kashmiri-organic-saffron-5g',
        name: 'Kashmiri Premium Saffron (5g)',
        price: 2299,
        weight: '5 Grams',
        origin: 'Kashmiri',
        category: 'Premium Mogra',
        img: 'images/kashmiri-organic-saffron-5g-jar.webp',
        specs: [
            'Deep crimson filaments, hand-harvested',
            'Pleistocene Karewa Plateau Clay Cultivated',
            '100% Pure, Hand-Harvested Saffron Filaments',
            'Moisture Level: &lt; 12% (Traditional Sun Dried)'
        ],
        storage: 'Store in a cool, dark, dry place. Keep sealed inside our airtight glass jar to prevent moisture absorption. Do not expose to direct light or refrigeration.',
        usage: 'Bloom 4 to 5 filaments in 2 tablespoons of warm water or milk for 15 minutes before cooking. This activates the active color compounds, releasing twice the coloring and aroma compared to direct addition.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-5g'],
        related: ['kashmiri-1g', 'kashmiri-2g', 'kashmiri-10g']
    },
    'kashmiri-10g': {
        id: 'kashmiri-10g',
        slug: 'kashmiri-organic-saffron-10g',
        name: 'Kashmiri Premium Saffron (10g)',
        price: 4499,
        weight: '10 Grams',
        origin: 'Kashmiri',
        category: 'Premium Mogra',
        img: 'images/kashmiri-organic-saffron-10g-jar.webp',
        specs: [
            'Deep crimson filaments, hand-harvested',
            'Pleistocene Karewa Plateau Clay Cultivated',
            '100% Pure, Hand-Harvested Saffron Filaments',
            'Moisture Level: &lt; 12% (Traditional Sun Dried)'
        ],
        storage: 'Store in a cool, dark, dry place. Keep sealed inside our airtight glass jar to prevent moisture absorption. Do not expose to direct light or refrigeration.',
        usage: 'Bloom 4 to 5 filaments in 2 tablespoons of warm water or milk for 15 minutes before cooking. This activates the active color compounds, releasing twice the coloring and aroma compared to direct addition.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-10g'],
        related: ['kashmiri-2g', 'kashmiri-5g', 'kashmiri-20g']
    },
    'kashmiri-20g': {
        id: 'kashmiri-20g',
        slug: 'kashmiri-organic-saffron-20g',
        name: 'Kashmiri Premium Saffron (20g)',
        price: 8699,
        weight: '20 Grams',
        origin: 'Kashmiri',
        category: 'Premium Mogra',
        img: 'images/kashmiri-organic-saffron-20g-jar.webp',
        specs: [
            'Deep crimson filaments, hand-harvested',
            'Pleistocene Karewa Plateau Clay Cultivated',
            '100% Pure, Hand-Harvested Saffron Filaments',
            'Moisture Level: &lt; 12% (Traditional Sun Dried)'
        ],
        storage: 'Store in a cool, dark, dry place. Keep sealed inside our airtight glass jar to prevent moisture absorption. Do not expose to direct light or refrigeration.',
        usage: 'Bloom 4 to 5 filaments in 2 tablespoons of warm water or milk for 15 minutes before cooking. This activates the active color compounds, releasing twice the coloring and aroma compared to direct addition.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-20g'],
        related: ['kashmiri-5g', 'kashmiri-10g', 'kashmiri-50g']
    },
    'kashmiri-50g': {
        id: 'kashmiri-50g',
        slug: 'kashmiri-organic-saffron-50g',
        name: 'Kashmiri Premium Saffron (50g)',
        price: 19999,
        weight: '50 Grams',
        origin: 'Kashmiri',
        category: 'Premium Mogra',
        img: 'images/kashmiri-organic-saffron-50g-jar.webp',
        specs: [
            'Deep crimson filaments, hand-harvested',
            'Pleistocene Karewa Plateau Clay Cultivated',
            '100% Pure, Hand-Harvested Saffron Filaments',
            'Moisture Level: &lt; 12% (Traditional Sun Dried)'
        ],
        storage: 'Store in a cool, dark, dry place. Keep sealed inside our airtight glass jar to prevent moisture absorption. Do not expose to direct light or refrigeration.',
        usage: 'Bloom 4 to 5 filaments in 2 tablespoons of warm water or milk for 15 minutes before cooking. This activates the active color compounds, releasing twice the coloring and aroma compared to direct addition.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-50g'],
        related: ['kashmiri-10g', 'kashmiri-20g', 'luxury-combo']
    },
    
    // Irani Premium Saffron
    'irani-1g': {
        id: 'irani-1g',
        slug: 'irani-sargol-saffron-1g',
        name: 'Irani Premium Saffron (1g)',
        price: 389,
        weight: '1 Gram',
        origin: 'Irani',
        category: 'Premium Sargol',
        img: 'images/irani-sargol-saffron-premium-jar.webp',
        specs: [
            'Deep red Sargol filaments, carefully selected',
            'Sun-Dried Premium Sargol Filaments',
            '100% Raw, Imported from Khorasan Farm Fields',
            'Mild Bitter Taste & Warm Herbaceous Aroma'
        ],
        storage: 'Store in a cool, dark place. Keep airtight to prevent flavor degradation. Avoid direct light exposure.',
        usage: 'Bloom 4 to 5 threads in a warm liquid before adding to rice, stews, or baking. Enhances culinary recipes with deep yellow hues.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['kashmiri-1g'],
        related: ['irani-2g', 'irani-5g', 'irani-10g']
    },
    'irani-2g': {
        id: 'irani-2g',
        slug: 'irani-sargol-saffron-2g',
        name: 'Irani Premium Saffron (2g)',
        price: 759,
        weight: '2 Grams',
        origin: 'Irani',
        category: 'Premium Sargol',
        img: 'images/irani-sargol-saffron-2g-jar.webp',
        specs: [
            'Deep red Sargol filaments, carefully selected',
            'Sun-Dried Premium Sargol Filaments',
            '100% Raw, Imported from Khorasan Farm Fields',
            'Mild Bitter Taste & Warm Herbaceous Aroma'
        ],
        storage: 'Store in a cool, dark place. Keep airtight to prevent flavor degradation. Avoid direct light exposure.',
        usage: 'Bloom 4 to 5 threads in a warm liquid before adding to rice, stews, or baking. Enhances culinary recipes with deep yellow hues.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['kashmiri-2g'],
        related: ['irani-1g', 'irani-5g', 'irani-10g']
    },
    'irani-5g': {
        id: 'irani-5g',
        slug: 'irani-sargol-saffron-5g',
        name: 'Irani Premium Saffron (5g)',
        price: 1799,
        weight: '5 Grams',
        origin: 'Irani',
        category: 'Premium Sargol',
        img: 'images/irani-sargol-saffron-5g-jar.webp',
        specs: [
            'Deep red Sargol filaments, carefully selected',
            'Sun-Dried Premium Sargol Filaments',
            '100% Raw, Imported from Khorasan Farm Fields',
            'Mild Bitter Taste & Warm Herbaceous Aroma'
        ],
        storage: 'Store in a cool, dark place. Keep airtight to prevent flavor degradation. Avoid direct light exposure.',
        usage: 'Bloom 4 to 5 threads in a warm liquid before adding to rice, stews, or baking. Enhances culinary recipes with deep yellow hues.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['kashmiri-5g'],
        related: ['irani-1g', 'irani-2g', 'irani-10g']
    },
    'irani-10g': {
        id: 'irani-10g',
        slug: 'irani-sargol-saffron-10g',
        name: 'Irani Premium Saffron (10g)',
        price: 3499,
        weight: '10 Grams',
        origin: 'Irani',
        category: 'Premium Sargol',
        img: 'images/irani-sargol-saffron-10g-jar.webp',
        specs: [
            'Deep red Sargol filaments, carefully selected',
            'Sun-Dried Premium Sargol Filaments',
            '100% Raw, Imported from Khorasan Farm Fields',
            'Mild Bitter Taste & Warm Herbaceous Aroma'
        ],
        storage: 'Store in a cool, dark place. Keep airtight to prevent flavor degradation. Avoid direct light exposure.',
        usage: 'Bloom 4 to 5 threads in a warm liquid before adding to rice, stews, or baking. Enhances culinary recipes with deep yellow hues.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['kashmiri-10g'],
        related: ['irani-2g', 'irani-5g', 'irani-20g']
    },
    'irani-20g': {
        id: 'irani-20g',
        slug: 'irani-sargol-saffron-20g',
        name: 'Irani Premium Saffron (20g)',
        price: 6899,
        weight: '20 Grams',
        origin: 'Irani',
        category: 'Premium Sargol',
        img: 'images/irani-sargol-saffron-20g-jar.webp',
        specs: [
            'Deep red Sargol filaments, carefully selected',
            'Sun-Dried Premium Sargol Filaments',
            '100% Raw, Imported from Khorasan Farm Fields',
            'Mild Bitter Taste & Warm Herbaceous Aroma'
        ],
        storage: 'Store in a cool, dark place. Keep airtight to prevent flavor degradation. Avoid direct light exposure.',
        usage: 'Bloom 4 to 5 threads in a warm liquid before adding to rice, stews, or baking. Enhances culinary recipes with deep yellow hues.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['irani-20g'],
        related: ['irani-5g', 'irani-10g', 'irani-50g']
    },
    'irani-50g': {
        id: 'irani-50g',
        slug: 'irani-sargol-saffron-50g',
        name: 'Irani Premium Saffron (50g)',
        price: 15999,
        weight: '50 Grams',
        origin: 'Irani',
        category: 'Premium Sargol',
        img: 'images/irani-sargol-saffron-50g-jar.webp',
        specs: [
            'Deep red Sargol filaments, carefully selected',
            'Sun-Dried Premium Sargol Filaments',
            '100% Raw, Imported from Khorasan Farm Fields',
            'Mild Bitter Taste & Warm Herbaceous Aroma'
        ],
        storage: 'Store in a cool, dark place. Keep airtight to prevent flavor degradation. Avoid direct light exposure.',
        usage: 'Bloom 4 to 5 threads in a warm liquid before adding to rice, stews, or baking. Enhances culinary recipes with deep yellow hues.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['kashmiri-50g'],
        related: ['irani-10g', 'irani-20g', 'luxury-combo']
    },
    
    // Luxury Gift Combo Pack
    'luxury-combo': {
        id: 'luxury-combo',
        slug: 'kashmiri-saffron-kahwa-gift-set',
        name: 'KesarHarvesters Premium Combo Pack',
        price: 1599,
        weight: 'Kashmiri (2g) + Irani (2g)',
        origin: 'Combo',
        category: 'Premium Gift Set',
        img: 'images/kashmiri-saffron-kahwa-gift-set.webp',
        specs: [
            'Dual Pack: 2g Kashmiri Mogra &amp; 2g Irani Sargol',
            'Includes Airtight Gift Presentation Glass Jars',
            'Perfect Wellness &amp; Luxury Gifting Option',
            'Certified Premium Quality Across Both Jars'
        ],
        storage: 'Keep jars sealed tightly and store in a cool, dry place. Best stored in original presentation packaging.',
        usage: 'Use Kashmiri Mogra for luxury beverages and premium desserts. Use Irani Sargol for daily recipes and stews.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). Dispatched from Pampore via Speed Post or surface transport. Delivery takes 4-7 business days depending on location.',
        frequentlyBought: ['kashmiri-10g'],
        related: ['kashmiri-5g', 'irani-5g']
    }
};

// --- FUTURE PRODUCTS READY FOR CATALOG EXPANSION ---
const FUTURE_PRODUCTS = {
    'honey-250g': {
        id: 'honey-250g',
        slug: 'raw-kashmiri-sidr-honey-250g',
        name: 'Raw Kashmiri Sidr Honey (250g)',
        price: 499,
        weight: '250 Grams',
        origin: 'Kashmiri',
        category: 'Wild Honey',
        img: 'images/honey_placeholder.png',
        specs: ['100% Raw & Unpasteurized Sidr Honey', 'Monofloral Sourced from Wild Sidr Forests', 'Rich in Digestive Enzymes & Antioxidants'],
        storage: 'Store at room temperature. Crystallization is natural for raw honey; place jar in warm water to liquefy.',
        usage: 'Take 1 tsp directly on an empty stomach or mix with warm water/tea.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). ',
        frequentlyBought: ['kashmiri-2g'],
        related: ['almonds-500g']
    },
    'shilajit-20g': {
        id: 'shilajit-20g',
        slug: 'pure-himalayan-shilajit-resin-20g',
        name: 'Pure Himalayan Shilajit (20g)',
        price: 999,
        weight: '20 Grams',
        origin: 'Himalayan',
        category: 'Premium Resin',
        img: 'images/shilajit_placeholder.png',
        specs: ['Gold-Grade Purified Himalayan Shilajit Resin', 'Rich in Fulvic Acid &amp; 84+ Trace Minerals', 'Traditionally Sourced above 16,000 feet'],
        storage: 'Keep container sealed and store in a cool place. Resin may harden; warm container slightly to open.',
        usage: 'Dissolve a pea-sized amount (200-250mg) in warm water, milk, or green tea daily.',
        delivery: 'Flat ₹99 shipping applies per order across India (up to 1 kg parcel weight). ',
        frequentlyBought: ['kashmiri-5g'],
        related: ['honey-250g']
    }
};

const SHIPPING_FEE_DEFAULT = 99;
const SHIPPING_FREE_THRESHOLD = 2000;

// --- STATE MANAGEMENT ---
let state = {
    cart: []
};

// --- INITIALIZE ENGINES ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadCartFromStorage();
    initCartUI();
    initFAQAccordions();
    initPuritySimulator();
    initHeroSlider();
    
    // Page specific routers
    
    // Page specific routers
    const path = window.location.pathname;
    if (path.includes('blog.html')) {
        renderBlogPage();
    } else if (path.includes('recipes.html')) {
        renderRecipesPage();
    } else if (path.includes('shop.html')) {
        renderShopPage();
    } else if (path.includes('product.html')) {
        renderProductDetailPage();
    }
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const pid = btn.dataset.productId;
            if (pid && PRODUCTS[pid]) {
                addToCart(pid);
                openCart();
            }
        });
    });
});

// --- NAVIGATION ENGINE ---
function initNavigation() {
    const burger = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const drawer = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav-close');
    
    if (burger && overlay && drawer && closeBtn) {
        const toggleMenu = () => {
            drawer.classList.toggle('active');
            overlay.classList.toggle('active');
        };
        burger.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }
}

// --- CART STATE ENGINE ---
function loadCartFromStorage() {
    try {
        const stored = localStorage.getItem('kh_cart_new');
        if (stored) {
            state.cart = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Failed to load cart state', e);
    }
}

function saveCartToStorage() {
    localStorage.setItem('kh_cart_new', JSON.stringify(state.cart));
}

function addToCart(productId) {
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ id: productId, qty: 1 });
    }
    saveCartToStorage();
    renderCart();
}

function updateQty(productId, delta) {
    const item = state.cart.find(item => item.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            state.cart = state.cart.filter(i => i.id !== productId);
        }
        saveCartToStorage();
        renderCart();
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    renderCart();
}

// --- SLIDE CART DRAWERS ---
function initCartUI() {
    const cartBtns = document.querySelectorAll('.cart-btn');
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    const closeBtn = document.querySelector('.cart-close');
    
    if (drawer && overlay) {
        cartBtns.forEach(btn => btn.addEventListener('click', openCart));
        if (closeBtn) closeBtn.addEventListener('click', closeCart);
        overlay.addEventListener('click', closeCart);
    }
    renderCart();
}

function openCart() {
    const drawer = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
    }
    resetCartView(); // Reset view to cart items list on open
}

function closeCart() {
    const drawer = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    }
    resetCartView();
}

function showCheckoutForm() {
    const panel = document.querySelector('.checkout-panel');
    const items = document.querySelector('.cart-items');
    const indicator = document.querySelector('.shipping-indicator');
    const proceedBtn = document.querySelector('.proceed-btn');
    const placeOrderBtn = document.querySelector('.place-order-btn');
    const successPanel = document.querySelector('.order-success-panel');
    const footer = document.querySelector('.cart-footer');
    const continueBtn = document.querySelector('.continue-shopping-btn');
    
    if (successPanel) successPanel.style.display = 'none';
    if (footer) footer.style.display = 'block';
    if (continueBtn) continueBtn.style.display = 'none'; // Hide continue button during checkout
    
    if (panel && items) {
        panel.classList.add('active');
        items.style.display = 'none'; // Hide items list to free space
        if (indicator) indicator.style.display = 'none';
        if (proceedBtn) proceedBtn.style.display = 'none';
        if (placeOrderBtn) placeOrderBtn.style.display = 'block'; // Reveal dispatch button
        
        // Reset scroll position to top to prevent form feeling stuck/scrolled down
        panel.scrollTop = 0;
        const drawerElement = document.querySelector('.cart-drawer');
        if (drawerElement) drawerElement.scrollTop = 0;
    }
}

function resetCartView() {
    const panel = document.querySelector('.checkout-panel');
    const items = document.querySelector('.cart-items');
    const indicator = document.querySelector('.shipping-indicator');
    const proceedBtn = document.querySelector('.proceed-btn');
    const placeOrderBtn = document.querySelector('.place-order-btn');
    const successPanel = document.querySelector('.order-success-panel');
    const footer = document.querySelector('.cart-footer');
    const continueBtn = document.querySelector('.continue-shopping-btn');
    
    if (successPanel) successPanel.style.display = 'none';
    if (footer) footer.style.display = 'block';
    if (continueBtn) continueBtn.style.display = 'block'; // Show continue button in cart view
    
    if (panel && items) {
        panel.classList.remove('active');
        items.style.display = 'flex'; // Restore items list
        if (indicator) indicator.style.display = 'block';
        if (proceedBtn) proceedBtn.style.display = 'block';
        if (placeOrderBtn) placeOrderBtn.style.display = 'none'; // Hide checkout button
    }
}

function renderCart() {
    const countBadge = document.querySelector('.cart-count');
    const itemsContainer = document.querySelector('.cart-items');
    const subtotalVal = document.querySelector('.subtotal-value');
    const shippingVal = document.querySelector('.shipping-value');
    const grandVal = document.querySelector('.grand-value');
    const checkoutActions = document.querySelector('.cart-checkout-actions');
    
    if (!itemsContainer) return;
    
    let totalItems = 0;
    let subtotal = 0;
    
    itemsContainer.innerHTML = '';
    
    if (state.cart.length === 0) {
        itemsContainer.innerHTML = '<div class="empty-cart-msg"><p>Your shopping cart is currently empty.</p></div>';
        if (subtotalVal) subtotalVal.textContent = '₹0';
        if (shippingVal) shippingVal.textContent = '₹0';
        if (grandVal) grandVal.textContent = '₹0';
        if (countBadge) countBadge.textContent = '0';
        
        resetCartView();
        if (checkoutActions) checkoutActions.style.display = 'none';
        return;
    }
    
    if (checkoutActions) checkoutActions.style.display = 'flex';
    
    // Compute total weights per origin in cart to recommend upsells
    let totalKashmiriWeight = 0;
    let totalIraniWeight = 0;
    
    state.cart.forEach(item => {
        const prod = PRODUCTS[item.id];
        if (prod) {
            const w = parseFloat(prod.weight);
            if (prod.origin === 'Kashmiri') {
                totalKashmiriWeight += w * item.qty;
            } else if (prod.origin === 'Irani') {
                totalIraniWeight += w * item.qty;
            }
        }
    });
    
    let upsellHtml = '';
    if (totalKashmiriWeight > 0) {
        if (totalKashmiriWeight < 5) {
            const savings = Math.round((489 * 5) - 2299);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">🔥 Mogra Value Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings} on 5g!</strong>
                    </div>
                    <div>You have ${totalKashmiriWeight}g of Kashmiri Mogra. Upgrade your selection to a single <strong>5g pack</strong> for just <strong>₹2,299</strong> (Only ₹459.80/g instead of ₹489/g)!</div>
                    <button onclick="upgradeToLargerPack('Kashmiri', 'kashmiri-5g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 5g & Save</button>
                </div>
            `;
        } else if (totalKashmiriWeight < 10) {
            const savings = Math.round((489 * 10) - 4499);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">💎 Premium Pack Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings}!</strong>
                    </div>
                    <div>You have ${totalKashmiriWeight}g of Kashmiri Mogra. Upgrade your selection to a single <strong>10g pack</strong> for just <strong>₹4,499</strong> (Only ₹449.90/g) for maximum savings!</div>
                    <button onclick="upgradeToLargerPack('Kashmiri', 'kashmiri-10g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 10g & Save</button>
                </div>
            `;
        } else if (totalKashmiriWeight < 20) {
            const savings = Math.round((489 * 20) - 8699);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">👑 Bulk Saver Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings}!</strong>
                    </div>
                    <div>You have ${totalKashmiriWeight}g of Kashmiri Mogra. Upgrade your selection to a single <strong>20g pack</strong> for just <strong>₹8,699</strong> (Only ₹434.95/g) for wholesale pricing!</div>
                    <button onclick="upgradeToLargerPack('Kashmiri', 'kashmiri-20g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 20g & Save</button>
                </div>
            `;
        } else if (totalKashmiriWeight < 50) {
            const savings = Math.round((489 * 50) - 19999);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">👑 Mega Saver Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings}!</strong>
                    </div>
                    <div>You have ${totalKashmiriWeight}g of Kashmiri Mogra. Upgrade your selection to a single <strong>50g pack</strong> for just <strong>₹19,999</strong> (Only ₹399.98/g) for ultimate savings!</div>
                    <button onclick="upgradeToLargerPack('Kashmiri', 'kashmiri-50g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 50g & Save</button>
                </div>
            `;
        }
    } else if (totalIraniWeight > 0) {
        if (totalIraniWeight < 5) {
            const savings = Math.round((389 * 5) - 1799);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">🔥 Sargol Value Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings} on 5g!</strong>
                    </div>
                    <div>You have ${totalIraniWeight}g of Irani Sargol. Upgrade your selection to a single <strong>5g pack</strong> for just <strong>₹1,799</strong> (Only ₹359.80/g instead of ₹389/g)!</div>
                    <button onclick="upgradeToLargerPack('Irani', 'irani-5g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 5g & Save</button>
                </div>
            `;
        } else if (totalIraniWeight < 10) {
            const savings = Math.round((389 * 10) - 3499);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">💎 Premium Pack Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings}!</strong>
                    </div>
                    <div>You have ${totalIraniWeight}g of Irani Sargol. Upgrade your selection to a single <strong>10g pack</strong> for just <strong>₹3,499</strong> (Only ₹349.90/g) for maximum savings!</div>
                    <button onclick="upgradeToLargerPack('Irani', 'irani-10g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 10g & Save</button>
                </div>
            `;
        } else if (totalIraniWeight < 20) {
            const savings = Math.round((389 * 20) - 6899);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">👑 Bulk Saver Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings}!</strong>
                    </div>
                    <div>You have ${totalIraniWeight}g of Irani Sargol. Upgrade your selection to a single <strong>20g pack</strong> for just <strong>₹6,899</strong> (Only ₹344.95/g) for wholesale pricing!</div>
                    <button onclick="upgradeToLargerPack('Irani', 'irani-20g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 20g & Save</button>
                </div>
            `;
        } else if (totalIraniWeight < 50) {
            const savings = Math.round((389 * 50) - 15999);
            upsellHtml = `
                <div class="cart-upsell-box" style="background: linear-gradient(135deg, rgba(244,196,48,0.06) 0%, rgba(74,20,140,0.03) 100%); border: 1px dashed rgba(244,196,48,0.4); padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 12px; line-height: 1.4; color: var(--color-text);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-size: 9px; font-weight: 700; color: var(--color-primary); background: rgba(244,196,48,0.2); padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">👑 Mega Saver Upgrade</span>
                        <strong style="color: #2e7d32; font-size: 11px;">Save ₹${savings}!</strong>
                    </div>
                    <div>You have ${totalIraniWeight}g of Irani Sargol. Upgrade your selection to a single <strong>50g pack</strong> for just <strong>₹15,999</strong> (Only ₹319.98/g) for ultimate savings!</div>
                    <button onclick="upgradeToLargerPack('Irani', 'irani-50g')" style="background-color: var(--color-secondary); color: var(--color-primary-dark); border: none; padding: 6px 12px; font-size: 10px; font-weight: 700; border-radius: 4px; cursor: pointer; margin-top: 8px; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;">Upgrade to 50g & Save</button>
                </div>
            `;
        }
    }
    
    if (upsellHtml) {
        const upsellRow = document.createElement('div');
        upsellRow.innerHTML = upsellHtml;
        itemsContainer.appendChild(upsellRow.firstElementChild);
    }
    
    state.cart.forEach(item => {
        const prod = PRODUCTS[item.id];
        if (!prod) return;
        
        totalItems += item.qty;
        subtotal += prod.price * item.qty;
        
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${prod.name}</h3>
                <div class="cart-item-meta">${prod.origin} Saffron | ${prod.category}</div>
                <div class="cart-item-bottom">
                    <div class="quantity-controller">
                        <span class="qty-btn" onclick="updateQty('${prod.id}', -1)">-</span>
                        <span class="qty-val">${item.qty}</span>
                        <span class="qty-btn" onclick="updateQty('${prod.id}', 1)">+</span>
                    </div>
                    <div class="cart-item-price">₹${prod.price * item.qty}</div>
                </div>
                <div style="margin-top: 6px;"><span class="cart-item-remove" onclick="removeFromCart('${prod.id}')">Remove</span></div>
            </div>
        `;
        itemsContainer.appendChild(row);
    });
    
    const activeShippingFee = (subtotal === 0 || subtotal >= SHIPPING_FREE_THRESHOLD) ? 0 : SHIPPING_FEE_DEFAULT;
    const grandTotal = subtotal + activeShippingFee;
    
    const shippingIndicator = document.querySelector('.shipping-indicator');
    if (shippingIndicator) {
        if (subtotal >= SHIPPING_FREE_THRESHOLD) {
            shippingIndicator.innerHTML = `<i data-lucide="truck" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>🎉 You qualify for <strong>FREE DELIVERY</strong>!`;
        } else {
            shippingIndicator.innerHTML = `<i data-lucide="truck" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Flat rate of <strong>₹99</strong> delivery charge across India (up to 1 kg) — Free on orders above ₹2,000!`;
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    
    if (subtotalVal) subtotalVal.textContent = `₹${subtotal}`;
    if (shippingVal) shippingVal.textContent = `₹${activeShippingFee}`;
    if (grandVal) grandVal.textContent = `₹${grandTotal}`;
    if (countBadge) countBadge.textContent = totalItems;
}

// --- CHECKOUT & ORDER REDIRECTS ---
function dispatchOrder(event) {
    if (event) event.preventDefault();
    
    const name = document.getElementById('chk-name').value.trim();
    const phone = document.getElementById('chk-phone').value.trim();
    const email = document.getElementById('chk-email').value.trim();
    const address = document.getElementById('chk-address').value.trim();
    const pincode = document.getElementById('chk-pincode').value.trim();
    
    if (!name || !phone || !email || !address || !pincode) {
        alert('Please complete all delivery fields.');
        return;
    }
    
    if (!/^\d{6}$/.test(pincode)) {
        alert('Please enter a valid 6-digit Pincode.');
        return;
    }
    
    // Generate Order ID
    const orderId = `KH-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Construct Order String
    let orderDetails = `*KESARHARVESTERS - NEW ORDER*\n`;
    orderDetails += `===============================\n`;
    orderDetails += `*Order ID:* #${orderId}\n\n`;
    orderDetails += `*Customer Details:*\n`;
    orderDetails += `Name: ${name}\n`;
    orderDetails += `Phone: ${phone}\n`;
    orderDetails += `Email: ${email}\n`;
    orderDetails += `Address: ${address}\n`;
    orderDetails += `Pincode: ${pincode}\n\n`;
    orderDetails += `*Items Ordered:*\n`;
    
    let subtotal = 0;
    state.cart.forEach(item => {
        const prod = PRODUCTS[item.id];
        if (prod) {
            orderDetails += `• ${prod.name} x ${item.qty} - ₹${prod.price * item.qty}\n`;
            subtotal += prod.price * item.qty;
        }
    });
    
    const activeShippingFee = subtotal >= SHIPPING_FREE_THRESHOLD ? 0 : SHIPPING_FEE_DEFAULT;
    const total = subtotal + activeShippingFee;
    orderDetails += `\nDelivery Charge: ₹${activeShippingFee}\n`;
    orderDetails += `===============================\n`;
    orderDetails += `*Grand Total:* ₹${total}\n\n`;
    orderDetails += `*Payment Status:* Pending UPI (Pay to 8825034663@yescred)\n`;
    orderDetails += `===============================\n\n`;
    orderDetails += `Please complete your payment of ₹${total} to UPI ID *8825034663@yescred* (GPay/PhonePe to *8825034663*) and share the payment screenshot here to confirm order shipment. Thank you!`;
    
    showOrderSuccess(orderId, total, orderDetails, email);
}

function showOrderSuccess(orderId, total, orderDetails, email) {
    const successPanel = document.querySelector('.order-success-panel');
    const items = document.querySelector('.cart-items');
    const panel = document.querySelector('.checkout-panel');
    const indicator = document.querySelector('.shipping-indicator');
    const footer = document.querySelector('.cart-footer');
    
    if (successPanel) {
        const totalVal = successPanel.querySelector('.success-total-value');
        if (totalVal) totalVal.textContent = `₹${total}`;
        
        // Generate UPI URL
        const upiLink = `upi://pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
        
        // Render QR Code Image using qrserver API
        const qrContainer = document.getElementById('upi-qr-container');
        if (qrContainer) {
            qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiLink)}" alt="Scan to Pay ₹${total}" style="display: block; width: 150px; height: 150px; margin: 0 auto; border-radius: 8px;">`;
        }
        
        // Configure Specific UPI App Buttons with Desktop Checks
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        const gpayBtn = document.getElementById('upi-gpay-btn');
        if (gpayBtn) {
            gpayBtn.href = `tez://upi/pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
            gpayBtn.onclick = (e) => {
                if (!isMobileDevice) {
                    e.preventDefault();
                    alert("Google Pay link is only supported on mobile devices. Please scan the QR Code on your screen to pay.");
                }
            };
        }
        
        const phonepeBtn = document.getElementById('upi-phonepe-btn');
        if (phonepeBtn) {
            phonepeBtn.href = `phonepe://pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
            phonepeBtn.onclick = (e) => {
                if (!isMobileDevice) {
                    e.preventDefault();
                    alert("PhonePe link is only supported on mobile devices. Please scan the QR Code on your screen to pay.");
                }
            };
        }
        
        const paytmBtn = document.getElementById('upi-paytm-btn');
        if (paytmBtn) {
            paytmBtn.href = `paytmmp://pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
            paytmBtn.onclick = (e) => {
                if (!isMobileDevice) {
                    e.preventDefault();
                    alert("Paytm link is only supported on mobile devices. Please scan the QR Code on your screen to pay.");
                }
            };
        }
        
        const upiPayBtn = document.getElementById('upi-pay-app-btn');
        if (upiPayBtn) {
            upiPayBtn.onclick = (e) => {
                if (!isMobileDevice) {
                    e.preventDefault();
                    alert("Pay via UPI App is only supported on mobile devices. Please scan the QR Code on your screen using GPay, PhonePe, Paytm, or BHIM to complete your payment, or open this site on your mobile phone.");
                }
            };
            upiPayBtn.href = upiLink;
        }
        
        // Configure WhatsApp Confirm Button
        const waConfirmBtn = document.getElementById('wa-confirm-btn');
        if (waConfirmBtn) {
            const waUrl = `https://wa.me/918825034663?text=${encodeURIComponent(orderDetails)}`;
            waConfirmBtn.href = waUrl;
        }
        
        successPanel.style.display = 'block';
        if (items) items.style.display = 'none';
        if (panel) panel.style.display = 'none';
        if (indicator) indicator.style.display = 'none';
        if (footer) footer.style.display = 'none';
        
        // Clear cart state
        state.cart = [];
        saveCartToStorage();
        
        // Update counts and re-render cart elements
        const countBadges = document.querySelectorAll('.cart-count');
        countBadges.forEach(b => b.textContent = '0');
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

// --- HERO SLIDER ENGINE ---
let currentSlideIndex = 0;
let slideInterval = null;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (slides.length === 0) return;
    
    const showSlide = (index) => {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        currentSlideIndex = (index + slides.length) % slides.length;
        slides[currentSlideIndex].classList.add('active');
        if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
    };
    
    window.moveSlide = (delta) => {
        resetSlideTimer();
        showSlide(currentSlideIndex + delta);
    };
    
    window.setSlide = (index) => {
        resetSlideTimer();
        showSlide(index);
    };
    
    const startSlideTimer = () => {
        slideInterval = setInterval(() => {
            showSlide(currentSlideIndex + 1);
        }, 5000); // Cycle every 5s
    };
    
    const resetSlideTimer = () => {
        if (slideInterval) clearInterval(slideInterval);
        startSlideTimer();
    };
    
    startSlideTimer();
}

// --- DYNAMIC SHOP LOADER ---
function renderShopPage() {
    const container = document.getElementById('shop-products-grid');
    if (!container) return;
    
    let filterOrigin = 'all';
    
    const renderGrid = () => {
        container.innerHTML = '';
        Object.values(PRODUCTS).forEach(prod => {
            if (filterOrigin !== 'all' && prod.origin.toLowerCase() !== filterOrigin.toLowerCase()) {
                return;
            }
            let badgeText = prod.origin === 'Kashmiri' ? 'Pampore Mogra' : 'Gourmet Sargol';
            let badgeStyle = '';
            if (prod.id.includes('-5g')) {
                badgeText = '🔥 Best Seller';
                badgeStyle = 'background-color: #e65100; color: white; font-weight: 700;';
            } else if (prod.id.includes('-10g')) {
                badgeText = '💎 Best Value';
                badgeStyle = 'background-color: #2e7d32; color: white; font-weight: 700;';
            } else if (prod.id.includes('-20g') || prod.id.includes('-50g')) {
                badgeText = '👑 Bulk Saver';
                badgeStyle = 'background-color: var(--color-primary); color: white; font-weight: 700;';
            }
            
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-badge" style="${badgeStyle}">${badgeText}</div>
                <a href="product.html?product=${prod.slug}">
                    <div class="product-img-wrap">
                        <img src="${prod.img}" alt="${prod.name}" width="1024" height="1024" loading="lazy">
                    </div>
                </a>
                <div class="product-info">
                    <span class="product-cat">${prod.category}</span>
                    <a href="product.html?product=${prod.slug}">
                        <h3 class="product-title" style="font-size: 15px;">${prod.name}</h3>
                    </a>
                    <div class="product-meta">
                        <span class="product-price">₹${prod.price}</span>
                        <span style="font-size: 12px; color: var(--color-text-muted);">${prod.weight}</span>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart('${prod.id}'); openCart();" style="margin-top: 15px; width: 100%;">Add To Cart</button>
                </div>
            `;
            container.appendChild(card);
        });
    };
    
    // Handle filters
    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            filterOrigin = chip.dataset.origin;
            renderGrid();
        });
    });
    
    renderGrid();
}

// --- DYNAMIC BLOG RENDERER ---
function renderBlogPage() {
    const grid = document.getElementById('blog-posts-grid');
    const reader = document.getElementById('blog-post-reader');
    const categoriesBox = document.querySelector('.blog-categories');
    
    if (!grid || !reader) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        // Render Single Article
        const art = BLOG_ARTICLES.find(a => a.id == articleId);
        if (art) {
            if (categoriesBox) categoriesBox.style.display = 'none';
            grid.style.display = 'none';
            reader.style.display = 'block';
            reader.innerHTML = `
                <div class="article-wrap">
                    <a href="blog.html" class="btn btn-outline-dark" style="margin-bottom: 30px; padding: 10px 20px;"><i data-lucide="arrow-left" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 6px;"></i> Back to Blog</a>
                    <div class="article-header">
                        <span class="section-badge">${art.category}</span>
                        <h1 class="article-title">${art.title}</h1>
                        <div class="article-meta">Published: ${art.date} | By KesarHarvesters</div>
                    </div>
                    <img src="${art.img}" alt="${art.title}" style="width: 100%; height: 350px; object-fit: cover; border-radius: 12px; margin-bottom: 40px;">
                    <div class="article-content">
                        ${art.content}
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    } else {
        // Render Article Listing
        grid.style.display = 'grid';
        reader.style.display = 'none';
        if (categoriesBox) categoriesBox.style.display = 'flex';
        
        let activeCategory = 'all';
        
        const renderList = () => {
            grid.innerHTML = '';
            BLOG_ARTICLES.forEach(art => {
                if (activeCategory !== 'all' && art.categorySlug !== activeCategory) {
                    return;
                }
                
                const card = document.createElement('div');
                card.className = 'blog-card';
                card.innerHTML = `
                    <img src="${art.img}" alt="${art.title}" class="blog-card-img">
                    <div class="blog-card-content">
                        <span class="blog-card-cat">${art.category}</span>
                        <h3 class="blog-card-title">${art.title}</h3>
                        <p class="blog-card-excerpt">${art.excerpt}</p>
                        <a href="blog.html?id=${art.id}" class="blog-card-link">Read Article &rarr;</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        };
        
        document.querySelectorAll('.cat-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeCategory = chip.dataset.category;
                renderList();
            });
        });
        
        renderList();
    }
}

// --- DYNAMIC RECIPE RENDERER ---
function renderRecipesPage() {
    const list = document.getElementById('recipes-list-grid');
    const single = document.getElementById('recipe-single-view');
    
    if (!list || !single) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const rId = urlParams.get('id');
    
    if (rId) {
        // Render Single Recipe
        const rec = RECIPES.find(r => r.id == rId);
        if (rec) {
            list.style.display = 'none';
            single.style.display = 'block';
            
            let ingHtml = '';
            rec.ingredients.forEach(ing => {
                ingHtml += `<li style="margin-bottom: 8px; font-size: 14px;"><i data-lucide="check" style="width: 14px; height: 14px; color: var(--color-secondary); display: inline-block; margin-right: 8px; vertical-align: middle;"></i> ${ing}</li>`;
            });
            
            let instHtml = '';
            rec.instructions.forEach((inst, index) => {
                instHtml += `
                    <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                        <span style="background-color: var(--color-primary); color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-shrink: 0; font-weight: bold; font-size: 14px;">${index+1}</span>
                        <p style="font-size: 15px; color: var(--color-text); line-height: 1.6;">${inst}</p>
                    </div>
                `;
            });
            
            single.innerHTML = `
                <a href="recipes.html" class="btn btn-outline-dark" style="margin-bottom: 30px; padding: 10px 20px;"><i data-lucide="arrow-left" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 6px;"></i> Back to Recipes</a>
                <div class="recipe-single-grid">
                    <div>
                        <img src="${rec.img}" alt="${rec.title}" style="width: 100%; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.04); margin-bottom: 24px;">
                        <div style="background-color: var(--color-bg-dark); padding: 24px; border-radius: 12px;">
                            <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 15px; font-family: var(--font-serif);">Ingredients</h4>
                            <ul style="list-style: none;">
                                ${ingHtml}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span class="section-badge">Culinary Art</span>
                        <h1 class="font-serif" style="font-size: 38px; margin-bottom: 12px; color: var(--color-primary);">${rec.title}</h1>
                        <div style="display: flex; gap: 20px; font-size: 13px; color: var(--color-text-muted); margin-bottom: 24px; border-bottom: 1px solid var(--color-bg-dark); padding-bottom: 15px;">
                            <span><i data-lucide="clock" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;"></i> Prep: ${rec.prepTime}</span>
                            <span><i data-lucide="flame" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;"></i> Cook: ${rec.cookTime}</span>
                            <span><i data-lucide="users" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;"></i> Servings: ${rec.servings}</span>
                        </div>
                        <p style="font-size: 16px; color: var(--color-text-muted); margin-bottom: 30px; line-height: 1.6; font-style: italic;">"${rec.description}"</p>
                        <h3 style="font-size: 22px; font-weight: 600; margin-bottom: 20px; font-family: var(--font-serif);">Directions</h3>
                        <div>
                            ${instHtml}
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    } else {
        // Render List view
        list.style.display = 'grid';
        single.style.display = 'none';
        list.innerHTML = '';
        
        RECIPES.forEach(rec => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `
                <img src="${rec.img}" alt="${rec.title}" class="recipe-card-img">
                <div class="blog-card-content">
                    <span class="blog-card-cat">Traditional Cooking</span>
                    <h3 class="blog-card-title">${rec.title}</h3>
                    <p class="blog-card-excerpt">${rec.description}</p>
                    <a href="recipes.html?id=${rec.id}" class="blog-card-link">View Recipe &rarr;</a>
                </div>
            `;
            list.appendChild(card);
        });
    }
}

// --- FAQ ACCORDION ENGINE ---
function initFAQAccordions() {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// --- PURITY TEST SIMULATOR ---
function initPuritySimulator() {
    const pureBtn = document.getElementById('run-pure-test');
    const fakeBtn = document.getElementById('run-fake-test');
    const container = document.querySelector('.test-simulator');
    
    if (pureBtn && fakeBtn && container) {
        pureBtn.addEventListener('click', () => {
            resetSimulator();
            container.classList.add('pure-test-active', 'test-active');
            document.querySelector('.pure-vessel .sim-label').textContent = 'Pure Kashmiri Premium';
        });
        
        fakeBtn.addEventListener('click', () => {
            resetSimulator();
            container.classList.add('fake-test-active', 'test-active');
            document.querySelector('.fake-vessel .sim-label').textContent = 'Adulterated (Dyed)';
        });
    }
}

function resetSimulator() {
    const container = document.querySelector('.test-simulator');
    if (container) {
        container.className = 'test-simulator';
        document.querySelector('.pure-vessel .sim-label').textContent = 'Vessel A';
        document.querySelector('.fake-vessel .sim-label').textContent = 'Vessel B';
    }
}


// --- DYNAMIC PRODUCT DETAIL ROUTER ENGINE ---
function renderProductDetailPage() {
    const layout = document.getElementById('product-detail-layout');
    const notFound = document.getElementById('product-not-found');
    const fbtSection = document.getElementById('frequently-bought-together');
    
    if (!layout || !notFound) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productSlug = urlParams.get('product');
    
    // Find product matching slug
    let prod = Object.values(PRODUCTS).find(p => p.slug === productSlug);
    
    // Fallback if missing or invalid
    if (!prod && productSlug) {
        layout.style.display = 'none';
        notFound.style.display = 'block';
        if (fbtSection) fbtSection.style.display = 'none';
        return;
    } else if (!prod) {
        // Default fallback to Kashmiri 5g
        prod = PRODUCTS['kashmiri-5g'];
    }
    
    layout.style.display = 'grid';
    notFound.style.display = 'none';
    if (fbtSection) fbtSection.style.display = 'block';
    
    // Update tab title and metadata
    document.title = `${prod.name} | Saffron Purity & Specs - KesarHarvesters`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', `Shop ${prod.name} online. ${prod.specs[0]}. Sourced directly from our farming plateau in Pampore, Kashmir.`);
    
    // Render dynamic fields
    const detailImg = document.getElementById('detail-img');
    const detailBadge = document.getElementById('detail-badge');
    const detailTitle = document.getElementById('detail-title');
    const detailPrice = document.getElementById('detail-price');
    const detailWeight = document.getElementById('detail-weight');
    
    if (detailImg) {
        detailImg.src = prod.img;
        detailImg.alt = prod.name;
    }
    if (detailBadge) detailBadge.textContent = prod.category;
    if (detailTitle) detailTitle.textContent = prod.name;
    if (detailPrice) {
        const weightNum = parseFloat(prod.weight);
        let perGramText = '';
        if (weightNum > 1) {
            const perGramPrice = Math.round(prod.price / weightNum);
            perGramText = ` <span style="font-size: 14px; font-weight: 600; color: #2e7d32; display: block; margin-top: 5px;">(Only ₹${perGramPrice} / gram — save significantly on larger sizes!)</span>`;
        }
        detailPrice.innerHTML = `₹${prod.price}${perGramText}`;
    }
    if (detailWeight) detailWeight.textContent = prod.weight;
    
    // Render weights selector tabs
    const variantsContainer = document.getElementById('detail-variants');
    if (variantsContainer) {
        variantsContainer.innerHTML = '';
        
        // Find other weights of same origin
        const currentOrigin = prod.origin;
        const variants = Object.values(PRODUCTS).filter(p => p.origin === currentOrigin);
        
        variants.forEach(v => {
            const btn = document.createElement('a');
            btn.href = `product.html?product=${v.slug}`;
            btn.className = v.id === prod.id ? 'cat-chip active' : 'cat-chip';
            
            // Calculate savings percentage compared to the base 1g price to incentivize bulk buying
            const baseKey = currentOrigin === 'Kashmiri' ? 'kashmiri-1g' : 'irani-1g';
            const base1gPrice = PRODUCTS[baseKey] ? PRODUCTS[baseKey].price : 479;
            const weightVal = parseFloat(v.weight);
            const standardProportionalPrice = base1gPrice * weightVal;
            const savings = standardProportionalPrice - v.price;
            const savingsPct = Math.round((savings / standardProportionalPrice) * 100);
            
            let labelText = v.weight;
            if (savingsPct > 0) {
                labelText += ` (Save ${savingsPct}%)`;
            }
            
            btn.textContent = labelText;
            btn.style.margin = '4px';
            variantsContainer.appendChild(btn);
        });
    }
    
    // Bind Add to Cart & Buy Now buttons
    const addToCartActionBtn = document.getElementById('add-to-cart-action-btn');
    if (addToCartActionBtn) {
        addToCartActionBtn.onclick = () => {
            addToCart(prod.id);
            openCart();
        };
    }
    
    const buyNowActionBtn = document.getElementById('buy-now-action-btn');
    if (buyNowActionBtn) {
        buyNowActionBtn.onclick = () => {
            addToCart(prod.id);
            openCart();
            // Directly toggle inputs to checkout view in cart
            const chkForm = document.querySelector('.cart-checkout-form');
            const primaryBtn = document.querySelector('.checkout-primary-btn');
            if (chkForm && primaryBtn) {
                chkForm.style.display = 'block';
                primaryBtn.textContent = 'Place Order via UPI';
            }
        };
    }
    
    // Render specifications list
    const specsList = document.getElementById('detail-specs-list');
    if (specsList) {
        specsList.innerHTML = '';
        prod.specs.forEach(spec => {
            const li = document.createElement('li');
            li.style.marginBottom = '6px';
            li.innerHTML = spec;
            specsList.appendChild(li);
        });
    }
    
    // Render storage & usage
    const storageSpan = document.getElementById('detail-storage');
    const usageSpan = document.getElementById('detail-usage');
    const deliverySpan = document.getElementById('detail-delivery');
    
    if (storageSpan) storageSpan.textContent = prod.storage;
    if (usageSpan) usageSpan.textContent = prod.usage;
    if (deliverySpan) deliverySpan.textContent = prod.delivery;
    
    // Configure Frequently Bought Together
    const fbtImg1 = document.getElementById('fbt-img-1');
    const fbtImg2 = document.getElementById('fbt-img-2');
    const fbtText = document.getElementById('fbt-text');
    const fbtTotal = document.getElementById('fbt-total-price');
    const fbtAddBtn = document.getElementById('add-fbt-combo-btn');
    
    const fbtItemId = prod.frequentlyBought[0];
    const fbtItem = PRODUCTS[fbtItemId];
    
    if (fbtItem && fbtImg1 && fbtImg2 && fbtText && fbtTotal && fbtAddBtn) {
        fbtImg1.src = prod.img;
        fbtImg2.src = fbtItem.img;
        fbtText.textContent = `Buy ${prod.name.replace(' (', '').replace(')', '')} + ${fbtItem.name.replace(' (', '').replace(')', '')}`;
        fbtTotal.textContent = `₹${prod.price + fbtItem.price}`;
        
        fbtAddBtn.onclick = () => {
            addToCart(prod.id);
            addToCart(fbtItem.id);
            openCart();
        };
    }
    
    // Configure Related Products Grid (exclude current ID)
    const relatedContainer = document.getElementById('detail-related-grid');
    if (relatedContainer) {
        relatedContainer.innerHTML = '';
        const relatedIds = prod.related;
        relatedIds.forEach(rid => {
            const rprod = PRODUCTS[rid];
            if (rprod) {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-badge">${rprod.origin === 'Kashmiri' ? 'Pampore Mogra' : 'Gourmet Sargol'}</div>
                    <a href="product.html?product=${rprod.slug}">
                        <div class="product-img-wrap">
                            <img src="${rprod.img}" alt="${rprod.name}" width="1024" height="1024" loading="lazy">
                        </div>
                    </a>
                    <div class="product-info">
                        <span class="product-cat">${rprod.category}</span>
                        <a href="product.html?product=${rprod.slug}">
                            <h3 class="product-title" style="font-size: 15px;">${rprod.name}</h3>
                        </a>
                        <div class="product-meta">
                            <span class="product-price">₹${rprod.price}</span>
                            <span style="font-size: 12px; color: var(--color-text-muted);">${rprod.weight}</span>
                        </div>
                        <button class="btn btn-primary" onclick="addToCart('${rprod.id}'); openCart();" style="margin-top: 15px; width: 100%;">Add To Cart</button>
                    </div>
                `;
                relatedContainer.appendChild(card);
            }
        });
    }
    
    // Mobile Sticky Buy Bar controls
    const stickyBar = document.getElementById('mobile-sticky-buy-bar');
    const stickyThumb = document.getElementById('sticky-bar-thumb');
    const stickyName = document.getElementById('sticky-bar-name');
    const stickyPrice = document.getElementById('sticky-bar-price');
    const stickyActionBtn = document.getElementById('sticky-buy-action-btn');
    
    if (stickyBar && stickyThumb && stickyName && stickyPrice && stickyActionBtn) {
        const isMobile = window.innerWidth <= 600;
        
        if (isMobile) {
            stickyBar.style.display = 'flex';
            stickyThumb.src = prod.img;
            stickyName.textContent = prod.name;
            stickyPrice.textContent = `₹${prod.price}`;
            
            stickyActionBtn.onclick = () => {
                addToCart(prod.id);
                openCart();
                const chkForm = document.querySelector('.cart-checkout-form');
                const primaryBtn = document.querySelector('.checkout-primary-btn');
                if (chkForm && primaryBtn) {
                    chkForm.style.display = 'block';
                    primaryBtn.textContent = 'Place Order via UPI';
                }
            };
            
            // Adjust body padding to avoid cover
            document.body.style.paddingBottom = '80px';
        }
    }
    
    // Tabs clicking logic
    document.querySelectorAll('.tab-header').forEach(hdr => {
        hdr.onclick = () => {
            document.querySelectorAll('.tab-header').forEach(h => {
                h.classList.remove('active');
                h.style.color = 'var(--color-text-muted)';
                h.style.borderBottom = 'none';
            });
            hdr.classList.add('active');
            hdr.style.color = 'var(--color-primary)';
            hdr.style.borderBottom = '2px solid var(--color-accent)';
            
            const target = hdr.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
            const tcTarget = document.getElementById(`tab-${target}`);
            if (tcTarget) tcTarget.style.display = 'block';
        };
    });
    
    // Inject Dynamic JSON-LD Schema
    const detailSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": prod.name,
        "image": `https://kesarharvesters.com/${prod.img}`,
        "description": `Certified ${prod.category} original saffron from ${prod.origin === 'Kashmiri' ? 'Pampore, Kashmir' : 'Khorasan'}. ${prod.specs[0]}.`,
        "sku": prod.id,
        "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "INR",
            "price": prod.price,
            "priceValidUntil": "2027-06-30",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };
    
    // Inject into head
    const existingScript = document.getElementById('detail-product-schema');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'detail-product-schema';
    script.textContent = JSON.stringify(detailSchema, null, 2);
    document.head.appendChild(script);
}

window.upgradeToLargerPack = function(origin, targetId) {
    state.cart = state.cart.filter(item => {
        const prod = PRODUCTS[item.id];
        return !prod || prod.origin !== origin;
    });
    addToCart(targetId);
};
