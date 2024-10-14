const fs = require('fs');
/* const fs = require('fs');
const leerArchivo = (err, data) => (err) ? console.log("Error ", err) : console.log(data.toString());
const escribirArchivo = (err) => (err) ? console.log("Error: ", err) : console.log("Se escribio correctamente");
fs.readFile('archivo.txt', leerArchivo);
fs.writeFile('Nuevo archivo.txt', 'Hola sobrescribiendo el archivo', escribirArchivo);
fs.unlink('Nuevo archivo.txt', (err) =>{
    console.log('se elimino el archivo');
})
fs.mkdir('nuevaCarpeta', (err) =>{
    console.log('Se creo la carpeta');
});
fs.rmdir('nuevaCarpeta', (err) =>{
    console.log('Se elimino la carpeta');
});
 */
document.addEventListener('DOMContentLoaded', () => {
    // Simulación de archivos y carpetas
    const archivosYCarpetas = [
      { name: 'documento.txt', type: 'file' },
      { name: 'musica', type: 'folder' },
      { name: 'imagen.jpg', type: 'file' },
      { name: 'videos', type: 'folder' },
    ];
    
    // Función para renderizar los archivos y carpetas
    function mostrarArchivosYCarpetas() {
      const filesList = document.getElementById('filesList');
      filesList.innerHTML = ''; // Limpiar la lista
    
      archivosYCarpetas.forEach(item => {
        const div = document.createElement('div');
        div.classList.add(item.type === 'folder' ? 'folder' : 'file');
    
        div.innerHTML = `
          <i class="bi ${item.type === 'folder' ? 'bi-folder-fill' : 'bi-file-earmark-fill'} icon"></i>
          ${item.name}
        `;
        filesList.appendChild(div);
      });
    }
    
    // Llamar a la función para mostrar los archivos
    mostrarArchivosYCarpetas();
  });