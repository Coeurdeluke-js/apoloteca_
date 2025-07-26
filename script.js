// Datos de videos de Apoloteca con descripciones reales de Instagram
const videos = [
    {
        id: 1,
        title: "God of War - Un videojuego que me hizo sentir todo",
        quote: "Hoy modo ñoño. Un videojuego que en su espectacularidad, acompañado de canciones excelentes me hicieron sentir tensión, tristeza, emoción, felicidad y demás.",
        videoFile: "videos/1.mp4",
        tags: ["#GOW", "#rdr2", "#reddeadredemptionedit", "#arthurmorgan", "#bandasonora", "#videojuegos🎮"]
    },
    {
        id: 2,
        title: "Abbey Road y Let it Be - Mi video favorito",
        quote: "Un poco de Abbey Road y Let it Be. Es mi video favorito hasta ahora 🙂 si te gustó, me ayudas con una likeada y una compartida? 🎧😄",
        videoFile: "videos/2.mp4",
        tags: ["#vynil", "#vinilos", "#bestles", "#abbeyroad", "#letitbe"]
    },
    {
        id: 3,
        title: "Red Hot Chili Peppers - 🛐",
        quote: "🛐",
        videoFile: "videos/3.mp4",
        tags: ["#vynil", "#vynilcollection", "#rhcp", "#johnfrusciante", "#flea", "#anthonykiedis", "#chadsmith", "#vinilos"]
    },
    {
        id: 4,
        title: "Charly García - Nos ponemos de pie 🗿",
        quote: "Hoy en la Apoloteca nos ponemos de pie 🗿",
        videoFile: "videos/4.mp4",
        tags: ["#vinilos", "#vynil", "#charlygarcia", "#clicsmodernos", "#vynilrecords"]
    },
    {
        id: 5,
        title: "RHCP - Mención especial a los B-sides",
        quote: "Mención especial a los B-sides Quixoticelixer y Gong Li. Y a Around The World que la llevo tatuada en mi brazo",
        videoFile: "videos/5.mp4",
        tags: ["#vynil", "#vinilo", "#redhotchilipeppers", "#rhcp"]
    },
    {
        id: 6,
        title: "Los Beatles - Antes los músicos no solían escribir sus propias canciones",
        quote: "Antes los músicos no solían escribir sus propias canciones, los Beatles cambiaron eso. (El esfuerzo sobrehumano para que el video no me dure 5 minutos) Beatles > todo lo demás",
        videoFile: "videos/6.mp4",
        tags: ["#vynil", "#vinilos", "#beatles", "#beatlesforever", "#vynilcollection"]
    },
    {
        id: 7,
        title: "John Frusciante - El vinilo más especial",
        quote: "El primer video tenía que ser sobre el vinilo más especial que tengo hasta ahora. Te quiero mucho John Frusciante",
        videoFile: "videos/7.mp4",
        tags: ["#vinilos", "#vinylcollection", "#vinyl", "#johnfrusciante", "#frusciante"]
    }
];

// Variables globales
let currentVideo = null;
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close');
const videoGrid = document.getElementById('videoGrid');

// Función para hacer scroll suave a la colección
function scrollToCollection() {
    const collectionSection = document.getElementById('coleccion');
    collectionSection.scrollIntoView({ behavior: 'smooth' });
}

// Función para crear una tarjeta de video
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-video-id', video.id);
    
    // Crear thumbnail con preview del video
    const thumbnail = document.createElement('div');
    thumbnail.className = 'video-thumbnail';
    
    // Crear elemento de video oculto para generar preview
    const previewVideo = document.createElement('video');
    previewVideo.src = video.videoFile;
    previewVideo.muted = true;
    previewVideo.preload = 'metadata';
    previewVideo.style.display = 'none';
    
    // Canvas para capturar frame del video
                        const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    // Use 9:16 aspect ratio for vertical videos
                    canvas.width = 360;
                    canvas.height = 640;
    
    // Función para generar preview cuando el video esté listo
    previewVideo.addEventListener('loadeddata', function() {
        try {
            // Intentar capturar frame en el segundo 1 del video
            previewVideo.currentTime = 1;
        } catch (e) {
            // Si falla, usar el primer frame
            previewVideo.currentTime = 0;
        }
    });
    
                        previewVideo.addEventListener('seeked', function() {
                        try {
                            // Draw the video frame maintaining aspect ratio
                            const videoAspect = previewVideo.videoWidth / previewVideo.videoHeight;
                            const canvasAspect = canvas.width / canvas.height;
                            
                            let drawWidth, drawHeight, offsetX, offsetY;
                            
                            if (videoAspect > canvasAspect) {
                                // Video is wider than canvas
                                drawHeight = canvas.height;
                                drawWidth = canvas.height * videoAspect;
                                offsetX = (canvas.width - drawWidth) / 2;
                                offsetY = 0;
                            } else {
                                // Video is taller than canvas (9:16 case)
                                drawWidth = canvas.width;
                                drawHeight = canvas.width / videoAspect;
                                offsetX = 0;
                                offsetY = 0; // Focus on top portion
                            }
                            
                            ctx.drawImage(previewVideo, offsetX, offsetY, drawWidth, drawHeight);
                            const imageData = canvas.toDataURL('image/jpeg', 0.8);
                            thumbnail.style.backgroundImage = `url(${imageData})`;
                            thumbnail.style.backgroundSize = 'cover';
                            thumbnail.style.backgroundPosition = 'center top'; // Focus on top for 9:16
                        } catch (e) {
            // Si falla la captura, usar emoji como fallback
            const videoEmojis = {
                1: '🎮', // God of War
                2: '🎸', // Beatles
                3: '🛐', // RHCP
                4: '🗿', // Charly García
                5: '🎵', // RHCP B-sides
                6: '🎤', // Beatles
                7: '💿'  // John Frusciante
            };
            const emoji = videoEmojis[video.id] || '🎵';
            thumbnail.innerHTML = `<div style="font-size: 4rem; color: #F28C28; text-shadow: 0 4px 20px rgba(242, 140, 40, 0.3);">${emoji}</div>`;
        }
    });
    
    // Agregar overlay con icono de play
    const playOverlay = document.createElement('div');
    playOverlay.className = 'play-overlay';
    playOverlay.innerHTML = '<div class="play-icon">▶</div>';
    
    thumbnail.appendChild(previewVideo);
    thumbnail.appendChild(playOverlay);
    
    // Información del video
    const info = document.createElement('div');
    info.className = 'video-info';
    
    const title = document.createElement('h3');
    title.className = 'video-title';
    title.textContent = video.title;
    
    const quote = document.createElement('p');
    quote.className = 'video-quote';
    quote.textContent = `"${video.quote}"`;
    
    const tags = document.createElement('div');
    tags.className = 'video-tags';
    video.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tags.appendChild(tagElement);
    });
    
    info.appendChild(title);
    info.appendChild(quote);
    info.appendChild(tags);
    
    card.appendChild(thumbnail);
    card.appendChild(info);
    
    // Event listener para abrir el modal
    card.addEventListener('click', () => openVideoModal(video));
    
    return card;
}

// Función para abrir el modal de video
function openVideoModal(video) {
    currentVideo = video;
    modalVideo.src = video.videoFile;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
    
    // Enfocar el modal para accesibilidad
    modalVideo.focus();
}

// Función para cerrar el modal
function closeVideoModal() {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
    document.body.style.overflow = 'auto';
    currentVideo = null;
}

// Función para cargar todos los videos
function loadVideos() {
    videoGrid.innerHTML = ''; // Limpiar grid
    
    videos.forEach(video => {
        const card = createVideoCard(video);
        videoGrid.appendChild(card);
    });
}

// Función para extraer colores del logo
function extractLogoColors() {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = logo.naturalWidth;
    canvas.height = logo.naturalHeight;
    
    ctx.drawImage(logo, 0, 0);
    
    try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Analizar colores principales
        const colors = {};
        const colorCounts = {};
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            
            // Solo considerar píxeles no transparentes
            if (a > 128) {
                const colorKey = `${r},${g},${b}`;
                colorCounts[colorKey] = (colorCounts[colorKey] || 0) + 1;
            }
        }
        
        // Encontrar los colores más frecuentes
        const sortedColors = Object.entries(colorCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5);
        
        // Aplicar colores al diseño
        if (sortedColors.length > 0) {
            const primaryColor = sortedColors[0][0].split(',');
            const accentColor = sortedColors[1] ? sortedColors[1][0].split(',') : primaryColor;
            
            // Convertir a formato CSS
            const primaryRGB = `rgb(${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[2]})`;
            const accentRGB = `rgb(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]})`;
            
            // Aplicar colores dinámicamente
            document.documentElement.style.setProperty('--primary-color', primaryRGB);
            document.documentElement.style.setProperty('--accent-color', accentRGB);
            
            console.log('Colores extraídos del logo:', { primary: primaryRGB, accent: accentRGB });
        }
    } catch (e) {
        console.log('No se pudieron extraer colores del logo:', e);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Extraer colores del logo cuando esté cargado
    const logo = document.querySelector('.logo');
    if (logo.complete) {
        extractLogoColors();
    } else {
        logo.addEventListener('load', extractLogoColors);
    }
    
    // Cargar videos al iniciar
    loadVideos();
    
    // Event listener para cerrar modal con el botón X
    closeBtn.addEventListener('click', closeVideoModal);
    
    // Event listener para cerrar modal haciendo clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // Event listener para cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeVideoModal();
        }
    });
    
    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animación de aparición para las tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar las tarjetas de video
    document.querySelectorAll('.video-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Función para manejar errores de video
modalVideo.addEventListener('error', function() {
    console.log('Error al cargar el video');
    // Mostrar mensaje de error elegante
    const errorMessage = document.createElement('div');
    errorMessage.style.color = '#F28C28';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.padding = '2rem';
    errorMessage.textContent = 'Video no disponible en este momento.';
    modalVideo.parentNode.appendChild(errorMessage);
});

// Función para pausar video cuando se cierra el modal
modalVideo.addEventListener('ended', function() {
    // Opcional: cerrar modal automáticamente cuando termina el video
    // closeVideoModal();
});

// Función para manejar la navegación activa
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Event listener para actualizar navegación activa
window.addEventListener('scroll', updateActiveNav);

// Función para crear placeholder de video si no hay archivos reales
function createVideoPlaceholder(video) {
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
        width: 100%;
        height: 200px;
        background: linear-gradient(45deg, #1A1A1A, #2A2A2A);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F28C28;
        font-size: 1.5rem;
        font-family: 'Inter', sans-serif;
    `;
    placeholder.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🎵</div>
            <div>${video.title}</div>
        </div>
    `;
    return placeholder;
}

// Función para verificar si los archivos de video existen
async function checkVideoFile(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

// Función para cargar videos con verificación de archivos
async function loadVideosWithCheck() {
    videoGrid.innerHTML = '<div class="loading">Cargando colección...</div>';
    
    const videoCards = [];
    
    for (const video of videos) {
        const card = createVideoCard(video);
        
        // Verificar si el archivo de video existe
        const videoExists = await checkVideoFile(video.videoFile);
        if (!videoExists) {
            // Si no existe el video, crear un placeholder
            const placeholder = createVideoPlaceholder(video);
            card.querySelector('.video-thumbnail').appendChild(placeholder);
        }
        
        videoCards.push(card);
    }
    
    videoGrid.innerHTML = '';
    videoCards.forEach(card => videoGrid.appendChild(card));
}

// Inicializar con verificación de archivos
document.addEventListener('DOMContentLoaded', function() {
    loadVideosWithCheck();
    // ... resto del código de inicialización
}); 