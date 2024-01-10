let currentImageIndex = 0;
const totalImages = 5;

function showImage(index) {
    const images = document.querySelectorAll('.about-image');
    const buttons = document.querySelectorAll('.carousel-button');

    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });

    buttons.forEach((button, i) => {
        button.classList.toggle('carousel-button-filled', i === index);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentImageIndex);
});