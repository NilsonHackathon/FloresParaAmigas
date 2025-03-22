onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
    const playPauseBtn = document.querySelector('.play-pause-btn');  // Botón de play/pause
    const audioPlayer = document.getElementById('audio-player');     // Reproductor de audio
    const albumCover = document.querySelector('.album-cover');       // Imagen del disco

    // Verificamos que los elementos existan
    if (playPauseBtn && audioPlayer && albumCover) {
        playPauseBtn.addEventListener('click', function () {
            console.log('Botón clickeado');

            // Aseguramos que el audio esté listo para reproducirse
            audioPlayer.load(); // Intenta recargar el audio

            // Si el audio está pausado o terminado, reproducimos
            if (audioPlayer.paused || audioPlayer.ended) {
                console.log('Reproduciendo audio');
                audioPlayer.play();  // Reproducir audio
                albumCover.classList.add('rotate');  // Hacer girar el disco
                playPauseBtn.textContent = 'Pause';  // Cambiar el texto del botón a 'Pause'
            } else {
                console.log('Pausando audio');
                audioPlayer.pause();  // Pausar el audio
                albumCover.classList.remove('rotate');  // Detener la rotación del disco
                playPauseBtn.textContent = 'Play';  // Cambiar el texto del botón a 'Play'
            }
        });
    }
});