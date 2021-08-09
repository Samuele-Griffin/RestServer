require('./config/config.js');
const express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json("Express Funcionado");
});

app.get('/usuarios', (req, res) => {
    res.json("Get Usuarios");
});

app.post('/usuarios', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(404).json({
            ok: false,
            desc: 'No se encontro el archivo en tal ruta o entradas invalidas',
        });
    } else {
        res.writeHead(200);
        res.write(JSON.stringify(body));
        res.end();
    }
});


app.delete('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.write(JSON.stringify(id));
    res.end();
});

app.put('/usuarios/:id', (req, res) => {
    let object = {
        id: req.params.id,
        body: req.body,
    }
    res.write(JSON.stringify(object))
    res.end();
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto " + process.env.PORT);
});