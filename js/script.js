// Catálogo de productos con imágenes optimizadas (archivos .webp locales)
const products = [
    { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 899, image: "assets/productos/WhatsApp Image 2026-02-21 at 09.47.08.webp" },
    { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 450, image: "assets/productos/WhatsApp Image 2026-02-21 at 09.47.36.webp" },
    { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 299, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.12.39.webp" },
    { id: 4, name: "Producto 4", description: "Descripción del producto 4", price: 180, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.14.18.webp" },
    { id: 5, name: "Producto 5", description: "Descripción del producto 5", price: 1200, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.15.12.webp" },
    { id: 6, name: "Producto 6", description: "Descripción del producto 6", price: 750, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.15.42.webp" },
    { id: 7, name: "Producto 7", description: "Descripción del producto 7", price: 899, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.16.15.webp" },
    { id: 8, name: "Producto 8", description: "Descripción del producto 8", price: 450, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.17.48.webp" },
    { id: 9, name: "Producto 9", description: "Descripción del producto 9", price: 299, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.18.02.webp" },
    { id: 10, name: "Producto 10", description: "Descripción del producto 10", price: 180, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.18.34.webp" },
    { id: 11, name: "Producto 11", description: "Descripción del producto 11", price: 1200, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.18.57.webp" },
    { id: 12, name: "Producto 12", description: "Descripción del producto 12", price: 750, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.19.11.webp" },
    { id: 13, name: "Producto 13", description: "Descripción del producto 13", price: 899, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.19.29.webp" },
    { id: 14, name: "Producto 14", description: "Descripción del producto 14", price: 450, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.19.43.webp" },
    { id: 15, name: "Producto 15", description: "Descripción del producto 15", price: 299, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.20.14.webp" },
    { id: 16, name: "Producto 16", description: "Descripción del producto 16", price: 180, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.20.26.webp" },
    { id: 17, name: "Producto 17", description: "Descripción del producto 17", price: 1200, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.28.15.webp" },
    { id: 18, name: "Producto 18", description: "Descripción del producto 18", price: 750, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.31.49.webp" },
    { id: 19, name: "Producto 19", description: "Descripción del producto 19", price: 899, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.32.45.webp" },
    { id: 20, name: "Producto 20", description: "Descripción del producto 20", price: 450, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.33.41.webp" },
    { id: 21, name: "Producto 21", description: "Descripción del producto 21", price: 299, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.36.40.webp" },
    { id: 22, name: "Producto 22", description: "Descripción del producto 22", price: 180, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.45.31.webp" },
    { id: 23, name: "Producto 23", description: "Descripción del producto 23", price: 1200, image: "assets/productos/WhatsApp Image 2026-02-21 at 10.48.21.webp" },
    { id: 24, name: "Producto 24", description: "Descripción del producto 24", price: 750, image: "assets/productos/WhatsApp Image 2026-02-21 at 12.02.22.webp" },
    { id: 25, name: "Producto 25", description: "Descripción del producto 25", price: 899, image: "assets/productos/WhatsApp Image 2026-02-21 at 12.11.16.webp" },
    { id: 26, name: "Producto 26", description: "Descripción del producto 26", price: 450, image: "assets/productos/WhatsApp Image 2026-02-21 at 12.32.16.webp" },
    { id: 27, name: "Producto 27", description: "Descripción del producto 27", price: 299, image: "assets/productos/WhatsApp Image 2026-02-21 at 12.34.09.webp" },
    { id: 28, name: "Producto 28", description: "Descripción del producto 28", price: 180, image: "assets/productos/WhatsApp Image 2026-02-21 at 13.09.54.webp" },
    { id: 29, name: "Producto 29", description: "Descripción del producto 29", price: 1200, image: "assets/productos/WhatsApp Image 2026-02-21 at 13.44.27.webp" },
    { id: 30, name: "Producto 30", description: "Descripción del producto 30", price: 750, image: "assets/productos/WhatsApp Image 2026-02-25 at 19.03.18.webp" },
    { id: 31, name: "Producto 31", description: "Descripción del producto 31", price: 899, image: "assets/productos/WhatsApp Image 2026-02-25 at 19.03.182.webp" },
    { id: 32, name: "Producto 32", description: "Descripción del producto 32", price: 450, image: "assets/productos/WhatsApp Image 2026-02-25 at 19.05.54.webp" },
    { id: 33, name: "Producto 33", description: "Descripción del producto 33", price: 299, image: "assets/productos/WhatsApp Image 2026-02-25 at 19.05.55.webp" },
    { id: 34, name: "Producto 34", description: "Descripción del producto 34", price: 180, image: "assets/productos/WhatsApp Image 2026-02-25 at 21.02.15.webp" },
    { id: 35, name: "Producto 35", description: "Descripción del producto 35", price: 1200, image: "assets/productos/WhatsApp Image 2026-03-04 at 09.57.14.webp" },
    { id: 36, name: "Producto 36", description: "Descripción del producto 36", price: 750, image: "assets/productos/WhatsApp Image 2026-03-04 at 09.57.16.3jpeg.webp" },
    { id: 37, name: "Producto 37", description: "Descripción del producto 37", price: 899, image: "assets/productos/WhatsApp Image 2026-03-04 at 09.57.16.webp" },
    { id: 38, name: "Producto 38", description: "Descripción del producto 38", price: 450, image: "assets/productos/WhatsApp Image 2026-03-04 at 09.57.17.webp" },
    { id: 39, name: "Producto 39", description: "Descripción del producto 39", price: 299, image: "assets/productos/WhatsApp Image 2026-03-04 at 11.46.49.webp" },
    { id: 40, name: "Producto 40", description: "Descripción del producto 40", price: 180, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.16.54.webp" },
    { id: 41, name: "Producto 41", description: "Descripción del producto 41", price: 1200, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.17.06.webp" },
    { id: 42, name: "Producto 42", description: "Descripción del producto 42", price: 750, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.17.17.webp" },
    { id: 43, name: "Producto 43", description: "Descripción del producto 43", price: 899, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.17.30.webp" },
    { id: 44, name: "Producto 44", description: "Descripción del producto 44", price: 450, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.17.47.webp" },
    { id: 45, name: "Producto 45", description: "Descripción del producto 45", price: 299, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.33.13.webp" },
    { id: 46, name: "Producto 46", description: "Descripción del producto 46", price: 180, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.33.25.webp" },
    { id: 47, name: "Producto 47", description: "Descripción del producto 47", price: 1200, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.33.36.webp" },
    { id: 48, name: "Producto 48", description: "Descripción del producto 48", price: 750, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.53.39.webp" },
    { id: 49, name: "Producto 49", description: "Descripción del producto 49", price: 899, image: "assets/productos/WhatsApp Image 2026-03-06 at 12.54.13.webp" },
    { id: 50, name: "Producto 50", description: "Descripción del producto 50", price: 450, image: "assets/productos/WhatsApp Image 2026-03-06 at 18.00.52.webp" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    updateCart();
    showNotification(`${product.name} agregado al carrito`);
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
    updateCartTotal();
}

function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="text-center py-5" style="color: var(--text-color);"><i class="fas fa-shopping-bag fa-2x mb-3 opacity-50"></i><p>Tu carrito está vacío</p></div>';
        return;
    }
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span style="min-width: 24px; text-align:center;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id}, event)"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    `).join('');
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) { removeFromCart(productId); return; }
    const item = cart.find(item => item.id === productId);
    if (item) { item.quantity = newQuantity; updateCart(); }
}

function removeFromCart(productId, event) {
    if (event) event.stopPropagation();
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Producto eliminado del carrito');
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `Total: $${total}`;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

// Procesar pedido y redirigir a WhatsApp con resumen
function processWhatsAppOrder() {
    if (cart.length === 0) {
        showNotification('❌ Tu carrito está vacío. Agrega productos primero');
        return;
    }

    const fecha = new Date().toLocaleString();
    let mensaje = "🛍️ *NUEVO PEDIDO - LolaShop* 🛍️\n\n";
    mensaje += `📅 *Fecha:* ${fecha}\n`;
    mensaje += `━━━━━━━━━━━━━━━━━━━━━\n`;
    mensaje += `📋 *DETALLE DEL PEDIDO:*\n`;
    
    let subtotal = 0;
    cart.forEach((item, idx) => {
        const totalItem = item.price * item.quantity;
        subtotal += totalItem;
        mensaje += `\n${idx+1}. *${item.name}*\n`;
        mensaje += `   Cantidad: ${item.quantity}  |  Precio unit: $${item.price}\n`;
        mensaje += `   Subtotal: $${totalItem}\n`;
    });
    
    mensaje += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    mensaje += `💰 *TOTAL A PAGAR:* $${subtotal}\n`;
    mensaje += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    mensaje += `✨ *Próximos pasos:* El asesor confirmará disponibilidad y coordinará el pago/envío.\n`;
    mensaje += `🚀 ¡Gracias por comprar en LolaShop!`;
    
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = "3541218523";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
    showNotification('📱 Redirigiendo a WhatsApp con el resumen de tu pedido');
    
    setTimeout(() => {
        if(document.getElementById('cart-sidebar').classList.contains('open')) {
            toggleCart();
        }
    }, 800);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-sparkle"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3500);
}

function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        btn.innerHTML = '<i class="fas fa-moon"></i> <span>Modo Oscuro</span>';
    } else {
        body.setAttribute('data-theme', 'dark');
        btn.innerHTML = '<i class="fas fa-sun"></i> <span>Modo Claro</span>';
    }
}

renderProducts();
updateCart();
