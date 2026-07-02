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
        price: 978,
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
        price: 2445,
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
        price: 4890,
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
        price: 9780,
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
        price: 24450,
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
        price: 778,
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
        price: 1945,
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
        price: 3890,
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
        price: 7780,
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
        price: 19450,
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
        price: 1756,
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
const SHIPPING_FREE_THRESHOLD = 2500;

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
    
    // Dynamically inject the compact checkout form HTML
    const checkoutPanel = document.querySelector('.checkout-panel');
    if (checkoutPanel) {
        checkoutPanel.innerHTML = `
            <h3 style="font-size:16px;font-family:var(--font-serif);margin-bottom:12px;border-bottom:1px solid var(--color-bg-dark);padding-bottom:8px">Delivery Details</h3>
            <form id="checkout-form" onsubmit="dispatchOrder(event)" style="display: flex; flex-direction: column; gap: 8px;">
                <div class="form-group" style="margin-bottom: 2px;">
                    <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Full Name</label>
                    <input id="chk-name" class="form-control" placeholder="Ramesh Kumar" required style="padding: 8px 12px; font-size: 13px;">
                </div>
                
                <div style="display: flex; gap: 8px; margin-bottom: 2px;">
                    <div class="form-group" style="flex: 1.2;">
                        <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Phone Number</label>
                        <input type="tel" id="chk-phone" class="form-control" placeholder="e.g. 9876543210" required style="padding: 8px 12px; font-size: 13px;">
                    </div>
                    <div class="form-group" style="flex: 0.8;">
                        <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Pincode</label>
                        <input id="chk-pincode" class="form-control" placeholder="110001" pattern="[0-9]{6}" title="6-digit Pincode" required style="padding: 8px 12px; font-size: 13px;">
                    </div>
                </div>
                
                <div class="form-group" style="margin-bottom: 2px;">
                    <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Email Address</label>
                    <input type="email" id="chk-email" class="form-control" placeholder="ramesh@example.com" required style="padding: 8px 12px; font-size: 13px;">
                </div>
                
                <div class="form-group" style="margin-bottom: 2px;">
                    <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Shipping Address</label>
                    <textarea id="chk-address" class="form-control" rows="2" placeholder="Street, House No, Locality, City, State" required style="resize:none; padding: 8px 12px; font-size: 13px; height: 48px;"></textarea>
                </div>
                
                <div class="form-group" style="background-color: rgba(74, 20, 140, 0.04); padding: 10px 12px; border-radius: 8px; border: 1px dashed var(--color-secondary); margin-top: 8px; margin-bottom: 4px;">
                    <span style="font-size: 10px; font-weight: 700; color: var(--color-primary); display: block; text-transform: uppercase; margin-bottom: 4px;">UPI Payment Details</span>
                    <p style="font-size: 11px; color: var(--color-text); line-height: 1.4; margin: 0;">
                        UPI ID: <strong>8825034663@yescred</strong><br>
                        Please pay the total amount via UPI. After placing the order, you will get a scan code and links to pay, and can confirm via WhatsApp.
                    </p>
                </div>
                
                <div style="margin-top: 8px; text-align: center;">
                    <a href="javascript:void(0)" onclick="resetCartView()" style="font-size: 12px; color: var(--color-accent); text-decoration: underline; font-weight: 600;">&larr; Back to Cart Items</a>
                </div>
            </form>
        `;
    }
    
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
    
    // Calculate total saffron weight for discount
    let totalSaffronWeight = 0;
    state.cart.forEach(item => {
        const prod = PRODUCTS[item.id];
        if (prod) {
            if (prod.id === 'luxury-combo') {
                totalSaffronWeight += 4 * item.qty; // 2g Kashmiri + 2g Irani = 4g total
            } else {
                const w = parseFloat(prod.weight);
                if (w > 0) {
                    totalSaffronWeight += w * item.qty;
                }
            }
        }
    });

    let discount = 0;
    if (totalSaffronWeight >= 50) {
        discount = 200;
    } else if (totalSaffronWeight >= 20) {
        discount = 80;
    } else if (totalSaffronWeight >= 10) {
        discount = 50;
    } else if (totalSaffronWeight >= 5) {
        discount = 25;
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
    
    const finalSubtotal = Math.max(0, subtotal - discount);
    const activeShippingFee = (subtotal === 0 || finalSubtotal >= SHIPPING_FREE_THRESHOLD) ? 0 : SHIPPING_FEE_DEFAULT;
    const grandTotal = finalSubtotal + activeShippingFee;
    
    // Dynamic free shipping progress bar
    const shippingIndicator = document.querySelector('.shipping-indicator');
    if (shippingIndicator) {
        if (subtotal === 0) {
            shippingIndicator.style.display = 'none';
        } else {
            shippingIndicator.style.display = 'block';
            if (finalSubtotal >= SHIPPING_FREE_THRESHOLD) {
                shippingIndicator.innerHTML = `<i data-lucide="truck" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>🎉 You qualify for <strong>FREE DELIVERY</strong>!`;
            } else {
                const needed = SHIPPING_FREE_THRESHOLD - finalSubtotal;
                const percentage = Math.min((finalSubtotal / SHIPPING_FREE_THRESHOLD) * 100, 100);
                shippingIndicator.innerHTML = `
                    <div style="margin-bottom: 6px;"><i data-lucide="truck" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Add <strong>₹${needed}</strong> more to qualify for <strong>FREE DELIVERY</strong>!</div>
                    <div style="background-color: rgba(0,0,0,0.06); border-radius: 10px; height: 6px; overflow: hidden; width: 100%; margin-top: 4px;">
                        <div style="background: linear-gradient(90deg, var(--color-secondary) 0%, var(--color-primary) 100%); width: ${percentage}%; height: 100%; border-radius: 10px; transition: width 0.3s ease;"></div>
                    </div>
                `;
            }
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Dynamic Saffron Discount Row in Cart Footer
    let discountRow = document.querySelector('.cart-discount');
    if (discount > 0) {
        if (!discountRow) {
            discountRow = document.createElement('div');
            discountRow.className = 'cart-discount';
            discountRow.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; color: #2e7d32; font-weight: 600;';
            const subtotalRow = document.querySelector('.cart-subtotal');
            if (subtotalRow) {
                subtotalRow.parentNode.insertBefore(discountRow, subtotalRow.nextSibling);
            }
        }
        discountRow.innerHTML = `<span>Saffron Quantity Discount:</span> <span>-₹${discount}</span>`;
        discountRow.style.display = 'flex';
    } else {
        if (discountRow) {
            discountRow.style.display = 'none';
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
    let totalSaffronWeight = 0;
    state.cart.forEach(item => {
        const prod = PRODUCTS[item.id];
        if (prod) {
            orderDetails += `• ${prod.name} x ${item.qty} - ₹${prod.price * item.qty}\n`;
            subtotal += prod.price * item.qty;
            if (prod.id === 'luxury-combo') {
                totalSaffronWeight += 4 * item.qty;
            } else {
                const w = parseFloat(prod.weight);
                if (w > 0) {
                    totalSaffronWeight += w * item.qty;
                }
            }
        }
    });
    
    let discount = 0;
    if (totalSaffronWeight >= 50) {
        discount = 200;
    } else if (totalSaffronWeight >= 20) {
        discount = 80;
    } else if (totalSaffronWeight >= 10) {
        discount = 50;
    } else if (totalSaffronWeight >= 5) {
        discount = 25;
    }
    
    const finalSubtotal = Math.max(0, subtotal - discount);
    const activeShippingFee = finalSubtotal >= SHIPPING_FREE_THRESHOLD ? 0 : SHIPPING_FEE_DEFAULT;
    const total = finalSubtotal + activeShippingFee;
    
    if (discount > 0) {
        orderDetails += `Volume Saffron Discount: -₹${discount}\n`;
    }
    orderDetails += `Delivery Charge: ₹${activeShippingFee}\n`;
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
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Generate UPI URL
        const upiLink = `upi://pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
        
        // App-specific UPI deep links
        const gpayLink = `tez://upi/pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
        const phonepeLink = `phonepe://upi/pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
        const paytmLink = `paytmmp://upi/pay?pa=8825034663@yescred&pn=KesarHarvesters&am=${total}&cu=INR&tn=Order_${orderId}`;
        
        // Card request WhatsApp link
        const cardWaText = `Hi KesarHarvesters, I have registered Order #${orderId} for ₹${total}. I would like to pay via Credit Card / Net Banking. Please send me a secure payment link.`;
        const cardWaUrl = `https://wa.me/918825034663?text=${encodeURIComponent(cardWaText)}`;
        
        // Populate success panel dynamically
        successPanel.innerHTML = `
            <div style="color: #25D366; margin-bottom: 15px; text-align: center;">
                <i data-lucide="check-circle" style="width: 55px; height: 55px; margin: 0 auto; display: block; stroke-width: 2;"></i>
            </div>
            <h3 style="font-size: 22px; font-family: var(--font-serif); margin-bottom: 10px; color: var(--color-primary); text-align: center; font-weight: 700;">Order Registered!</h3>
            <p style="font-size: 13.5px; color: var(--color-text-muted); margin-bottom: 20px; line-height: 1.5; text-align: center;">
                Order ID: <strong>#${orderId}</strong><br>
                Please pay <strong style="color: var(--color-primary); font-size: 16px;">₹${total}</strong> to UPI ID: <strong style="word-break: break-all;">8825034663@yescred</strong> using any option below, then share the screenshot on WhatsApp.
            </p>
            
            <!-- QR Code Section -->
            <div style="text-align: center; margin: 15px auto;">
                <div id="upi-qr-container" style="padding: 12px; background: white; border: 2px solid var(--color-primary); border-radius: 16px; display: inline-block; box-shadow: 0 8px 24px rgba(74,20,140,0.06);">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiLink)}" alt="Scan to Pay" style="display: block; width: 150px; height: 150px; border-radius: 8px;">
                </div>
                <div style="font-size: 10px; color: var(--color-text-muted); margin-top: 6px;">Scan QR using GPay, PhonePe, Paytm or any UPI App</div>
            </div>
            
            <!-- Direct UPI App Buttons -->
            <div style="margin-top: 25px; margin-bottom: 25px; text-align: left;">
                <p style="font-size: 11px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; margin-bottom: 10px; text-align: center; letter-spacing: 0.05em;">Pay directly using your UPI App:</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 12px;">
                    <a id="upi-gpay-btn" href="${gpayLink}" class="btn-upi-app" style="background-color: #f8f9fa; color: #1a73e8; border: 1px solid #dadce0; border-radius: 12px; padding: 12px 6px; font-size: 11px; font-weight: 700; text-align: center; text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: all 0.2s;">
                        <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;">
                            <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.95-3.24 3.75v3.08h5.21c3.05-2.81 4.81-6.96 4.81-11.91 0-.61-.06-1.21-.12-1.65z" fill="#4285F4"/>
                            <path d="M12.18 20.45c2.75 0 5.06-.91 6.75-2.47l-5.21-3.08c-1.44.97-3.28 1.55-5.26 1.55-4.05 0-7.48-2.73-8.7-6.4H1.35v3.19c2.56 5.09 7.82 8.41 13.92 8.41z" fill="#34A853"/>
                            <path d="M3.48 10.05a7.17 7.17 0 0 1 0-4.55V2.31H1.35a11.97 11.97 0 0 0 0 10.93l2.13-3.19z" fill="#FBBC05"/>
                            <path d="M12.18 3.55c1.86 0 3.54.64 4.86 1.91l3.64-3.64C18.47.8 15.54 0 12.18 0 8.08 0 4.3 2.56 2.56 6.32l3.19 3.19c1.22-3.67 4.65-6.4 8.7-6.4z" fill="#EA4335"/>
                        </svg>
                        <span>GPay</span>
                    </a>
                    <a id="upi-phonepe-btn" href="${phonepeLink}" class="btn-upi-app" style="background-color: #f8f9fa; color: #5f259f; border: 1px solid #dadce0; border-radius: 12px; padding: 12px 6px; font-size: 11px; font-weight: 700; text-align: center; text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: all 0.2s;">
                        <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;" fill="#5f259f">
                            <path d="M10.206 9.941h2.949v4.692c-.402.201-.938.268-1.34.268-1.072 0-1.609-.536-1.609-1.743V9.941zm13.47 4.816c-1.523 6.449-7.985 10.442-14.433 8.919C2.794 22.154-1.199 15.691.324 9.243 1.847 2.794 8.309-1.199 14.757.324c6.449 1.523 10.442 7.985 8.919 14.433zm-6.231-5.888a.887.887 0 0 0-.871-.871h-1.609l-3.686-4.222c-.335-.402-.871-.536-1.407-.402l-1.274.401c-.201.067-.268.335-.134.469l4.021 3.82H6.386c-.201 0-.335.134-.335.335v.67c0 .469.402.871.871.871h.938v3.217c0 2.413 1.273 3.82 3.418 3.82.67 0 1.206-.067 1.877-.335v2.145c0 .603.469 1.072 1.072 1.072h.938a.432.432 0 0 0 .402-.402V9.874h1.542c.201 0 .335-.134.335-.335v-.67z"/>
                        </svg>
                        <span>PhonePe</span>
                    </a>
                    <a id="upi-paytm-btn" href="${paytmLink}" class="btn-upi-app" style="background-color: #f8f9fa; color: #00b9f5; border: 1px solid #dadce0; border-radius: 12px; padding: 12px 6px; font-size: 11px; font-weight: 700; text-align: center; text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: all 0.2s;">
                        <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;" fill="#00baf2">
                            <path d="M15.85 8.167a.204.204 0 0 0-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.23.23 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.645a.236.236 0 0 0 .237-.241v-1.09a.24.24 0 0 0-.184-.235h-.001a.23.23 0 0 0-.052-.005h-.12c-1.238-.082-1.101-1.04-1.781-1.23a.204.204 0 0 0-.04-.004zM8.15 8.167a.204.204 0 0 0-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.23.23 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v4.623c0 .134.106.241.237.241h1.058a.236.236 0 0 0 .233-.238v-4.626h.645a.236.236 0 0 0 .233-.238v-1.09a.24.24 0 0 0-.184-.235h-.001a.23.23 0 0 0-.052-.005h-.12c-1.238-.082-1.101-1.04-1.781-1.23a.204.204 0 0 0-.04-.004zM12 2.667c-5.15 0-9.333 4.184-9.333 9.333 0 5.15 4.183 9.333 9.333 9.333 5.15 0 9.333-4.183 9.333-9.333 0-5.149-4.183-9.333-9.333-9.333z"/>
                        </svg>
                        <span>Paytm</span>
                    </a>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <a id="upi-pay-app-btn" href="${upiLink}" class="btn btn-gold" style="width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 12px; padding: 10px 16px; border-radius: 8px;">
                        <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> Other UPI App (CRED/BHIM)
                    </a>
                    
                    <a id="card-payment-btn" href="${cardWaUrl}" target="_blank" class="btn" style="width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 12px; padding: 10px 16px; border-radius: 8px; background-color: #2c3e50; color: white; border: none; font-weight: 600;">
                        <i data-lucide="credit-card" style="width: 14px; height: 14px;"></i> Pay via Cards / Net Banking
                    </a>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <a id="wa-confirm-btn" href="https://wa.me/918825034663?text=${encodeURIComponent(orderDetails)}" target="_blank" class="btn btn-whatsapp" style="width: 100%; border-radius: 8px; padding: 12px 16px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-weight: 700;">
                    <i data-lucide="message-square"></i> I Have Paid - Confirm via WhatsApp
                </a>
                <p style="font-size: 11px; color: var(--color-text-muted); margin-top: 4px; margin-bottom: 8px; line-height: 1.4; text-align: center;">
                    After completing the payment, click the green button above to send your delivery details and order summary on WhatsApp to confirm your shipment immediately.
                </p>
                <a href="javascript:void(0)" onclick="closeCart(); resetCartView();" class="btn btn-outline-dark" style="margin-top: 5px; width: 100%; border-radius: 8px;">Close & Keep Browsing</a>
            </div>
        `;
        
        // Add click events to validate mobile devices for custom schemas
        const addUpiAppClickValidation = (btnId, alertMsg) => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.onclick = (e) => {
                    if (!isMobileDevice) {
                        e.preventDefault();
                        alert(alertMsg);
                    }
                };
            }
        };
        
        addUpiAppClickValidation('upi-gpay-btn', "Google Pay link is only supported on mobile devices. Please scan the QR Code on your screen to pay.");
        addUpiAppClickValidation('upi-phonepe-btn', "PhonePe link is only supported on mobile devices. Please scan the QR Code on your screen to pay.");
        addUpiAppClickValidation('upi-paytm-btn', "Paytm link is only supported on mobile devices. Please scan the QR Code on your screen to pay.");
        addUpiAppClickValidation('upi-pay-app-btn', "Pay via UPI App is only supported on mobile devices. Please scan the QR Code on your screen using GPay, PhonePe, Paytm, or BHIM to complete your payment.");
        
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
