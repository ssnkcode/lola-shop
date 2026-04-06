# SSNKcode - Tienda Online

## ¿Qué es SSNKcode?

SSNKcode es una tienda en línea desarrollada para un negocio físico ubicado en Santa María, Argentina. Es una plataforma de e-commerce moderna que permite a los clientes explorar un catálogo de más de 600 productos, agregar artículos al carrito y realizar pedidos directamente a través de WhatsApp.

La página está diseñada con un enfoque en la usabilidad móvil, siendo completamente responsiva desde dispositivos de 290px de ancho hasta pantallas de escritorio.

## Especificaciones Técnicas

### Estructura del Proyecto

```
lola-shop/
├── index.html          # Página principal del catálogo
├── css/
│   └── style.css       # Estilos responsivos
├── js/
│   ├── script.js       # Lógica principal
│   └── calculate%.js   # Script de cálculo de precios
├── productos/
│   └── productos.json  # Base de datos de productos (611 productos)
└── assets/
    └── imagenes_productos/  # Imágenes de productos
```

### Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con media queries para responsividad
- **JavaScript (ES6+)** - Lógica del cliente
- **Font Awesome 6.0** - Iconos
- **Bootstrap 5.3** - Framework CSS
- **Google Fonts** - Tipografías (Inter, Playfair Display)
- **API de WhatsApp** - Sistema de pedidos

## Funcionalidades Principales

### 1. Catálogo de Productos (611 productos)

- Carga dinámica desde archivo JSON
- 18 categorías disponibles:
  - **Vasos y Tazas** (32 productos)
  - **Botellas** (14 productos)
  - **Parlantes** (24 productos)
  - **Auriculares** (26 productos)
  - **Lámparas** (47 productos)
  - **Perfumes Árabes** (20 productos)
  - **Maquillaje** (38 productos)
  - **Cables y Cargadores** (54 productos)
  - **Mochilas** (20 productos)
  - **Juguetes** (48 productos)
  - **Hogar** (139 productos)
  - **Termos y Mates** (24 productos)
  - **Accesorios** (37 productos)
  - **Tecnología** (31 productos)
  - **Mundial 2026** (19 productos)
  - **Papelería** (33 productos)
  - **Fiestas** (4 productos)
  - **Salud** (1 producto)

### 2. Sistema de Precios Automático

Aplica reglas de precios según el valor original:
- **Productos ≤ $10,000**: precio final = original × 2 (100% de aumento)
- **Productos > $10,000**: precio final = original × 1.5 (50% de aumento)

Los cálculos se realizan en tiempo real mediante el script `calculate%.js` o como fallback en `script.js`.

### 3. Sistema de Búsqueda y Filtrado

- **Barra de búsqueda**: Encuentra productos por nombre en tiempo real
- **Filtros por categoría**: 18 botones de subcategorías con contador de productos
- **Botón especial**: Acceso rápido a categoría "Mundial 2026" con diseño destacado
- **Paginación**: 24 productos por página con navegación fluida

### 4. Carrito de Compras

- **Panel lateral deslizable**: Se abre desde el derecha con transición suave
- **Gestión de cantidades**: Botones +/- para modificar cantidad
- **Eliminación individual**: Botón para quitar productos
- **Persistencia**: Usa `sessionStorage` para mantener el carrito durante la sesión
- **Resumen en tiempo real**: Muestra subtotales y total general

### 5. Sistema de Pedidos por WhatsApp

- **Generación automática**: Crea mensaje formateado con todos los productos
- **Información incluida**:
  - Nombre del negocio (SSNKcode)
  - Lista de productos con cantidades y precios
  - Total general
  - Ubicación del local (Santa María)
- **Envío directo**: Abre WhatsApp con el mensaje listo para enviar

### 6. Sistema de Temas

- **Modo Oscuro** (por defecto): Fondo #1a1a1a con acentos #ff6b6b
- **Modo Claro**: Fondo #f9f9f9 con estilos adaptados
- **Persistencia**: La preferencia se guarda en `localStorage`
- **Transición suave**: Animaciones de 0.3s en cambios de tema

### 7. Diseño Responsivo

Puntos de rotura implementados:
- **Desktop**: > 900px (grid de 5 columnas)
- **Tablet**: 600-900px (grid de 3 columnas)
- **Móvil grande**: 380-600px (grid de 2 columnas)
- **Móvil pequeño**: 320-380px (grid de 1 columna, elementos optimizados)
- **Móvil ultra pequeño**: 290-320px (grid de 2 columnas comprimido)

### 8. Navbar Inteligente

- **Ocultación al hacer scroll**: Desaparece al hacer scroll hacia abajo
- **Reaparece al hacer scroll hacia arriba**: Facilita navegación
- **Barra de navegación fija**: Siempre visible en desktop
- **Diseño adaptativo**: Se reorganiza verticalmente en móvil

## Estructura de Datos

### Producto (JSON)

```json
{
  "id": 1,
  "nombre": "Nombre del producto",
  "precio_original": 5000,
  "precio_final": 10000,
  "precio_formateado": "$10.000,00",
  "categoria": "Hogar",
  "categoria_nombre": "Hogar",
  "imagen_local": "assets/imagenes_productos/imagen.jpg",
  "descripcion": "Descripción breve",
  "stock": 10
}
```

### Producto (JavaScript)

```javascript
{
  id: 1,
  name: "Nombre del producto",
  price: 10000,
  originalPrice: 5000,
  image: "ruta/imagen.jpg",
  category: "Hogar"
}
```

## Características de UX/UI

### Paleta de Colores

- **Modo Oscuro**:
  - Fondo: #1a1a1a
  - Navbar/Cards: #2d2d2d
  - Input/Botones: #3d3d3d
  - Acento primario: #ff6b6b (rojo/coral)
  - Acento secundario: #ff8e8e
  - Texto: #f0f0f0
  - Texto secundario: #aaa

- **Modo Claro**:
  - Fondo: #f9f9f9
  - Navbar/Cards: #ffffff
  - Input: #ffffff
  - Footer: #2c3e50
  - Acentos iguales al modo oscuro

### Tipografías

- **Títulos principales**: Playfair Display (serif)
- **Cuerpo de texto**: Inter (sans-serif)
- **Pesos utilizados**: 300, 400, 500, 600, 700

### Animaciones y Transiciones

- Transiciones suaves de 0.3s en botones y tarjetas
- Efecto hover con transform scale en productos
- Animación de fade en notificaciones
- Slide-in del carrito lateral

## Contacto y Redes

- **WhatsApp**: 3541-682310
- **Ubicación**: Santa María, Argentina
- **Botón flotante**: Acceso rápido a WhatsApp en todas las páginas
- **Footer**: Información de contacto y enlace para solicitar desarrollo web

## Future Updates y Mantenimiento

### Posibles Mejuras Futuras

1. **Base de datos**: Migrar de JSON a API REST o base de datos
2. **Autenticación**: Sistema de usuarios y pedidos
3. **Pasarela de pagos**: Integración con MercadoPago
4. **Panel de administración**: Gestión de productos y pedidos
5. **Análisis**: Google Analytics para métricas de uso

### Mantenimiento

- Actualizar `productos.json` periódicamente con nuevos productos
- Mantener actualizadas las dependencias (Bootstrap, Font Awesome)
- Verificar compatibilidad con nuevos navegadores

## Licencia

© 2026 SSNKcode. Todos los derechos reservados.

Desarrollado por SSNKcode - Soluciones Digitales

---

¿Querés una página similar para tu negocio? Contactanos al WhatsApp: 3541-682310