const audio = document.querySelectorAll('audio');
const pianoКeys = document.querySelectorAll('.piano-key');
const btn = document.querySelectorAll('.btn');

pianoКeys.forEach (key => {
    key.addEventListener('click', playAudio);
});

function playAudio (e) {
    let key = e.target;
    let audio = document.getElementById(key.dataset.note);
    key.classList.add('piano-key-active');
    audio.currentTime = 0;
    audio.play();
    key.addEventListener('transitionend', () => {
        key.classList.remove('piano-key-active');
    });
};

btn.forEach (key => {
    key.addEventListener('click', clickbnt);
});

function clickbnt (e) {
    let key = e.target;
    btn.forEach((e) => {
        e.classList.remove('btn-active');
        key.classList.add('btn-active');
        if (e.classList.contains('btn-active')) {
            pianoКeys.forEach((e) => e.classList.add('piano-key-letter'));
        }
        else {
            pianoКeys.forEach((e) => e.classList.remove('piano-key-letter'));
        };
    });
};

document.querySelector('.fullscreen').addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});