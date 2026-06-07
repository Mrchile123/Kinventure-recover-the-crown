// LISTAS DE CAPÍTULOS DE MAICOL ADVENTURE
const temporada1Episodios = [
    { title: "Episodio 1", file: "Temporada1/Ep 1 T1.mp4" },
    { title: "Episodio 2", file: "Temporada1/Ep 2 t1.mp4" },
    { title: "Episodio 3", file: "Temporada1/Ep 3 t1.mp4" },
    { title: "Episodio 4", file: "Temporada1/Ep 4 t1.mp4" },
    { title: "Episodio 5", file: "Temporada1/Ep 5 t1.mp4" },
    { title: "Episodio 6", file: "Temporada1/Ep 6 t1.mp4" },
    { title: "Episodio 7", file: "Temporada1/ep 7 t1.mp4" },
    { title: "Episodio 8", file: "Temporada1/Ep 8 t1.mp4" },
    { title: "Episodio 9", file: "Temporada1/Ep 9 t1.mp4" },
    { title: "Episodio 10", file: "Temporada1/ep 10 t1.mp4" }
];

const temporada2Episodios = [
    { title: "Episodio 1", file: "Temporada2/Ep1 t2.mp4" },
    { title: "Episodio 2", file: "Temporada2/Ep 2 t2.mp4" }, // Animado en enero en Quik/Wick Editor
    { title: "Episodio 3", file: "Temporada2/Ep 3 t2.mp4" }, // Desde aquí en Flipaclip móvil
    { title: "Episodio 4", file: "Temporada2/Ep 4 t2.mp4" },
    { title: "Episodio 5", file: "Temporada2/Ep 5 T2.mp4" },
    { title: "Episodio 6", file: "Temporada2/Ep 6 T2.mp4" },
    { title: "Episodio 7", file: "Temporada2/Ep 7 t2.mp4" }
];

// INICIALIZADOR DEL DOM
window.addEventListener('DOMContentLoaded', () => {
    renderEpisodes('slider-t1', temporada1Episodios, 'T1');
    renderEpisodes('slider-t2', temporada2Episodios, 'T2');
});

// FUNCIÓN DE RENDERIZACIÓN CON INTEGRACIÓN DE TU PÓSTER COMO THUMBNAIL
function renderEpisodes(containerId, data, tag) {
    const container = document.getElementById(containerId);
    if (!container) return;

    data.forEach((ep, index) => {
        const card = document.createElement('div');
        card.className = 'episode-card';
        card.onclick = () => playVideo(ep.file, `${tag} - ${ep.title}`);

        card.innerHTML = `
            <div class="thumbnail-poster-bg"></div>
            <div class="card-overlay">
                <div class="card-text-wrapper">
                    <div class="episode-number">${tag} • CAPÍTULO ${index + 1}</div>
                    <div class="episode-name">${ep.title}</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// DESPLAZAMIENTO HORIZONTAL DEL SLIDER
function scrollSlider(idSuffix, direction) {
    const slider = document.getElementById(`slider-${idSuffix}`);
    if (slider) {
        const scrollAmount = 260 * 2; // Desplaza 2 tarjetas por pulsación
        slider.scrollLeft += (direction * scrollAmount);
    }
}

// CONTROL DE PESTAÑAS (NAVBAR)
function switchSection(sectionId, element) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`section-${sectionId}`).classList.add('active');
}

// SISTEMA REPRODUCTOR DE VIDEO (MODAL INTERNO)
function playVideo(videoPath, title) {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('main-video-player');
    const titleElement = document.getElementById('modal-video-title');

    if (modal && player) {
        titleElement.innerText = `Reproduciendo: ${title}`;
        player.src = videoPath;
        modal.style.display = 'block';
        player.play().catch(err => {
            console.log("Interacción de usuario requerida para reproducir automáticamente.");
        });
    }
}

function closePlayer() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('main-video-player');

    if (modal && player) {
        player.pause();
        player.src = ""; // Corta el streaming y libera la memoria en el teléfono
        modal.style.display = 'none';
    }
}
