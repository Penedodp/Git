function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function showVideo(id) {
    const videoThumbnail = document.getElementById('video-thumbnail-' + id);
    if (videoThumbnail) {
        videoThumbnail.style.display = 'block';
        videoThumbnail.querySelector('video').play();
    }
}

function hideVideo(id) {
    const videoThumbnail = document.getElementById('video-thumbnail-' + id);
    if (videoThumbnail) {
        videoThumbnail.style.display = 'none';
        videoThumbnail.querySelector('video').pause();
        videoThumbnail.querySelector('video').currentTime = 0;
    }
}


const carousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
    interval: 1000, 
    ride: 'carousel'
});