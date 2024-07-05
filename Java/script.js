

//Acción de dar Corazón

// Selecciona todos los botones con la clase 'heart-button'
const heartButtons = document.querySelectorAll('.heart-button');

// Agrega un event listener a cada botón
heartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Selecciona el icono del corazón dentro del botón
        const heartIcon = this.querySelector('.heart-icon');
        // Alterna la clase 'active' en el icono del corazón
        heartIcon.classList.toggle('active');

        // Crea y agrega un nuevo corazón flotante
        const floatingHeart = document.createElement('i');
        floatingHeart.classList.add('fas', 'fa-heart', 'floating-heart');
        this.appendChild(floatingHeart);

        // Elimina el corazón flotante después de que termine la animación
        setTimeout(() => {
            floatingHeart.remove();
        }, 1000);
    });
});

//Acciones de reproducir musica con la interacción de los botones play/pause

// Variable global para rastrear el botón actualmente activo
let currentButton = null;
let currentAudio = null;

// Selecciona todos los botones con la clase 'toggle-button'
const toggleButtons = document.querySelectorAll('.toggle-button');

// Agrega un event listener a cada botón
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        const toggleIcon = this.querySelector('.toggle-icon');

        // Pausar el audio actual si hay uno reproduciéndose
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reinicia el audio
            if (currentButton) {
                const currentIcon = currentButton.querySelector('.toggle-icon');
                currentIcon.classList.remove('fa-pause');
                currentIcon.classList.add('fa-play');
            }
        }

        // Alterna entre play y pause
        if (audio.paused) {
            audio.play();
            toggleIcon.classList.remove('fa-play');
            toggleIcon.classList.add('fa-pause');
            currentAudio = audio;
            currentButton = this;
        } else {
            audio.pause();
            toggleIcon.classList.remove('fa-pause');
            toggleIcon.classList.add('fa-play');
            currentAudio = null;
            currentButton = null;
        }
    });
});