const mongoose = require('mongoose');

const productShema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Name"]
        }, 
        quantity : {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            required: false
        }
    }, 
    {
        timestamps: true
    }
)

const product = mongoose.model('Product', productShema);

module.exports = product;