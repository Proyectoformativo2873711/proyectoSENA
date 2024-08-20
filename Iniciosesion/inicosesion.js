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
            // Redirigir a la página correspondiente según el programa seleccionado
            if (program === 'metrologia') {
                window.location.href = '/inicio_metrologia/metrologia.html';
            } else if (program === 'sennovalab') {
                window.location.href = '/inicio_sennovalab/sennovalab.html';
            } else {
                alert('Programa no soportado.');
            }
        }
    });
    
    // Inicialmente deshabilitar el botón
    continueBtn.disabled = true;
});