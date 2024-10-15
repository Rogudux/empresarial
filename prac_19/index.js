const express = require('express');
const app = express();

// Configuramos el motor de plantillas EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        { titulo: 'Articulo 1', autor: 'Diego Rojas', contenido: 'Hermoso' },
        { titulo: 'Articulo 2', autor: 'Felipe Garcia', contenido: 'Feo' },
        { titulo: 'Articulo 3', autor: 'Felipe Garcia', contenido: 'Feo' },
        { titulo: 'Articulo 4', autor: 'Marco', contenido: 'Profe cool' }


    ];
    res.render('inicio.ejs', { blogs }); // Renderizamos la vista 'index.ejs' y pasamos los blogs
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000");
});
