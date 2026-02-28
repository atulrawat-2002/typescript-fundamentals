import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    email: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin']
    }
}, {timestamps: true})


export const User = model('users', userSchema);


const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    item: [{
        productName: String,
        quantity: Number,
        price: Number
    }],
    total: Number,
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled']
    }
}, {timestamps: true})

export const Order = model('orders', orderSchema);