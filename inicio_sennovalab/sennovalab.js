document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', submitForm);
});

function submitForm() {
    const documentType = document.getElementById('documentType').value;
    const documentNumber = document.getElementById('documentNumber').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Limpiar el mensaje de error
    errorMessage.style.display = 'none';

    // Obtener los datos del localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Verificar si los campos están completos
    if (!documentType || !documentNumber || !password) {
        errorMessage.textContent = 'Por favor, complete todos los campos';
        errorMessage.style.display = 'block';
        return;
    }

    // Validar los datos del formulario con los datos en localStorage
    if (userData && 
        userData.tipoDocumento === documentType && 
        userData.numeroDocumento === documentNumber && 
        userData.contrasena === password) {
        console.log('Datos del formulario:', { documentType, documentNumber, password });
        alert('Datos válidos. Redirigiendo al gestor documental...');
        
        // Redirigir al gestor documental
        window.location.href = '/gestordocumental_metrologia/gestor.html';
    } else {
        errorMessage.textContent = 'Usted no se encuentra registrado';
        errorMessage.style.display = 'block';
    }
}


