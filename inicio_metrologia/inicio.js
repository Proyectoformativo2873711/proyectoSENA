function submitForm() {
    const documentType = document.getElementById('documentType').value;
    const documentNumber = document.getElementById('documentNumber').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulación de datos válidos para prueba
    const validUsers = [
        { documentType: 'CC', documentNumber: '123456789', password: 'password123' },
        { documentType: 'pasaporte', documentNumber: '987654321', password: 'password321' }
    ];

    // Limpiar el mensaje de error
    errorMessage.style.display = 'none';

    // Verificar si los campos están completos
    if (!documentType || !documentNumber || !password) {
        errorMessage.textContent = 'Por favor, complete todos los campos';
        errorMessage.style.display = 'block';
        return;
    }

    // Validar los datos del formulario
    const userIsValid = validUsers.some(user => 
        user.documentType === documentType && 
        user.documentNumber === documentNumber && 
        user.password === password
    );

    if (userIsValid) {
        console.log('Datos del formulario:', { documentType, documentNumber, password });
        alert('Formulario enviado correctamente');
    } else {
        errorMessage.textContent = 'Usted no se encuentra registrado';
        errorMessage.style.display = 'block';
    }
}

function forgotPassword() {
    alert('Se ha enviado un correo electrónico con instrucciones para restablecer su contraseña');
}
