document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.audio-section .text p');
    sections.forEach(section => {
        const text = section.innerText;
        section.innerText = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                section.innerText += text.charAt(index);
                index++;
                setTimeout(type, 50); // Ajuste a velocidade de digitação aqui
            }
        }

        type();
    });
});

function onYouTubeIframeAPIReady() {
    const player = new YT.Player('youtube-video');
    player.setVolume(10); // Defina o volume aqui (de 0 a 100)
}