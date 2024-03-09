function openFullscreen(element) {
    const fullscreenElement = document.getElementById('fullscreen-image');
    fullscreenElement.src = element.src;
    document.querySelector('.fullscreen').style.display = 'flex';
}

function closeFullscreen() {
    document.querySelector('.fullscreen').style.display = 'none';
}