const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: Array,
    size: String,
    color: String,
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema)