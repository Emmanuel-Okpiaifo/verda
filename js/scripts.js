document.body.style.overflow = 'hidden'; // Add this line to prevent page shifting

window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    }, 2000);
});

document.getElementById('enter-btn').addEventListener('click', function () {
    document.getElementById('enter-btn').classList.add('hidden');
    document.getElementById('studios-btn').classList.remove('hidden');
    document.getElementById('talent-btn').classList.remove('hidden');
});

document.getElementById('studios-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('container').style.display = 'none';
    document.getElementById('studios-section').style.display = 'block';
    document.getElementById('studios-section').classList.add('fade-in');
    document.getElementById('talent-section').style.display = 'none';
    document.getElementById('back-arrow').classList.remove('hidden');
    document.getElementById('background').classList.remove('background-talent');
    document.getElementById('background').classList.add('background-studios', 'fade-in');
    resetTalentSection();
});

document.getElementById('studios-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('container').style.display = 'none';
    document.getElementById('studios-section').style.display = 'block';
    document.getElementById('studios-section').classList.add('fade-in');
    document.getElementById('talent-section').style.display = 'none';
    document.getElementById('back-arrow').classList.remove('hidden');
    document.getElementById('background').classList.remove('background-talent');
    document.getElementById('background').classList.add('background-studios', 'fade-in');
    resetTalentSection();
});

document.getElementById('talent-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('container').style.display = 'none';
    document.getElementById('talent-section').style.display = 'block';
    document.getElementById('talent-section').classList.add('fade-in');
    document.getElementById('studios-section').style.display = 'none';
    document.getElementById('back-arrow').classList.remove('hidden');
    document.getElementById('background').classList.remove('background-studios');
    document.getElementById('background').classList.add('background-talent', 'fade-in');
});

document.getElementById('talent-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('container').style.display = 'none';
    document.getElementById('talent-section').style.display = 'block';
    document.getElementById('talent-section').classList.add('fade-in');
    document.getElementById('studios-section').style.display = 'none';
    document.getElementById('back-arrow').classList.remove('hidden');
    document.getElementById('background').classList.remove('background-studios');
    document.getElementById('background').classList.add('background-talent', 'fade-in');
});

document.getElementById('request-details-talent-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('request-details-talent-btn').classList.add('hidden');
    document.getElementById('email-talent').classList.remove('hidden');
    document.getElementById('email-talent').classList.add('fade-in');
});

document.getElementById('request-details-studios-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('studios-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('form-section').classList.add('fade-in');
});

document.getElementById('submission-form').addEventListener('submit', function (event) {
    // Simulate form submission success
    setTimeout(function () {
        document.getElementById('form-section').classList.add('hidden');
        document.getElementById('thank-you-popup').style.display = 'block';
        document.getElementById('submission-form').reset(); // Clear the form
    }, 500);
});

document.getElementById('back-arrow').addEventListener('click', function () {
    document.getElementById('container').style.display = 'block';
    document.getElementById('studios-section').style.display = 'none';
    document.getElementById('talent-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('back-arrow').classList.add('hidden');
    document.getElementById('background').classList.remove('background-studios', 'fade-in');
    document.getElementById('background').classList.remove('background-talent', 'fade-in');
    resetTalentSection();
});

document.getElementById('logo').addEventListener('click', function () {
    document.getElementById('container').style.display = 'block';
    document.getElementById('studios-section').style.display = 'none';
    document.getElementById('talent-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('back-arrow').classList.add('hidden');
    document.getElementById('background').classList.remove('background-studios', 'fade-in');
    document.getElementById('background').classList.remove('background-talent', 'fade-in');
    resetTalentSection();
});

function closePopup() {
    document.getElementById('thank-you-popup').style.display = 'none';
    document.getElementById('studios-section').style.display = 'block';
}

function resetTalentSection() {
    document.getElementById('request-details-talent-btn').classList.remove('hidden');
    document.getElementById('email-talent').classList.add('hidden');
}