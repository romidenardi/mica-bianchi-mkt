//Envío de solicitud de newsletter//

document.getElementById('form_newsletter').addEventListener("submit", submitForm);

function submitForm(e) {

    e.preventDefault();

    let email = document.getElementById('email').value;

    document.getElementById('form_newsletter').reset()

    sendEmail(email)
}

function sendEmail(email) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "diedileon@gmail.com",
        Password: "umwtaytvlvfhwwlg",
        To: "diedileon@gmail.com",
        From: "diedileon@gmail.com",
        Subject: `Nueva solicitud de newsletter!`,
        Body: `El usuario con email: ${email} se suscribió a tu newsletter. No olvides incluirlo/a en la lista!`
    }).then((email) => {
        alert('Tu suscripción al newsletter fue enviada con éxito!')
        document.location.href = '../index.html'
    })
}