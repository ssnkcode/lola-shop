// ============================================
// SCRIPT PARA CALCULAR PRECIOS AUTOMÁTICAMENTE
// ============================================
// Reglas:
// - Precio original ≤ 10000 → +100% (x2)
// - Precio original > 10000 → +50% (x1.5)
// ============================================

// Variable global para almacenar productos procesados
let productosProcesados = [];

// Función para calcular precio final según reglas
function calcularPrecioFinal(precioOriginal) {
    if (precioOriginal <= 10000) {
        return precioOriginal * 2; // +100%
    } else {
        return precioOriginal * 1.5; // +50%
    }
}

// Función para formatear precio a moneda argentina
function formatearPrecio(precio) {
    return '$' + Math.round(precio).toLocaleString('es-AR') + ',00';
}

// Función principal: cargar JSON, calcular precios y devolver productos
async function cargarYCalcularPrecios() {
    try {
        const response = await fetch('productos/productos.json');
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const productosOriginales = await response.json();
        
        // Procesar cada producto
        productosProcesados = productosOriginales.map(producto => {
            const precioOriginal = producto.precio_original;
            const precioFinal = calcularPrecioFinal(precioOriginal);
            const precioFormateado = formatearPrecio(precioFinal);
            
            // Crear una copia con los precios actualizados
            return {
                ...producto,
                precio_original: precioOriginal,
                precio_final: precioFinal,
                precio_formateado: precioFormateado
            };
        });
        
        console.log(`✅ Precios calculados automáticamente para ${productosProcesados.length} productos`);
        console.log(`📊 Regla aplicada: ≤ $10.000 → +100% | > $10.000 → +50%`);
        
        // Ejemplo de verificación
        const productosEjemplo = productosProcesados.slice(0, 5);
        console.table(productosEjemplo.map(p => ({
            nombre: p.nombre.substring(0, 30),
            original: p.precio_original,
            final: p.precio_final,
            aumento: ((p.precio_final / p.precio_original - 1) * 100).toFixed(0) + '%'
        })));
        
        return productosProcesados;
        
    } catch (error) {
        console.error('❌ Error cargando productos.json:', error);
        return [];
    }
}

// Función para obtener los productos ya calculados (para usar en tu HTML)
function obtenerProductosCalculados() {
    return productosProcesados;
}

// Si quieres exponer las funciones globalmente
window.calcularPrecioFinal = calcularPrecioFinal;
window.cargarYCalcularPrecios = cargarYCalcularPrecios;
window.obtenerProductosCalculados = obtenerProductosCalculados;
window.formatearPrecio = formatearPrecio;

console.log('📦 Script calculate%.js cargado correctamente');