const http = require('http');

PUERTO = 3000;

const server = http.createServer((req, res) =>{

    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hola diego, llegaste tarde again</h1>');
    res.write('<ul><li>JS</li><li>Python</li><li>Ruby</li></ul>')

});

server.listen(PUERTO, () =>{
    console.log(`Escuchando en servidor ${PUERTO}`)
})