# LolaShop - Tienda Online

## ¿Qué es LolaShop?

LolaShop es una tienda en línea desarrollada para un negocio físico ubicado en Cosquín, Argentina. Es una plataforma de e-commerce que permite a los clientes explorar el catálogo de productos, agregar artículos al carrito y realizar pedidos directamente a través de WhatsApp.

## Funcionalidades Principales

### 1. Visualización de Productos
- Muestra todos los productos disponibles cargados desde un archivo JSON
- Presenta los productos en una cuadrícula responsiva con imágenes, nombres y precios
- Implementa paginación mostrando 24 productos por página

### 2. Sistema de Precios Automático
- Aplica reglas de precios según el valor original:
  - Productos de hasta $10,000: precio final = original × 2
  - Productos mayores a $10,000: precio final = original × 1.5
- Los cálculos se realizan mediante un script externo (calculate%.js)

### 3. Búsqueda y Filtrado
- Barra de búsqueda para encontrar productos por nombre
- Filtros por categoría mediante botones específicos:
  - Vasos y Tazas, Botellas, Parlantes, Auriculares, Lámparas
  - Perfumes Árabes, Maquillaje, Cables y Cargadores, Mochilas
  - Juguetes, Hogar, Termos y Mates, Accesorios, Tecnología
  - Mundial 2026 (productos temáticos)
- Cada categoría muestra el contador de productos disponibles

### 4. Carrito de Compras
- Panel lateral que se desliza desde la derecha
- Permite agregar productos con diferentes cantidades
- Modificar cantidades o eliminar productos individualmente
- Vaciar el carrito completamente
- El carrito se guarda durante la sesión de navegación:
  - Al refrescar la página (F5) el carrito mantiene los productos
  - Al cerrar la pestaña o el navegador, el carrito se vacía automáticamente

### 5. Finalización de Pedido
- Botón "Finalizar Compra" que genera un mensaje automático
- Envía el resumen del pedido a través de WhatsApp
- Incluye: detalle de productos, cantidades, subtotales y total general
- El mensaje se envía al número de WhatsApp del negocio

### 6. Personalización
- Modo oscuro / modo claro (la preferencia se guarda)
- Barra de navegación que se oculta al hacer scroll hacia abajo
- Diseño responsivo que se adapta a dispositivos móviles, tablets y escritorio

### 7. Información de Contacto
- Botón flotante de WhatsApp para contacto directo
- Footer con información de ubicación y contacto
- Enlace para solicitar desarrollo de páginas similares

## Estructura de Datos

Los productos se cargan desde el archivo `productos/productos.json` con la siguiente estructura:
```json
{
  "id": 1,
  "nombre": "Nombre del producto",
  "precio_original": 5000,
  "imagen_local": "ruta/imagen.jpg",
  "categoria": "Vasos"
}
