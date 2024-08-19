const songs = [
    {
        songSrc: '../songs/CallMeIt.mp3',
        name: 'Call me it',
        artistName: 't+pazolite',
        mapper: 'Fort',
        likes: '233',
        play: '6,9 M',
        fecha: '13 de nov. 2016',
        img: '../imagenes/CallmeIt.jpg',
        category: 'Amado',
        isFavorite: false,
        id: "audio1"
    },
    {
        songSrc: '../songs/BreakingTheHabit.mp3',
        name: 'Breaking the Habit',
        artistName: 'Linkin Park',
        mapper: 'saggi',
        likes: '1,1 mil',
        play: '833,1 mil',
        fecha: '3 de jul. 2022',
        img: '../imagenes/BreakingTheHabit.png',
        category: 'Amado',
        isFavorite: false,
        id: "audio2"
    },
    {
        songSrc: '../songs/CloserToTheEdge.mp3',
        name: 'Closer to the Edge',
        artistName: '30 Seconds to Mars',
        mapper: 'Mao',
        likes: '68',
        play: '66,8 mil',
        fecha: '11 de nov. 2018',
        img: '../imagenes/ClosertotheEdge.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio3"
    },
    {
        songSrc: '../songs/AboutMe.mp3',
        name: 'About Me',
        artistName: 'Koven x ROY KNOX',
        mapper: 'we vibing',
        likes: '15',
        play: '10,6 mil',
        fecha: '4 de dic. 2020',
        img: '../imagenes/AboutMe.jpg',
        category: 'Abandonado',
        isFavorite: false,
        id: "audio4"
    },
    {
        songSrc: '../songs/Royalty.mp3',
        name: 'Royalty (feat. Neoni) (Wiguez & Alltair Remix)',
        artistName: 'Egzod & Maestro Chives',
        mapper: 'Mao',
        likes: '623',
        play: '369 mil',
        fecha: '12 de mar. 2023',
        img: '../imagenes/Royalty.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio5"
    },
    {
        songSrc: '../songs/psycho.mp3',
        name: 'Psycho',
        artistName: 'Red Velvet',
        mapper: 'Chibitania',
        likes: '505',
        play: '323,3 mil',
        fecha: '2 de jun. 2024',
        img: '../imagenes/psycho.jpg',
        category: 'Amado',
        isFavorite: false,
        id: "audio6"
    },
    {
        songSrc: '../songs/theone.mp3',
        name: 'The One That Got Away (Sped Up Vers.)',
        artistName: 'Katy Perry',
        mapper: 'Alucid',
        likes: '6',
        play: '4,6 mil',
        fecha: '25 de sep. 2022',
        img: '../imagenes/TheOne.jpg',
        category: 'Abandonado',
        isFavorite: false,
        id: "audio8"
    },
    {
        songSrc: '../songs/want u back.mp3',
        name: 'Want U Back',
        artistName: 'Cher Lloyd',
        mapper: 'Skubi',
        likes: '39',
        play: '9,5 mil',
        fecha: '9 de may. 2024',
        img: '../imagenes/WantUBack.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio9"
    },
    {
        songSrc: '../songs/telepatia.mp3',
        name: 'telepatia',
        artistName: 'Kali Uchis',
        mapper: '-Magic-',
        likes: '1,6 mil',
        play: '590,9 mil',
        fecha: '14 de ene. 2022',
        img: '../imagenes/telepatia.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio10"
    },
    {
        songSrc: '../songs/monsters.mp3',
        name: 'Monsters',
        artistName: 'NOA',
        mapper: 'Shifu Touka',
        likes: '1,8 mil',
        play: '2,8 M',
        fecha: '22 de ago. 2018',
        img: '../imagenes/monsters.jpg',
        category: 'Amado',
        isFavorite: false,
        id: "audio11"
    },
    {
        songSrc: '../songs/dadada.mp3',
        name: 'Talking Body',
        artistName: 'Tove Lo',
        mapper: 'Vali',
        likes: '252',
        play: '309,5 mil',
        fecha: '23 de nov. 2018',
        img: '../imagenes/bodies.png',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio12"
    },
    {
        songSrc: '../songs/lifesux.mp3',
        name: 'Life Sux (Sped up Ver.)',
        artistName: 'Leah Kate',
        mapper: 'Log Off Now',
        likes: '1 mil',
        play: '2,4 M',
        fecha: '21 de nov. 2023',
        img: '../imagenes/lifesux.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio13"
    },
    {
        songSrc: '../songs/masfuerte.mp3',
        name: 'Mas Fuerte',
        artistName: 'Greeicy',
        mapper: '-Sh1n1-',
        likes: '73',
        play: '117 mil',
        fecha: '7 de jun. 2019',
        img: '../imagenes/FuerteBG.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio14"
    },
    {
        songSrc: '../songs/running.mp3',
        name: 'Running With The Wild Things',
        artistName: 'Against The Current',
        mapper: 'Basensorex',
        likes: '138',
        play: '212,1 mil',
        fecha: '28 de nov. 2023',
        img: '../imagenes/running.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio15"
    },
    {
        songSrc: '../songs/bringme.mp3',
        name: 'Bring Me To Life',
        artistName: 'Evanescence',
        mapper: 'Aranel',
        likes: '19',
        play: '9,1 mil',
        fecha: '18 de mar. 2023',
        img: '../imagenes/bringme.png',
        category: 'Abandonado',
        isFavorite: false,
        id: "audio16"
    },
    {
        songSrc: '../songs/By Your Side.mp3',
        name: 'By Your Side (feat. RAYE) (Cut Ver.)',
        artistName: 'Jonas Blue',
        mapper: 'Sani_',
        likes: '64',
        play: '23,7 mil',
        fecha: '20 de may. 2024',
        img: '../imagenes/AnimeCouple.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio17"
    },
    {
        songSrc: '../songs/Legends Never Die.mp3',
        name: 'Legends Never Die',
        artistName: 'League Of Legends',
        mapper: 'Kalibe',
        likes: '7,7 mil',
        play: '6,5 M',
        fecha: '24 de oct. 2017',
        img: '../imagenes/LOL.png',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio18"
    },
    {
        songSrc: '../songs/Medicine.mp3',
        name: 'Medicine (Sound Remedy Remix)',
        artistName: 'Daughter',
        mapper: 'iiBehe',
        likes: '9',
        play: '2,3 mil',
        fecha: '23 de sep. 2022',
        img: '../imagenes/medicine.jpg',
        category: 'Abandonado',
        isFavorite: false,
        id: "audio19"
    },
    {
        songSrc: '../songs/Summer Winter.mp3',
        name: "summer's winter",
        artistName: 'zts',
        mapper: 'Ratarok',
        likes: '103',
        play: '10 mil',
        fecha: '14 de sep. 2023',
        img: '../imagenes/SummerWinter.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio20"
    },
    {
        songSrc: '../songs/AFoolMoonNight.mp3',
        name: "A Fool Moon Night",
        artistName: 'The Koxx',
        mapper: 'Le Mirai',
        likes: '400',
        play: '332,2 mil',
        fecha: '25 de oct. 2021',
        img: '../imagenes/AFool.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio21"
    },
    {
        songSrc: '../songs/memove.mp3',
        name: "Make Me Move (James Roche Remix)",
        artistName: 'Culture Code feat. Karra',
        mapper: 'FruityEnLoops',
        likes: '15',
        play: '17,6 mil',
        fecha: '10 de jul. 2018',
        img: '../imagenes/makememove.jpg',
        category: 'Abandonado',
        isFavorite: false,
        id: "audio22"
    },
    {
        songSrc: '../songs/EyesHalfClosed.mp3',
        name: "Eyes Half Closed",
        artistName: 'Crywolf',
        mapper: 'L3NNy',
        likes: '353',
        play: '331,6 mil',
        fecha: '19 de sep. 2020',
        img: '../imagenes/EyesHalfClosed.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio23"
    },
    {
        songSrc: '../songs/DandelionsSpeedUp.mp3',
        name: "Dandelions (Sped Up Ver.)",
        artistName: 'Ruth B.',
        mapper: 'Roupus',
        likes: '247',
        play: '122,4 mil',
        fecha: '14 de jul. 2023',
        img: '../imagenes/Dandelions.png',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio24"
    },
    {
        songSrc: '../songs/United.mp3',
        name: "United (L.A.O.S Remix)",
        artistName: 'Our Stolen Theory',
        mapper: 'Hivie',
        likes: '282',
        play: '384,1 mil',
        fecha: '21 de dic. 2022',
        img: '../imagenes/United.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio25"
    },
    {
        songSrc: '../songs/EyesWithShut.mp3',
        name: "Eyes Wide Shut (with Avril Lavigne)",
        artistName: 'ILLENIUM',
        mapper: 'browiec',
        likes: '292',
        play: '404,9 mil',
        fecha: '12 de jul. 2023',
        img: '../imagenes/EyeswithShut.png',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio26"
    },
    {
        songSrc: '../songs/SomeKindOfMagic.mp3',
        name: "Some Kind of Magic (Feat. MYZICA)",
        artistName: 'LVTHER',
        mapper: 'gary00737',
        likes: '1,2 mil',
        play: '4,7 M',
        fecha: '23 de oct. 2018',
        img: '../imagenes/somekind.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio27"
    },
    {
        songSrc: '../songs/AngelwithAShotgun.mp3',
        name: "Angel With a Shotgun (Speed Up Ver.)",
        artistName: 'The Cab',
        mapper: 'Sotarks',
        likes: '2,2 mil',
        play: '18,7 M',
        fecha: '29 de oct. 2020',
        img: '../imagenes/AngelWithAShotgun.png',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio28"
    },
    {
        songSrc: '../songs/seeyou.mp3',
        name: "I'll See You Again (feat. Chi Chi)",
        artistName: 'S3RL',
        mapper: 'Gero',
        likes: '2,8 mil',
        play: '5,4 M',
        fecha: '2 de ago. 2018',
        img: '../imagenes/seeyou.jpg',
        category: 'Clasificado',
        isFavorite: false,
        id: "audio29"
    },
];

//GeneraNDO las cards usando JS

const containerCards = document.getElementById('contentCards');

// Variable global para rastrear el botón actualmente activo
let currentButton = null;
let currentAudio = null;

function generateCards(filteredSongs) {
    containerCards.innerHTML = '';

    filteredSongs.forEach((song, index) => {
        const card = document.createElement("div");
        card.classList.add("card-box");

        // Asignar la imagen de fondo y el degradado
        card.style.backgroundImage = `linear-gradient(rgba(169, 153, 153, 0.3), rgba(182, 171, 171, 0.2)), url(${song.img})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";

        card.innerHTML = `
            <div class="text">
                <div class="name-song">
                    <div class="name">
                        <h2>${song.name}</h2>
                    </div>
                    <p>de ${song.artistName}</p>
                </div>
                <div class="mapper">
                    <p>Mapeado por <span class="acento">${song.mapper}</span></p>
                </div>
                <div class="plays">
                    <div>
                        <p><i class="fa-regular fa-heart"></i> ${song.likes}</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-circle-play"></i> ${song.play}</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-circle-check"></i> ${song.fecha}</p>
                    </div>
                </div>
                <div class="ranked ${song.category}">
                    <label>${song.category}</label>
                </div>
                <div class="left-ab">
                    <button class="btn-play toggle-button" data-index="${index}" data-audio="${song.id}">
                        <i class='bx bx-play toggle-icon'></i>
                    </button>
                    <button class="btn heart-button">
                        <i class="fa-solid fa-heart heart-icon ${song.isFavorite ? 'active' : ''}"></i>
                    </button>
                    <button class="btn descarga">
                        <i class="fa-solid fa-file-arrow-down"></i>
                    </button>
                </div>
                <div class="back-blur"></div>
                <audio id="${song.id}" src="${song.songSrc}"></audio>
            </div>
        `;
        containerCards.appendChild(card);
    });

    // Asignar eventos de clic a los botones de reproducción

    // Selecciona todos los botones con la clase 'toggle-button'
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // Agrega un event listener a cada botón
    toggleButtons.forEach((button, index) => {
        const audioId = button.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        const playerPlayButton = document.getElementById('btnReproducir');

        button.addEventListener('click', function () {
            const toggleIcon = this.querySelector('.toggle-icon');

            const song = filteredSongs[index];
            const fixedPlayer = document.getElementById('fixedPlayer');

            const progressBar = document.getElementById('progressBar');

            // Pausar el audio actual si hay uno reproduciéndose
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reinicia el audio
                if (currentButton) {
                    const currentIcon = currentButton.querySelector('.toggle-icon');
                    currentIcon.classList.remove('bx-pause');
                    currentIcon.classList.add('bx-play');
                }
            }

            // Alterna entre play y pause
            if (audio.paused) {
                audio.play();
                currentAudio = audio;
                currentButton = this;

                updateFixedPlayer(song);


                updateIcons('play', song.id);
            } else {
                audio.pause();


                // Limpia el estado actual
                currentAudio = null;
                currentButton = null;

                updateIcons('pause', song.id);

            }

            showPlayer();
        });

        // Evento para cuando la canción termina
        audio.addEventListener('ended', function () {
            updateIcons('pause', audioId, true);
            currentAudio = null;
            currentButton = null;
        });
    });

    // Selecciona todos los botones con la clase 'heart-button'
    const heartButtons = document.querySelectorAll('.heart-button');

    // Agrega un event listener a cada botón
    heartButtons.forEach((button, buttonIndex) => {
        button.addEventListener('click', function () {
            // Selecciona el icono del corazón dentro del botón
            const heartIcon = this.querySelector('.heart-icon');
            // Alterna la clase 'active' en el icono del corazón
            heartIcon.classList.toggle('active');

            // Actualiza el estado isFavorite de la canción correspondiente
            const actualSongIndex = songs.findIndex(song => song.id === filteredSongs[buttonIndex].id);
            if (actualSongIndex !== -1) {
                songs[actualSongIndex].isFavorite = !songs[actualSongIndex].isFavorite;
            }

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
}

//Mostrar las cards inicialmente

generateCards(songs);


//Acción de dar Corazón




// Añadir eventos de filtro a los botones


//Buscador de canciones 
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(searchTerm)
    );

    generateCards(filteredSongs);
});

let currentPlayingSongId = null;
let currentPlayingTime = 0;
let isPlaying = false;

function saveCurrentSongState() {
    const audio = document.querySelector('audio:not([paused])');
    if (audio) {
        currentPlayingSongId = audio.id;
        currentPlayingTime = audio.currentTime;
        isPlaying = !audio.paused;
    }
}

function restoreSongState() {
    if (currentPlayingSongId) {
        const audio = document.getElementById(currentPlayingSongId);
        if (audio) {
            audio.currentTime = currentPlayingTime;
            if (isPlaying) {
                audio.play();
            }
        }
    }
}

const filterActive = document.querySelectorAll('.btn-filter');

filterActive.forEach(filter => {
    filter.addEventListener('click', function () {
        // Remover la clase 'active' de todos los elementos
        filterActive.forEach(item => item.classList.remove('active'));

        // Añadir la clase 'active' al elemento clicado
        this.classList.add('active');
    });
});

function filterAndGenerateCards(filterCallback) {
    saveCurrentSongState();

    // Filtrar las canciones según la función de filtro que se pasa como argumento
    const filteredSongs = filterCallback(songs);

    // Generar las tarjetas para las canciones filtradas
    generateCards(filteredSongs);

    // Restaurar el estado de la canción si aplica
    restoreSongState();
}

// Añadir eventos de filtro a los botones
document.getElementById("filter-amados").addEventListener("click", () => {
    filterAndGenerateCards(songs => songs.filter(song => song.category === "Amado"));
});

document.getElementById("filter-clasificados").addEventListener("click", () => {
    filterAndGenerateCards(songs => songs.filter(song => song.category === "Clasificado"));
});

document.getElementById("filter-abandonados").addEventListener("click", () => {
    filterAndGenerateCards(songs => songs.filter(song => song.category === "Abandonado"));
});

document.getElementById("filterFavorite").addEventListener("click", () => {
    filterAndGenerateCards(songs => songs.filter(song => song.isFavorite === true));
});

// Botón para mostrar todas las tarjetas
document.getElementById("filter-all").addEventListener("click", () => {
    filterAndGenerateCards(songs => songs); // Mostrar todas las canciones
});




//Navegacion responsive

const abrirBtn = document.getElementById('abrirBtn');
const navCollapseDiv = document.getElementById('navBar-collape');


const collapseItems = document.querySelectorAll('.c-item');
const containerNav = document.getElementById('cuerpoNav');


collapseItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remover la clase 'active' de todos los elementos
        collapseItems.forEach(item => item.classList.remove('active'));

        // Añadir la clase 'active' al elemento clicado
        this.classList.add('active');
    });
});

abrirBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('visible');

    if (navCollapseDiv.classList.contains('visible')) {
        document.querySelector('#iconMenu').classList.remove('bxs-chevron-down');
        document.querySelector('#iconMenu').classList.add('bxs-chevron-up');
        containerNav.classList.add('visible');
    } else {
        document.querySelector('#iconMenu').classList.add('bxs-chevron-down');
        document.querySelector('#iconMenu').classList.remove('bxs-chevron-up');
        containerNav.classList.remove('visible');
    }

});

const dropdownLi = document.querySelectorAll('.dropdown__li');

dropdownLi.forEach(li => {
    const navLink = li.querySelector('.nav-link');
    const ulHidden = li.querySelector('.dropdown-content');
    const icon = navLink.querySelector('i');

    navLink.addEventListener('click', function () {

        if (navLink.classList.contains('active')) {
            navLink.classList.remove('active');
            ulHidden.classList.remove('mostrar');
            icon.classList.remove('bx-rotate-90');
        } else {
            dropdownLi.forEach(i => {
                i.querySelector('.nav-link').classList.remove('active');
                i.querySelector('.dropdown-content').classList.remove('mostrar');
                i.querySelector('i').classList.remove('bx-rotate-90');
            });

            // Activamos el item clicado
            navLink.classList.add('active');
            ulHidden.classList.add('mostrar');
            icon.classList.add('bx-rotate-90'); // Cambia el ícono a la flecha hacia abajo
        }
    });
});


// Funcion para busqueda de canciones

const btnCerrarBuscar = document.getElementById('btnCerrarBuscar');
const abrirBuscar = document.querySelectorAll('.buscarBtn');
const confirmarBuscar = document.getElementById('btnConfirmar');

const containerBuscar = document.querySelector('.containerBuscar');


function mostrarDiv() {
    containerBuscar.classList.add('visible');
    document.addEventListener('click', ocultarDivAlClickFuera);
}

function ocultarDivAlClickFuera(event) {
    // Si el clic no fue en el div o en un botón, ocultar el div
    if (!containerBuscar.contains(event.target) && ![...abrirBuscar].includes(event.target)) {
        containerBuscar.classList.remove('visible');
        document.removeEventListener('click', ocultarDivAlClickFuera);
    }
}

btnCerrarBuscar.addEventListener('click', () => {
    containerBuscar.classList.remove('visible');
});

abrirBuscar.forEach(boton => {
    boton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevenir que el clic en el botón dispare el evento del documento
        mostrarDiv();
    });
});

//reproductor de musica funcion




function showPlayer() {
    const player = document.querySelector('#fixedPlayer');

    player.classList.add('show');
}



function updateFixedPlayer(song) {
    const playerSongName = document.getElementById('playerSongName');
    const playerArtistName = document.getElementById('playerArtistName');
    const playerImage = document.getElementById('playerImage');

    const playerPlayButton = document.getElementById('btnReproducir');
    const audio = document.getElementById(song.id);
    const currentTimeSpan = document.getElementById('currentTime');
    const totalTimeSpan = document.getElementById('totalTimeSpan');

    // Forzar la carga de metadatos


    // Elimina el event listener previo (si existe)
    playerPlayButton.replaceWith(playerPlayButton.cloneNode(true));
    const newPlayerPlayButton = document.getElementById('btnReproducir');

    // Actualiza la información del reproductor
    playerSongName.textContent = song.name;
    playerArtistName.textContent = song.artistName;
    playerImage.src = song.img;

    // Cuando el audio se cargue completamente, actualiza el tiempo total
    if (audio.readyState >= 1) {
        totalTimeSpan.textContent = formatTime(audio.duration);
    } else {
        // Cuando el audio se cargue completamente, actualiza el tiempo total
        audio.addEventListener('loadedmetadata', function () {
            const duration = formatTime(audio.duration);
            totalTimeSpan.textContent = duration;
        });
    }

    // Actualiza el tiempo actual durante la reproducción
    audio.addEventListener('timeupdate', function () {
        const currentTime = formatTime(audio.currentTime);
        currentTimeSpan.textContent = currentTime;

        // Si el audio se está reproduciendo, reinicia el temporizador
        clearTimeout(hidePlayerTimeout);
    });

    // Evento para detectar cuando el audio está en pausa
    audio.addEventListener('pause', function () {
        startHidePlayerTimer();
    });

    // Evento para detectar cuando el audio termina
    audio.addEventListener('ended', function () {
        startHidePlayerTimer();
    });

    newPlayerPlayButton.addEventListener('click', function () {
        // Alterna entre play y pause
        if (audio.paused) {
            audio.play();
            updateIcons('play', song.id);
        } else {
            audio.pause();
            updateIcons('pause', song.id);
        }
    });
}


// Función para actualizar los íconos de Play/Pause en todos los botones relevantes
function updateIcons(action, songId, reset = false) {
    const songButton = document.querySelector(`[data-audio="${songId}"] .toggle-icon`);
    const playerIcon = document.getElementById('btnReproducir').querySelector('i');

    if (action === 'play' && !reset) {
        if (songButton) {
            songButton.classList.remove('bx-play');
            songButton.classList.add('bx-pause');
        }
        playerIcon.classList.remove('bx-play');
        playerIcon.classList.add('bx-pause');
    } else {
        if (songButton) {
            songButton.classList.remove('bx-pause');
            songButton.classList.add('bx-play');
        }
        playerIcon.classList.remove('bx-pause');
        playerIcon.classList.add('bx-play');
    }
}



// Función para formatear el tiempo en formato 00:00
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    // Formatear con dos dígitos
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = secs < 10 ? `0${secs}` : `${secs}`;

    return `${formattedMinutes}:${formattedSeconds}`;
}

//Ocultar player 

let hidePlayerTimeout;

function hidePlayer() {
    const fixedPlayer = document.getElementById('fixedPlayer');

    fixedPlayer.classList.remove('show');
}


function startHidePlayerTimer() {
    // Oculta el reproductor después de 5 segundos de inactividad
    hidePlayerTimeout = setTimeout(hidePlayer, 10000);
}



