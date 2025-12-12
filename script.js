const songsData = [
    { id: 1, video: "https://www.youtube.com/watch?v=pbO7vo-sMQ0", type: "youtube" },
    { id: 2, video: "https://www.youtube.com/watch?v=AQOt75axc0Y&list=RDAQOt75axc0Y&start_radio=1", type: "youtube" },
    { id: 3, video: "https://www.youtube.com/watch?v=XDFLi9gmBp0", type: "youtube" },
    { id: 4, video: "https://www.youtube.com/watch?v=ifCAfAzOBJM&list=RDifCAfAzOBJM&start_radio=1", type: "youtube" },
    { id: 5, video: "https://www.youtube.com/watch?v=N1OufkZqcL8&list=RDN1OufkZqcL8&start_radio=1", type: "youtube" },
    { id: 6, video: "https://www.youtube.com/watch?v=1R6lfE2a8Gw&list=RD1R6lfE2a8Gw&start_radio=1", type: "youtube" },
    { id: 7, video: "https://www.youtube.com/watch?v=p29-4ymTv94", type: "youtube" },
    { id: 8, video: "https://www.youtube.com/watch?v=w-bGMo4q-aA&list=RDw-bGMo4q-aA&start_radio=1", type: "youtube" },
    { id: 9, video: "https://www.youtube.com/watch?v=WWu83Z4pqss&list=RDWWu83Z4pqss&start_radio=1", type: "youtube" },
    { id: 10, video: "https://www.youtube.com/watch?v=95X691E088k&list=RD95X691E088k&start_radio=1", type: "youtube" },
    { id: 11, video: "https://www.youtube.com/watch?v=w2neEwT1jO8&list=RDw2neEwT1jO8&start_radio=1", type: "youtube" },
    { id: 12, video: "https://www.youtube.com/watch?v=an0JKXnnrAY", type: "youtube" },
    { id: 13, video: "https://www.youtube.com/watch?v=eXqBhDAlVCc&list=RDeXqBhDAlVCc&start_radio=1", type: "youtube" },
    { id: 14, video: "https://www.youtube.com/watch?v=Cj4hcXZs3Lc&list=RDCj4hcXZs3Lc&start_radio=1", type: "youtube" },
    { id: 15, video: "https://www.youtube.com/watch?v=FsUa8P-L2Ag&list=RDFsUa8P-L2Ag&start_radio=1", type: "youtube" },
];

const numbersGrid = document.querySelector(".numbers-grid");
const songContainer = document.querySelector(".song-container");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const videoContainer = document.querySelector(".video-container iframe");
const songImage = document.querySelector(".song-image");
const closeBtn = document.querySelector(".close-btn");
const fullscreenContainer = document.getElementById("fullscreenContainer");
const fullscreenVideoContainer = document.getElementById("fullscreenVideoContainer");
const closeFullscreenBtn = document.getElementById("closeFullscreen");

// Tableau pour suivre les numéros utilisés
let usedNumbers = [];

function createNumberCards() {
    songsData.forEach(song => {
        const card = document.createElement("div");
        card.className = "number-card";
        card.textContent = song.id;
        card.dataset.id = song.id;

        card.addEventListener("click", () => {
            // Vérifier si le numéro a déjà été utilisé
            if (usedNumbers.includes(song.id)) {
                return; // Ne rien faire si déjà utilisé
            }

            // Animation de sélection
            card.classList.add("selecting");

            // Afficher la vidéo en plein écran
            showVideoFullscreen(song);

            // Marquer le numéro comme utilisé après un délai
            setTimeout(() => {
                card.classList.remove("selecting");
                card.classList.add("used");
                usedNumbers.push(song.id);
            }, 500);
        });

        numbersGrid.appendChild(card);
    });
}

function showVideoFullscreen(song) {
    // Vider le conteneur vidéo
    fullscreenVideoContainer.innerHTML = "";

    if (song.type === "youtube") {
        // Ouvrir YouTube dans un nouvel onglet
        window.open(song.video, '_blank');
        return;
    } else if (song.type === "local") {
        // Créer élément video pour fichiers locaux
        const video = document.createElement("video");
        video.className = "fullscreen-video local-video";
        video.src = song.video;
        video.controls = true;
        video.autoplay = true;
        video.preload = "metadata";
        
        // Gestion des erreurs de chargement
        video.onerror = function() {
            console.error(`Erreur lors du chargement de la vidéo: ${song.video}`);
            showVideoError(song.id);
        };
        
        // Événement quand la vidéo est prête
        video.onloadedmetadata = function() {
            console.log(`Vidéo ${song.id} chargée avec succès`);
        };
        
        fullscreenVideoContainer.appendChild(video);
    }

    // Afficher le conteneur plein écran
    fullscreenContainer.classList.add("active");
}

function showVideoError(videoId) {
    // Afficher un message d'erreur stylé
    const errorDiv = document.createElement("div");
    errorDiv.className = "video-error";
    errorDiv.innerHTML = `
        <div class="error-content">
            <h3>Vidéo non trouvée</h3>
            <p>La vidéo ${videoId} n'est pas disponible.</p>
            <p>Veuillez placer le fichier <strong>video${videoId}.mp4</strong> dans le dossier <strong>videos/</strong></p>
            <button onclick="closeFullscreen()" class="error-btn">Fermer</button>
        </div>
    `;
    
    // Ajouter les styles pour l'erreur
    errorDiv.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90vw;
        height: 80vh;
        max-width: 1200px;
        max-height: 675px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        color: white;
        text-align: center;
    `;
    
    const errorContent = errorDiv.querySelector('.error-content');
    errorContent.style.cssText = `
        padding: 40px;
    `;
    
    const errorBtn = errorDiv.querySelector('.error-btn');
    errorBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 12px 24px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 20px;
        transition: all 0.3s ease;
    `;
    
    errorBtn.onmouseover = function() {
        this.style.background = 'rgba(255, 255, 255, 0.3)';
        this.style.transform = 'scale(1.05)';
    };
    
    errorBtn.onmouseout = function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
        this.style.transform = 'scale(1)';
    };
    
    fullscreenVideoContainer.appendChild(errorDiv);
}

function closeFullscreen() {
    fullscreenContainer.classList.remove("active");
    // Arrêter la vidéo en vidant le conteneur
    setTimeout(() => {
        fullscreenVideoContainer.innerHTML = "";
    }, 300);
}

// Événements pour fermer le plein écran
closeFullscreenBtn.addEventListener("click", closeFullscreen);

// Fermer en cliquant sur le fond
fullscreenContainer.addEventListener("click", (e) => {
    if (e.target === fullscreenContainer) {
        closeFullscreen();
    }
});

// Fermer avec la touche Échap
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullscreenContainer.classList.contains("active")) {
        closeFullscreen();
    }
});

function showSongDetails(song) {
    songTitle.textContent = song.title || "";
    songArtist.textContent = song.artist || "";
    document.querySelector(".video-container iframe").src = song.video;
    songImage.src = song.image || "";

    songContainer.classList.add("active");
}

// Événements pour l'ancien système (conservé pour compatibilité)
closeBtn.addEventListener("click", () => {
    songContainer.classList.remove("active");
});

songContainer.addEventListener("click", (e) => {
    if (e.target === songContainer) {
        songContainer.classList.remove("active");
    }
});

// Fonction pour ajouter des vidéos locales (exemple d'utilisation)
function addLocalVideo(id, videoPath) {
    const existingSong = songsData.find(song => song.id === id);
    if (existingSong) {
        existingSong.video = videoPath;
        existingSong.type = "local";
    }
}

// Fonction pour vérifier si les vidéos existent
function checkVideoFiles() {
    songsData.forEach(song => {
        if (song.type === "local") {
            // Cette fonction peut être utilisée pour vérifier l'existence des fichiers
            // mais nécessiterait une API côté serveur pour fonctionner
            console.log(`Vidéo configurée: ${song.video}`);
        }
    });
}

// Fonction pour réinitialiser tous les numéros (utile pour les tests)
function resetAllNumbers() {
    usedNumbers = [];
    document.querySelectorAll('.number-card').forEach(card => {
        card.classList.remove('used', 'visited');
    });
}

// Exposer certaines fonctions globalement pour le débogage
window.resetAllNumbers = resetAllNumbers;
window.checkVideoFiles = checkVideoFiles;

// Vérifier les vidéos au chargement
checkVideoFiles();

// Initialiser les cartes de numéros
createNumberCards();
