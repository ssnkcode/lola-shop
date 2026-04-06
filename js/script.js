// ==================== TODOS LOS PRODUCTOS VIENEN DEL JSON ====================
let allProducts = [];
let currentPage = 1;
let currentSearchTerm = '';
let currentCategory = '';
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
let lastScrollTopNav = 0;
const itemsPerPage = 24;

function formatearPrecioLocal(price) {
    return '$' + Math.round(price).toLocaleString('es-AR') + ',00';
}

// Cargar productos desde productos/productos.json
function cargarProductos() {
    fetch('productos/productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let categoriasCount = {
                Vasos: 0, Botellas: 0, Parlantes: 0, Auriculares: 0, Lámparas: 0,
                Perfumes: 0, Maquillaje: 0, Cables: 0, Mochilas: 0, Juguetes: 0,
                Hogar: 0, Termos: 0, Accesorios: 0, Tecnología: 0, Mundial: 0, Capibara: 0,
                Papelería: 0, Fiestas: 0, Salud: 0
            };
            
            // USAR calculate%.js para calcular los precios correctamente
            data.forEach(producto => {
                const categoria = producto.categoria;
                
                if (categoriasCount[categoria] !== undefined) {
                    categoriasCount[categoria]++;
                }
                
                // CALCULAR PRECIO FINAL CON LA REGLA CORRECTA
                let precioOriginal = producto.precio_original;
                let precioFinal;
                
                if (typeof calcularPrecioFinal !== 'undefined') {
                    // Usar la función de calculate%.js
                    precioFinal = calcularPrecioFinal(precioOriginal);
                } else {
                    // Fallback por si el script no carga
                    if (precioOriginal <= 10000) {
                        precioFinal = precioOriginal * 2;
                    } else {
                        precioFinal = precioOriginal * 1.5;
                    }
                }
                
                allProducts.push({
                    id: producto.id,
                    name: producto.nombre,
                    price: precioFinal,
                    originalPrice: precioOriginal,
                    image: producto.imagen_local,
                    category: categoria
                });
            });
            
            // Actualizar contadores en los botones
            for (let cat in categoriasCount) {
                const countSpan = document.getElementById(`count-${cat}`);
                if (countSpan) {
                    countSpan.textContent = `${categoriasCount[cat]} productos`;
                }
            }
            
            console.log(`✅ Productos cargados desde productos/productos.json: ${allProducts.length}`);
            console.log(`📊 Regla aplicada: ≤10000 → +100% | >10000 → +50%`);
            init();
        })
        .catch(error => {
            console.error('❌ Error cargando productos.json:', error);
            document.getElementById('products-grid').innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle fa-3x"></i>
                    <h3>Error al cargar productos</h3>
                    <p>No se pudo cargar el archivo productos/productos.json</p>
                    <p style="font-size: 0.85rem;">Verificá que el archivo exista en la carpeta "productos"</p>
                </div>
            `;
            document.getElementById('category-title').innerHTML = `<i class="fas fa-store me-2"></i> Error de carga`;
        });
}

function getFilteredProducts() {
    let filtered = [...allProducts];
    if (currentSearchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
    }
    if (currentCategory && currentCategory !== '') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    return filtered;
}

function formatPrice(price) {
    return '$' + Math.round(price).toLocaleString('es-AR') + ',00';
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderProducts() {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = filtered.slice(start, end);
    
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (pageProducts.length === 0) {
        grid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>No se encontraron productos</h3><p>Intenta con otra búsqueda o categoría</p></div>`;
        const titleEl = document.getElementById('category-title');
        if (titleEl) titleEl.innerHTML = `<i class="fas fa-store me-2"></i> Sin resultados`;
        const paginationEl = document.getElementById('pagination');
        if (paginationEl) paginationEl.style.display = 'none';
        return;
    }
    
    pageProducts.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const priceValue = Math.round(product.price);
        card.innerHTML = `
            <img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=SSNKcode'">
            <div class="product-info">
                <h3 class="product-title">${escapeHtml(product.name)}</h3>
                <div class="product-price">${formatPrice(priceValue)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${escapeHtml(product.name).replace(/'/g, "\\'")}', ${priceValue}, '${product.image}')">
                    <i class="fas fa-shopping-cart"></i> Agregar al carrito
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    const pageInfo = document.getElementById('page-info');
    if (pageInfo) pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
    
    let title = currentCategory ? `Categoría: ${currentCategory}` : (currentSearchTerm ? `Resultados: "${currentSearchTerm}"` : `Todos los Productos`);
    const titleEl = document.getElementById('category-title');
    if (titleEl) titleEl.innerHTML = `<i class="fas fa-store me-2"></i> ${title} (${filtered.length} productos)`;
    
    const paginationEl = document.getElementById('pagination');
    if (paginationEl) paginationEl.style.display = 'flex';
}

function nextPage() {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        currentSearchTerm = searchInput.value.toLowerCase().trim();
    }
    currentCategory = '';
    currentPage = 1;
    renderProducts();
}

function filterByCategory(category) {
    currentCategory = category;
    currentSearchTerm = '';
    currentPage = 1;
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    renderProducts();
}

function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    showNotification(`${name} agregado al carrito`);
}

function saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = totalItems;
    
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (!cartItemsContainer || !cartTotalElement) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart" style="font-size: 3rem; opacity: 0.5;"></i><br>Tu carrito está vacío</div>';
        cartTotalElement.textContent = 'Total: $0';
        return;
    }
    
    let cartHTML = `<button class="clear-cart-btn" onclick="clearCart()"><i class="fas fa-trash-alt"></i> Vaciar carrito</button>`;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-image" loading="lazy" onerror="this.src='https://via.placeholder.com/60x60?text=No+img'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(item.name)}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">${formatPrice(subtotal)}</div>
                <button class="remove-item" onclick="removeItem(${item.id})"><i class="fas fa-times-circle"></i></button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `Total: ${formatPrice(total)}`;
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        const newQ = item.quantity + change;
        if (newQ <= 0) {
            removeItem(id);
        } else {
            item.quantity = newQ;
            saveCart();
            updateCartUI();
        }
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
    showNotification('Producto eliminado');
}

function clearCart() {
    if (confirm('¿Vaciar carrito completamente?')) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('Carrito vaciado');
    }
}

function showNotification(msg) {
    const notification = document.createElement('div');
    notification.textContent = msg;
    notification.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#27ae60; color:white; padding:12px 24px; border-radius:8px; z-index:10000; animation:fadeInOut 2s ease;';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('.theme-toggle i');
    const span = document.querySelector('.theme-toggle span');
    if (document.body.classList.contains('light-mode')) {
        if (icon) icon.className = 'fas fa-moon';
        if (span) span.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
    } else {
        if (icon) icon.className = 'fas fa-sun';
        if (span) span.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    }
}

function processWhatsAppOrder() {
    if (cart.length === 0) {
        alert('🛒 Tu carrito está vacío');
        return;
    }
    
    let message = '🛍️ *NUEVO PEDIDO - SSNKcode* 🛍️\n\n*DETALLE DEL PEDIDO:*\n';
    cart.forEach((item, i) => {
        message += `${i+1}. ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*TOTAL: ${formatPrice(total)}*`;
    message += `\n\n📍 *Local: Santa María*`;
    
    window.open(`https://wa.me/543541682310?text=${encodeURIComponent(message)}`, '_blank');
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTopNav && currentScrollTop > 50) {
        if (navbar) navbar.classList.add('navbar-hidden');
    } else if (currentScrollTop < lastScrollTopNav) {
        if (navbar) navbar.classList.remove('navbar-hidden');
    }
    if (currentScrollTop <= 10) {
        if (navbar) navbar.classList.remove('navbar-hidden');
    }
    lastScrollTopNav = currentScrollTop;
}

function init() {
    renderProducts();
    updateCartUI();
    window.addEventListener('scroll', handleScroll);
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const icon = document.querySelector('.theme-toggle i');
        const span = document.querySelector('.theme-toggle span');
        if (icon) icon.className = 'fas fa-moon';
        if (span) span.textContent = 'Modo Oscuro';
    }
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            filterProducts();
        });
    }
}

// Iniciar carga desde productos/productos.json
cargarProductos();