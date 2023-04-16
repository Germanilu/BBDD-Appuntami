//Requiero el modelo CLIENT que utilizare en este controlador
const Review = require("../models/Review");

//Creo mi const authController que sea un objeto vacio
const reviewController = {};


reviewController.createReview = async(req,res) => {
    try {
        const {name,review,rating} = req.body;
        if(!name || !review || !rating){
            return res.status(500).json({
                success: false,
                message: "Devi compilare tutti i campi",
            })
        }
        const newReview = {
            name,
            review,
            rating
        }

        await Review.create(newReview)
        console.log(newReview)

        return res.status(200).json({
            success:true,
            message: "Grazie per la sua recensione",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to create review",
            error: error?.message || RangeError
        })
    }
}


reviewController.getReview = async(req,res) => {
    try {
        const review = await Review.find()

        return res.status(200).json({
            success:true,
            review:review
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to retrieve reviews",
            error: error?.message || RangeError
        })
    }
}


reviewController.getReviewAverage = async(req,res) => {

    try {
        const review = await Review.find()
        let totalReviewRating = 0;
        let reviewCount = 0
        review.map((rev) => {
            reviewCount++
            totalReviewRating += rev.rating;
        })
        
        const reviewMedia = totalReviewRating / reviewCount

        return res.status(200).json({
            success:true,
            data: reviewMedia
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to retrieve reviews Average",
            error: error?.message || RangeError
        })
    }
}


//Exporto mi authController para utilizarlo en toda la app
module.exports = reviewController