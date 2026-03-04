const btn = document.getElementById('botao');

document.getElementById('contact-form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'service_822u1bm';
    const templateID = 'template_zljgvvq';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
        alert('Mensagem enviada com sucesso!');
        this.reset();
    }, (err) => {
        btn.value = 'Enviar';
        alert('Erro ao enviar: ' + JSON.stringify(err));
    });
});