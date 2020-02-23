//Requires
require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/usuario/:id', function(req, res) {
    let id = req.params.id
    let usr = req.body;
    if (id === undefined || usr.nombre === undefined) {
        res.status(400).json({
            ok: false,
            msg: "Faltan Datos"
        });
    } else {
        res.json({
            id,
            usuario: usr
        });
    }

})

app.listen(process.env.PORT, () => console.log('Escuchando al puerto', process.env.PORT));