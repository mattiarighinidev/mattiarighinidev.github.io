// EmailJS
(function(){emailjs.init("NJTef4GNoq8FqlLyH");})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_75a38y2', 'contact-me', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}