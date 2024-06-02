// audio
document.addEventListener('DOMContentLoaded', function() {
    const whisperAudio = document.getElementById('whisper');
    const bgmAudio = document.getElementById('bgm');
    whisperAudio.play(); // plays audio when page loads
    whisperAudio.addEventListener('ended', function() {
        bgmAudio.play(); // When whisper ends, it loops bgm
    });
});

// title text transition
const observerOptions = {
    threshold: 1.0 // execute when 100% of element is in viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.add('show');
            }
            if (entry.target.classList.contains('hiddenintro')) {
                entry.target.classList.add('showintro');
            }
        } else {
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.remove('show');
            }
            if (entry.target.classList.contains('hiddenintro')) {
                entry.target.classList.remove('showintro');
            }
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden, .hiddenintro');
hiddenElements.forEach((el) => observer.observe(el));



