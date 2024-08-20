document.addEventListener('DOMContentLoaded', function() {
    const tabla = document.getElementById('documentos').getElementsByTagName('tbody')[0];
    const ordenarPor = document.getElementById('ordenar-por');
    const consultarBtn = document.getElementById('consultar');
    const codigoDocumento = document.getElementById('codigo-documento');
    const nombreDocumento = document.getElementById('nombre-documento');

    // Función para normalizar texto (quitar tildes y convertir a minúsculas)
    function normalizarTexto(texto) {
        return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Función para agregar una fila
    function agregarFila(datos) {
        const fila = tabla.insertRow();
        Object.entries(datos).forEach(([key, valor], index) => {
            const celda = fila.insertCell();
            celda.textContent = valor;
            celda.classList.add(key);
        });
    }

    // Ejemplo de datos ampliados
    const documentos = [
        {id: '1', creo: 'A', codigo: '11', version: '1', nombre: 'ABC', elaboradoPor: 'Nombre', revisadoPor: 'Líder de calidad', aprobadoPor: 'Gerente administrativo y financiero', proceso: 'Sistema integrado de gestión', subproceso: 'sst', ultimaRevision: '2024-06-06', clasificacion: 'Registro', fechaSubida: '2024-06-07', aprobacion: 'SIN APROBAR', editar: 'Editar', retencion: 'Retener', documentoFuente: 'Fuente1'},
        {id: '2', creo: 'B', codigo: '12', version: '1', nombre: 'ABCD', elaboradoPor: 'Nombre', revisadoPor: 'Líder de calidad', aprobadoPor: 'Gerente administrativo y financiero', proceso: 'Sistema integrado de gestión', subproceso: 'sst', ultimaRevision: '2024-06-06', clasificacion: 'Registro', fechaSubida: '2024-06-07', aprobacion: 'SIN APROBAR', editar: 'Editar', retencion: 'Retener', documentoFuente: 'Fuente2'},
        {id: '3', creo: 'C', codigo: '13', version: '1', nombre: 'ABCDE', elaboradoPor: 'Nombre', revisadoPor: 'Líder de calidad', aprobadoPor: 'Gerente administrativo y financiero', proceso: 'Sistema integrado de gestión', subproceso: 'sst', ultimaRevision: '2024-06-04', clasificacion: 'Registro', fechaSubida: '2024-06-05', aprobacion: 'SIN APROBAR', editar: 'Editar', retencion: 'Retener', documentoFuente: 'Fuente3'},
        {id: '4', creo: 'D', codigo: '14', version: '1', nombre: 'ABCDEF', elaboradoPor: 'Nombre', revisadoPor: 'Líder de calidad', aprobadoPor: 'Gerente administrativo y financiero', proceso: 'Sistema integrado de gestión', subproceso: 'sst', ultimaRevision: '2024-06-04', clasificacion: 'Registro', fechaSubida: '2024-06-04', aprobacion: 'Fecha vencida', editar: 'Editar', retencion: 'Retener', documentoFuente: 'Fuente4'},
        {id: '5', creo: 'E', codigo: '15', version: '3', nombre: 'ABCDEFG', elaboradoPor: 'Nombre ', revisadoPor: 'Líder sst', aprobadoPor: 'Gerente administrativo y financiero', proceso: 'Sistema integrado de gestión', subproceso: 'sst', ultimaRevision: '2024-05-31', clasificacion: 'Registro', fechaSubida: '2024-06-04', aprobacion: 'Aprobado', editar: 'Editar', retencion: 'Retener', documentoFuente: 'Fuente5'}
        
    ];

    // Agregar filas de ejemplo
    documentos.forEach(doc => agregarFila(doc));

    // Funcionalidad de ordenamiento
    ordenarPor.addEventListener('change', function() {
        const columna = this.value;
        const filas = Array.from(tabla.rows);
        
        filas.sort((a, b) => {
            const textoA = a.cells[columna].textContent.toLowerCase();
            const textoB = b.cells[columna].textContent.toLowerCase();
            return textoA.localeCompare(textoB);
        });

        filas.forEach(fila => tabla.appendChild(fila));
    });

    // Funcionalidad del botón Consultar (simulada)
    consultarBtn.addEventListener('click', function() {
        alert('Realizando consulta...');
        // Aquí iría la lógica para realizar la consulta real
    });

    // Función para subrayar filas que coincidan con la búsqueda
    function subrayarFilas() {
        const busqueda = normalizarTexto(codigoDocumento.value || nombreDocumento.value);
        const filas = tabla.rows;

        for (let fila of filas) {
            let coincide = false;
            for (let celda of fila.cells) {
                if (normalizarTexto(celda.textContent).includes(busqueda)) {
                    coincide = true;
                    break;
                }
            }
            fila.style.backgroundColor = coincide ? '#d3d3d3' : '';
        }
    }

    // Eventos para subrayar al escribir en los campos de búsqueda
    codigoDocumento.addEventListener('input', subrayarFilas);
    nombreDocumento.addEventListener('input', subrayarFilas);
});