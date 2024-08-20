function sendCode() {
    const email = document.getElementById('email').value;
    const notification = document.getElementById('notification');

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validar el formato del correo electrónico
    if (!emailRegex.test(email)) {
        showNotification('El correo electrónico debe tener un formato válido (ej. ejemplo@dominio.com o )');
        return;
    }
    
    // Validar que el correo tenga el dominio específico
    const validDomains = ['@soy.sena.edu.co'];
    if (!validDomains.some(domain => email.endsWith(domain))) {
        showNotification('El correo electrónico debe ser de tipo @soy.sena.edu.co');
        return;
    }
    
    // Simular una lista de correos electrónicos registrados
    const registeredEmails = [
        'usuario@soy.sena.edu.co',
        'ejemplo@soy.sena.edu.co'
    ];
    
    // Validar si el correo está registrado
    if (!registeredEmails.includes(email)) {
        showNotification('Correo no registrado en la base de datos');
        return;
    }

    // Si pasa todas las validaciones, simular el envío del código
    const code = Math.floor(100000 + Math.random() * 900000);
    showNotification(`Código enviado: ${code}`);
}

function verifyCode() {
    const code = document.getElementById('verificationCode').value;
    if (code.length === 6) {
        showNotification('Código verificado correctamente');
    } else {
        showNotification('Por favor, ingresa un código de 6 dígitos');
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
