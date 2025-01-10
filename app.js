const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')
const audio = document.getElementById('audio');
const playPauseBtn = document.querySelector('.play-pause');
const volumeSlider = document.querySelector('.volume');
const muteBtn = document.querySelector('.mute');
const bars = document.querySelectorAll('.bar');

let animationInterval;

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.load();
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      
        startEqualizerAnimation();
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        
        stopEqualizerAnimation();
    }
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

muteBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = 0;
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        audio.volume = volumeSlider.value;
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});

function startEqualizerAnimation() {
    animationInterval = setInterval(() => {
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * 40) + 10;
            bar.style.height = `${randomHeight}px`;
        });
    }, 200);
}

function stopEqualizerAnimation() {
    clearInterval(animationInterval);
    bars.forEach(bar => {
        bar.style.height = '10px';
    });
}

const escucharEnVivo = document.getElementById('escuchar-en-vivo');

escucharEnVivo.addEventListener('click', (e) => {
    if (audio.paused) {
        audio.load();
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      
        startEqualizerAnimation();
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        
        stopEqualizerAnimation();
    }
});


const rendicionDeCuentas = document.getElementById('rendicion-de-cuentas');
const modal = document.getElementById('modal-rendicion');
const closeModal = document.getElementsByClassName('close')[0];


rendicionDeCuentas.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('buzon-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('buzon.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            this.reset();
            const mensaje = document.getElementById('mensaje');
            mensaje.classList.add('visible');
            mensaje.style.display = 'block';

            setTimeout(() => {
                mensaje.style.opacity = '0';
                setTimeout(() => {
                    mensaje.style.display = 'none';
                    mensaje.classList.remove('visible');
                    mensaje.style.opacity = '1';
                }, 500);
            }, 3000);
        } else {
            console.error('Error en el envío del formulario');
        }
    })
    .catch(error => console.error('Error:', error));
});