function toggleLandingPage() {
    const box = document.getElementById('landingPageBox');
    const image = document.getElementById('landingPageImage');

    if (box.classList.contains('open')) {
        box.classList.remove('open');
        image.style.opacity = '1';
    } else {
        box.classList.add('open');
        image.style.opacity = '0'; 
    }
}
