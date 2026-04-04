export function initSearch() {

    const voiceBtn = document.querySelector('.search__voice-btn');
    const input = document.querySelector('.search__input');

    if (!voiceBtn) return;

    const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!recognition) {
        console.warn('Reconocimiento de voz no soportado');
        return;
    }

    const mic = new recognition();

    mic.lang = 'es-ES';

    voiceBtn.addEventListener('click', () => {
        mic.start();
        voiceBtn.classList.add('search__voice-btn--active');
    });

    mic.onresult = (event) => {
        const texto = event.results[0][0].transcript;
        input.value = texto;
    };

    mic.onend = () => {
        voiceBtn.classList.remove('search__voice-btn--active');
    };
}