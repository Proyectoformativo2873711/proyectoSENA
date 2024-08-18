document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tipoDocumento = document.getElementById('tipoDocumento');
    const numeroDocumento = document.getElementById('numeroDocumento');
    const primerNombre = document.getElementById('primerNombre');
    const segundoNombre = document.getElementById('segundoNombre');
    const primerApellido = document.getElementById('primerApellido');
    const segundoApellido = document.getElementById('segundoApellido');
    const email = document.getElementById('email');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmarContrasena');
    const programa = document.getElementById('programa');
    const rol = document.getElementById('rol');

    let isValid = true;

    // Limpiar estilos de error
    clearErrors();

    // Validar campos obligatorios
    if (!tipoDocumento.value) {
        setError(tipoDocumento, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!numeroDocumento.value) {
        setError(numeroDocumento, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!primerNombre.value) {
        setError(primerNombre, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!primerApellido.value) {
        setError(primerApellido, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!segundoApellido.value) {
        setError(segundoApellido, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!email.value || !validateEmail(email.value)) {
        setError(email, 'Email no válido. Debe ser @..com o soy.sena.edu.co');
        isValid = false;
    }
    if (!contrasena.value) {
        setError(contrasena, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!confirmarContrasena.value) {
        setError(confirmarContrasena, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!programa.value) {
        setError(programa, 'Este campo es obligatorio');
        isValid = false;
    }
    if (!rol.value) {
        setError(rol, 'Este campo es obligatorio');
        isValid = false;
    }

    // Validar que las contraseñas coincidan y cumplan con los requisitos
    if (contrasena.value !== confirmarContrasena.value) {
        setError(contrasena, 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        setError(confirmarContrasena, 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        isValid = false;
    }

    // Expresiones regulares para validar los requisitos de la contraseña
    const minLength = /.{8,}/; // Mínimo 8 caracteres
    const upperCase = /[A-Z]/; // Al menos una letra mayúscula
    const lowerCase = /[a-z]/; // Al menos una letra minúscula
    const number = /\d/;       // Al menos un número
    const specialChar = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/]/; // Al menos un signo especial

    // Verificar los requisitos de la contraseña
    if (!minLength.test(contrasena.value) || 
        !upperCase.test(contrasena.value) || 
        !lowerCase.test(contrasena.value) || 
        !number.test(contrasena.value) || 
        !specialChar.test(contrasena.value)) {
        setError(contrasena, 'La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas y minúsculas, números y signos especiales.');
        isValid = false;
    }

    // Si pasa todas las validaciones
    if (isValid) {
        showNotification('Registro completado');
        console.log('Formulario enviado');
    }
});

function setError(element, message) {
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (label) {
        label.style.color = 'red';
    }
    element.style.borderColor = 'red';
    showNotification(message);
}

function clearErrors() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });

    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.color = '';
    });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) {
        const newNotification = document.createElement('div');
        newNotification.id = 'notification';
        newNotification.className = 'notification';
        document.body.appendChild(newNotification);
    }
    const notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 5000); // Mostrar mensaje durante 5 segundos
}

function validateEmail(email) {
    // Expresión regular para validar el formato del email
    const emailPattern = /^[^\s@]+@(?:[^\s@]+\.)+(?:com|soy\.sena\.edu\.co)$/;
    return emailPattern.test(email);
}
