//Acción de reproducir y pausar un audio
let currentAudio = null;
const containers = document.querySelectorAll('.btn-play');

containers.forEach(container => {
    container.addEventListener('click', function () {
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);

        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        if (audio.paused) {
            audio.play();
            currentAudio = audio;
        } else {
            audio.pause();
            currentAudio = null;
        }
    });
});


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