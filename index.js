//Requiero express
const express = require('express')

//Utilizo dotenv para esconder las variables de entorno
require('dotenv').config()

//Requiero mi db en index.js
const db = require('./config/db')

//Hago que la constante App sea igual al metodo express()
const app = express()

//Obligo a que app cada vez que se ejecute pase por el middleware express.json que lo que hace es analizar la solicitud JSON entrante y la devuelve analizando los datos en req.body
app.use(express.json())  


//Connect Routes
const reviewRoutes = require('./routes/review.routes');
//Routes
app.use('/api',reviewRoutes);



//Cors
const cors = require('cors');
let corsOptions = {    origin: "*",    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",     methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",    preflightContinue: false,     allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",    optionsSuccessStatus: 204};

//Request to app to use cors
app.use(cors(corsOptions));

//Seteo el puerto utilizando la variable de entorno PORT o si no la encuentra la 4000
const port = process.env.PORT || 4000;



//Creo una ruta de bienvenida
app.get('/' , (req,res) => {   
    return res.send('BBDD Appuntami')
});

//Si no encuentra la ruta devuelvo un 404
app.get('*', (req,res) => {
    return res.status(404).send('404 Route not found')
})

//Aqui dependiendo del resultado anterior me devuelve en consola si esta conectado y a que puerto o me da un error
db().then(() => {
    app.listen(port, () => {
        console.log('Server is running: ' + port);
    })
})
.catch((error) => {
    console.log("error connecting to MongoDb ", error)
})