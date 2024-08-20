function confirmPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const notification = document.getElementById('notification');

    // Expresiones regulares para validar los requisitos de la contraseña
    const minLength = /.{8,}/; // Mínimo 8 caracteres
    const upperCase = /[A-Z]/; // Al menos una letra mayúscula
    const lowerCase = /[a-z]/; // Al menos una letra minúscula
    const number = /\d/;       // Al menos un número
    const specialChar = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/]/; // Al menos un signo especial

    // Verificar los requisitos de la contraseña
    if (!minLength.test(newPassword) || 
        !upperCase.test(newPassword) || 
        !lowerCase.test(newPassword) || 
        !number.test(newPassword) || 
        !specialChar.test(newPassword)) {
        showNotification('La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas y minúsculas, números y signos especiales vuelva y digite su contraseña');
        return;
    }

    // Verificar si las contraseñas coinciden
    if (newPassword === confirmPassword) {
        showNotification('Contraseña cambiada con éxito');
    } else {
        showNotification('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000); // Mostrar mensaje durante 5 segundos
}
