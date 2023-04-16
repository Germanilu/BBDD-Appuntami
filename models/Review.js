//Requiero mongoose en este archivo
const mongoose = require ('mongoose');
//Creo un nuevo Modelo con la propiedad mongoose.Schema y meto los datos que quiero
//que me envie el usuario
const ReviewSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
}
);

//Exporto el nuevo modelo con un nombre en este caso "Client"
const Review = mongoose.model('Review',ReviewSchema);
module.exports = Review;