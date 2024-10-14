const http = require('http');
const url = require('url');
const PUERTO = 3000;

const server = http.createServer((req, res) => {
    // Configura el encabezado
    res.setHeader('Content-Type', 'text/html');

    // Define el contenido de la página en función de la URL
    let contenido = '';
    let title = '';
    switch (req.url) {
        case '/':
            title = 'Inicio';
            contenido = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi Sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">Acerca de</a></li>
                                <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <h1>Bienvenido a mi sitio web</h1>
                    <p>Este es el contenido de la página de inicio.</p>
                </div>`;
            break;
        case '/about':
            title = 'Acerca de';
            contenido = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi Sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">Acerca de</a></li>
                                <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <h1>Acerca de Nosotros</h1>
                    <p>Esta es la página de acerca de.</p>
                </div>`;
            break;
        case '/productos':
            title = 'Productos';
            contenido = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi Sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">Acerca de</a></li>
                                <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <h1>Nuestros Productos</h1>
                    <p>Esta es la página de productos.</p>
                </div>`;
            break;
        case '/servicios':
            title = 'Servicios';
            contenido = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi Sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">Acerca de</a></li>
                                <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <h1>Nuestros Servicios</h1>
                    <p>Esta es la página de servicios.</p>
                </div>`;
            break;
        case '/contacto':
            title = 'Contacto';
            contenido = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi Sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">Acerca de</a></li>
                                <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <h1>Contacto</h1>
                    <p>Esta es la página de contacto.</p>
                </div>`;
            break;
        default:
            title = '404 No Encontrado';
            contenido = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi Sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">Acerca de</a></li>
                                <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <h1>404 No Encontrado</h1>
                    <p>La página que buscas no existe.</p>
                </div>`;
            break;
    }

    // Enviar la respuesta HTML completa
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            ${contenido}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>`;

    res.writeHead(res.statusCode, { 'Content-Type': 'text/html' });
    res.end(htmlResponse);
});

// Iniciar el servidor
server.listen(PUERTO, () => {
    console.log(`Servidor en el puerto ${PUERTO}`);
});
