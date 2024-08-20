document.getElementById('nombre').textContent = 'Nombre: Juan Pérez';
document.getElementById('tipo').textContent = 'Tipo de usuario: Premium';
document.getElementById('email').textContent = 'Email: juan@ejemplo.com';
document.getElementById('archivos').textContent = 'Total de archivos: 42';
document.getElementById('logoutButton').addEventListener('click', function() {
    alert('Has cerrado sesión');
    // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otra acción de cierre de sesión
});
