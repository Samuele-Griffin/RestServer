const http = require('http');
let port = 8080;

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });

    let prueba = {
        name: 'Eliminar Troyano',
        date: new Date().getFullYear(),
        author: 'AVG Tecnologies',
        location: 'Republica Checa',
    };

    res.write(JSON.stringify(prueba));
    res.end();
})

.listen(port, () => {
    console.log("Escuchando el puerto " + port);
});