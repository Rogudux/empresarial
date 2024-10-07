import express from 'express';
const app = express();
const port = 3000;


app.get('/', (req, res) =>{
    res.send("Muy fucking buenas tardes cabron")
})

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
})

app.get('/productos', (req,res) =>{
    res.send('Estoy en productos!')
})



