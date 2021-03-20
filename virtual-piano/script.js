const audio = document.querySelectorAll('audio');
const piano = document.querySelectorAll('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const btn = document.querySelectorAll('.btn');
document.addEventListener("mouseup", mouseup);

piano.forEach (key => {
    key.addEventListener('mousedown', mousedown);
});

function mousedown (e) {
    playAudio(e);
    pianoКeys.forEach ((e) => {
        e.addEventListener("mouseover", playAudio);
    });
};

function playAudio (e) {
    e.target.classList.add('piano-key-active');
    let key = e.target;
    let audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.addEventListener('transitionend', () => {
        key.classList.remove('piano-key-active');
    });
};

function mouseup (e) {
    pianoКeys.forEach ((e) => {
        e.removeEventListener("mouseover", playAudio);
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
        };
    };
});

window.addEventListener('keydown', function (e) {
    let au = document.querySelector(`audio[akey="${e.keyCode}"]`);
    if (au) {
        let audio=document.getElementById(au.id);
        let cl = document.querySelector(`.piano-key[data-note="${au.id}"]`);
        cl.classList.add('piano-key-active');
        audio.currentTime = 0;
        audio.play();
        cl.addEventListener('transitionend', () => {
            cl.classList.remove('piano-key-active');
        });
    };
});