const express = require('express');
const app = express();

const conf = {
  port: 8080
}

const values = {
  msg: 'Mensaje'
}

app.use(express.static('dist'));
app.get('api/get', (req, res) => res.send(values));
app.listen(conf.port, () => console.log('Escuchando puerto ' + conf.port))