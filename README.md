# 🌌 APOLOTECA — Donde el sonido deja huella

Una web elegante y minimalista que archiva y presenta la colección musical de Apoloteca con amor y dedicación.

## 🎯 Características

- **Diseño elegante**: Fondo negro profundo con acentos naranja vinilo
- **Tipografía artística**: Playfair Display para títulos, Inter para texto
- **Animaciones sutiles**: Ondas sonoras y transiciones suaves
- **100% responsive**: Optimizado para móviles y desktop
- **Modal de video**: Reproductor elegante para cada pieza
- **Navegación mínima**: Solo lo esencial

## 📁 Estructura del proyecto

```
apoloteca/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── logo.png           # Logo de Apoloteca (necesario)
├── videos/            # Carpeta de videos
│   ├── video1.mp4
│   ├── video2.mp4
│   └── ...
└── README.md          # Este archivo
```

## 🚀 Cómo usar

### 1. Configuración inicial

1. **Logo**: Coloca el archivo `logo.png` en la raíz del proyecto
2. **Videos**: Coloca tus videos en la carpeta `videos/`
3. **Servidor local**: Abre la carpeta en un servidor web local

### 2. Personalizar contenido

Edita el archivo `script.js` para personalizar:

```javascript
const videos = [
    {
        id: 1,
        title: "Tu título aquí",
        quote: "Tu cita aquí",
        videoFile: "videos/tu-video.mp4",
        thumbnail: "videos/thumbnails/tu-thumb.jpg",
        tags: ["#Tag1", "#Tag2", "#Tag3"]
    },
    // ... más videos
];
```

### 3. Ejecutar

Abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

## 🎨 Personalización

### Colores
- **Negro principal**: `#000`
- **Blanco**: `#FFF`
- **Naranja vinilo**: `#F28C28`
- **Gris oscuro**: `#1A1A1A`

### Tipografías
- **Títulos**: Playfair Display (Google Fonts)
- **Texto**: Inter (Google Fonts)

### Animaciones
- **Onda sonora**: Animación sutil en la pantalla de inicio
- **Hover cards**: Elevación suave al pasar el mouse
- **Fade in**: Aparición gradual de las tarjetas

## 📱 Responsive Design

- **Desktop**: Grid de 2-3 columnas
- **Tablet**: Grid de 2 columnas
- **Mobile**: Una columna, scroll vertical

## 🔧 Funcionalidades

### Navegación
- **Inicio**: Pantalla de bienvenida con logo
- **Colección**: Grid de videos
- **Instagram**: Link directo al perfil

### Modal de Video
- **Abrir**: Click en cualquier tarjeta
- **Cerrar**: Botón X, click fuera, o tecla Escape
- **Controles**: Reproductor nativo del navegador

### Interacciones
- **Scroll suave**: Navegación entre secciones
- **Hover effects**: Feedback visual en elementos
- **Loading states**: Indicadores de carga

## 🎵 Agregar nuevos videos

1. **Subir video**: Coloca el archivo en `videos/`
2. **Editar script.js**: Agrega el objeto del video al array
3. **Thumbnail**: Opcional, usa emoji 🎵 como fallback

```javascript
{
    id: 7,
    title: "Nuevo video",
    quote: "Descripción del video",
    videoFile: "videos/nuevo-video.mp4",
    tags: ["#Nuevo", "#Tag"]
}
```

## 🌟 Características especiales

- **Placeholder inteligente**: Si no existe el video, muestra un placeholder elegante
- **Error handling**: Manejo gracioso de errores de carga
- **Accesibilidad**: Navegación por teclado y focus management
- **Performance**: Lazy loading y optimizaciones

## 📞 Contacto

Para Denise y Apoloteca:
- Instagram: [@apoloteca_](https://www.instagram.com/apoloteca_/)
- Web: Esta vidriera digital

---

*"Apoloteca no es una colección. Es una forma de sentir."* #   a p o l o t e c a _  
 