const express = require('express');
const app = express();

const conf = {
  port: 8080
}

const saludo = {
  msg: 'Hola', 
  numero: 1
}

const despedida = {
  msg: 'Adios', 
  numero: 0
}

app.use(express.static('dist'));
app.get('/api', (req, res) => res.send({saludo}));
app.get('/user', (req, res) => res.send({despedida}));
app.listen(conf.port, () => console.log('Escuchando puerto ' + conf.port))