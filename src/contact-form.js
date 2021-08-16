//Envío mail de contacto//

document.getElementById('contact-form').addEventListener("submit", submitForm);

function submitForm(e) {

    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let marca = document.getElementById('marca').value;
    let webMarca = document.getElementById('web_marca').value;
    let residencia = document.getElementById('residencia').value;
    let conocecimiento = document.getElementById('conocimiento').value;
    let consultoriaSeleccionada = document.getElementById('consultoria').value;
    let consulta = document.getElementById('consulta').value;

    document.getElementById('contact-form').reset()

    sendEmail(nombre, email, marca, webMarca, residencia, conocecimiento, consultoriaSeleccionada, consulta)
}

function sendEmail(nombre, email, marca, webMarca, residencia, conocecimiento, consultoriaSeleccionada, consulta) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "diedileon@gmail.com",
        Password: "umwtaytvlvfhwwlg",
        To: "diedileon@gmail.com",
        From: "diedileon@gmail.com",
        Subject: `${nombre} te quiere contactar.`,
        Body: `Nombre: ${nombre} <br/> Email: ${email} <br/> Nombre de la marca: ${marca} <br/> Web de la marca: ${webMarca} <br/> Residencia: ${residencia} <br/> Te conoce por: ${conocecimiento} <br/> Consultoría seleccionada: ${consultoriaSeleccionada} <br/> Consulta/Mensaje: ${consulta}`
    }).then((email) => {
        alert('Tu solicitud de contacto fue enviada con éxito!')
        document.location.href = '../index.html'
    })
}
