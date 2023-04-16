//Requiero mi DB mongoose
const mongoose = require ('mongoose')

//Me conecto a la DB utilizando la URI de la DB que esta escondida en .env gracias a dotenv
const db = () => mongoose.connect(process.env.MONGO_URI,)
//Si se conecta, devuelvo mensaje positivo, sino, devuelvo error
.then (() => {
    console.log('Connection Stablished')
})
.catch((error) => {
    console.log('Error connection to MongoDB', error)
})
//Exporto mi db para que se pueda acceder en todo el codigo
module.exports = db

