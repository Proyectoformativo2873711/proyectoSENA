let documents = [];

function addDocument() {
    const name = document.getElementById('docName').value;
    const category = document.getElementById('docCategory').value;
    
    if(name && category) {
        documents.push({name, category});
        updateDocumentList();
        document.getElementById('docName').value = '';
        document.getElementById('docCategory').value = '';
    } else {
        alert('Por favor, ingrese el nombre y seleccione una categoría.');
    }
}

function updateDocumentList() {
    const docList = document.getElementById('docList');
    docList.innerHTML = '';
    
    documents.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = `${doc.name} - ${doc.category}`;
        docList.appendChild(li);
    });
}

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDocs = documents.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm) || 
        doc.category.toLowerCase().includes(searchTerm)
    );
    
    const docList = document.getElementById('docList');
    docList.innerHTML = '';
    
    filteredDocs.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = `${doc.name} - ${doc.category}`;
        docList.appendChild(li);
    });
});

// Inicializar la lista de documentos
updateDocumentList();