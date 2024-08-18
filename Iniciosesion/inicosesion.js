document.addEventListener('DOMContentLoaded', function() {
    const userTypeSelect = document.getElementById('userType');
    const programSelect = document.getElementById('program');
    const continueBtn = document.getElementById('continueBtn');

    function checkSelections() {
        if (userTypeSelect.value && programSelect.value) {
            continueBtn.disabled = false;
        } else {
            continueBtn.disabled = true;
        }
    }

    userTypeSelect.addEventListener('change', checkSelections);
    programSelect.addEventListener('change', checkSelections);

    continueBtn.addEventListener('click', function() {
        const userType = userTypeSelect.value;
        const program = programSelect.value;
        
        if (userType && program) {
            alert(`Usuario seleccionado: ${userType}\nPrograma seleccionado: ${program}`);
            // Aquí puedes añadir la lógica para continuar a la siguiente página o sección
        }
    });

    // Inicialmente deshabilitar el botón
    continueBtn.disabled = true;
});