// Toegankelijkheid: focus outline fix voor muisgebruikers
document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
});
document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
    }
});

// Simpele client-side validatie
document.getElementById('contact-form').addEventListener('submit', function(e) {
    var naam = document.getElementById('naam');
    var email = document.getElementById('email');
    var bericht = document.getElementById('bericht');
    if (!naam.value || !email.value || !bericht.value) {
        alert('Vul alle velden in.');
        e.preventDefault();
    }
});